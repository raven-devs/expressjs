import express, { Express } from 'express';
import { Signal } from '../signal/type/signal';
import { AppBase } from './app-base';

export class AppExpress extends AppBase {
  private app: Express;

  constructor() {
    super();
    this.app = express();
  }

  start() {
    this.app.get('/', (req, res) => {
      res.status(200).send('Hello World!');
    });

    this.startServer();
  }

  private startServer() {
    const port = this.config.get<number>('PORT', 8080);
    const nodeEnv = this.config.get<string>('NODE_ENV');
    if (!port || !nodeEnv) {
      throw new Error('Invalid application configuration');
    }

    this.app.listen(port, () => {
      this.logger.log(`Application is running at port ${port} in a ${`${nodeEnv}`.toUpperCase()} hosting environment`);
    });
  }

  onStop(signal: Signal): void {
    if (signal === Signal.USER2) {
      process.kill(process.pid, signal);
    }
    process.exit();
  }
}
