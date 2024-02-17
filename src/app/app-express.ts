import express, { Express } from 'express';
import { ExceptionInvalidAppConfig } from '../exception/exception-invalid-app-config';
import { Signal } from '../process/signal/type/signal';
import { AppBase } from './app-base';

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
    this.app.get('/', (req, res) => {
      res.status(200).send('Hello World!');
    });

    this.useStatic('/public', 'public');

    this.startServer();
  }

  private startServer() {
    this.app.listen(this.port, () => {
      const envHosting = this.config.getNodeEnv();
      this.logger.log(`Application is running at port ${this.port} in a ${`${envHosting}`} hosting environment`);
    });
  }

  useStatic(urlPath: string, dirPath: string) {
    this.app.use(urlPath, express.static(dirPath));
  }

  onStop(signal: Signal) {
    if (signal === Signal.USER2) {
      process.kill(process.pid, signal);
    }
    process.exit();
  }
}
