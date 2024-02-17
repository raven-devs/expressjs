import express, { Router } from 'express';
import { v4 as uuid } from 'uuid';
import { Logger } from '../../logger/type/logger';

export class ProductRoute {
  private router: Router;
  private logger: Logger;

  constructor(logger: Logger) {
    this.logger = logger;
    this.router = express.Router();

    this.router.use((req, res, next) => {
      this.logger.log('Time: ', Date.now());
      next();
    });

    this.router.get('/', (req, res) => {
      res.send({ id: uuid() });
    });

    this.router.get('/about', (req, res) => {
      res.send({ id: uuid(), about: true });
    });
  }

  get(): Router {
    return this.router;
  }
}
