import express, { Express } from 'express';
import { ProductController } from '../../api/product/product-controller';
import { ProductRouter } from '../../api/product/product-router';
import { ExceptionInvalidAppConfig } from '../../exception/custom/exception-invalid-app-config';
import { Signal } from '../../process/signal/type/signal';
import { AppBase } from '../app-base';
import { useStatic } from './middleware/useStatic';

const PORT = 8080;

export class AppExpress extends AppBase {
  private app: Express;
  private port: number;

  constructor() {
    super();

    this.app = express();

    this.port = this.config.get<number>('PORT', PORT);
    if (!this.port) {
      throw new ExceptionInvalidAppConfig();
    }
  }

  start() {
    const productController = new ProductController();
    const productRouter = new ProductRouter(this.logger, productController);
    this.app.use('/', productRouter.mount());

    useStatic(this.app, '/public', 'public');

    this.startHttpServer();
  }

  private startHttpServer() {
    this.app.listen(this.port, async () => {
      const envHosting = this.config.getNodeEnv();
      await this.logger.log(`Application is running at port ${this.port} in a ${`${envHosting}`} hosting environment`);
    });
  }

  onStop(signal: Signal) {
    if (signal === Signal.USER2) {
      process.kill(process.pid, signal);
    }
    process.exit();
  }
}
