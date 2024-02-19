import { NextFunction, Request, Response } from 'express';
import { CrudRouterBase } from '../../crud/router/crud-router-base';
import { Logger } from '../../logger/type/logger';
import { useProductLogger } from './middleware/use-product-logger';
import { ProductController } from './product-controller';

export class ProductRouter extends CrudRouterBase {
  constructor(
    private logger: Logger,
    private controller: ProductController,
  ) {
    super('/products');

    this.router.use(useProductLogger(this.logger));
  }

  async findAll(req: Request, res: Response, next: NextFunction) {
    try {
      res.send('findAll');
    } catch (error) {
      next(error);
    }
  }

  async findOne(req: Request, res: Response, next: NextFunction) {
    try {
      res.send('findOne');
    } catch (error) {
      next(error);
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      res.send('create');
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      res.send('update');
    } catch (error) {
      next(error);
    }
  }

  async remove(req: Request, res: Response, next: NextFunction) {
    try {
      res.send('remove');
    } catch (error) {
      next(error);
    }
  }
}
