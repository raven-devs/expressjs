import { NextFunction, Request, Response } from 'express';
import { CrudRouterBase } from '../../crud/router/crud-router-base';
import { Logger } from '../../logger/type/logger';
import { ProductController } from './product-controller';
import { ProductLoggerMiddleware } from './product-logger-middleware';

export class ProductRouter extends CrudRouterBase {
  constructor(
    private logger: Logger,
    private controller: ProductController,
  ) {
    super('/products');

    this.router.use(ProductLoggerMiddleware(this.logger));
  }

  async findAll(req: Request, res: Response, next: NextFunction) {
    try {
      console.log('findAll');
      res.end();
    } catch (error) {
      next(error);
    }
  }

  async findOne(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      console.log('findOne');
      res.end();
    } catch (error) {
      next(error);
    }
  }

  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      console.log('create');
      res.end();
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      console.log('update');
      res.end();
    } catch (error) {
      next(error);
    }
  }

  async remove(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      console.log('remove');
      res.end();
    } catch (error) {
      next(error);
    }
  }
}
