import express, { NextFunction, Request, RequestHandler, Response, Router } from 'express';
import { CrudRouterCreate } from './type/crud-router-create';
import { CrudRouterFindAll } from './type/crud-router-find-all';
import { CrudRouterFindOne } from './type/crud-router-find-one';
import { CrudRouterRemove } from './type/crud-router-remove';
import { CrudRouterUpdate } from './type/crud-router-update';

export abstract class CrudRouterBase
  implements CrudRouterFindAll, CrudRouterFindOne, CrudRouterCreate, CrudRouterUpdate, CrudRouterRemove
{
  protected router: Router;

  constructor(protected routerPath: string) {
    this.router = express.Router();
  }

  mount(): Router {
    this.router.get(`${this.routerPath}/`, this.preFindAll(), this.findAll);
    this.router.get(`${this.routerPath}/:id`, this.preFindOne(), this.findOne);
    this.router.post(`${this.routerPath}/`, this.preCreate(), this.create);
    this.router.patch(`${this.routerPath}/:id`, this.preUpdate(), this.update);
    this.router.put(`${this.routerPath}/:id`, this.preUpdate(), this.update);
    this.router.delete(`${this.routerPath}/:id`, this.preRemove(), this.remove);

    return this.router;
  }

  preFindAll(): RequestHandler[] {
    return [this.cbNext];
  }
  abstract findAll(req: Request, res: Response, next: NextFunction): Promise<void>;

  preFindOne(): RequestHandler[] {
    return [this.cbNext];
  }
  abstract findOne(req: Request, res: Response, next: NextFunction): Promise<void>;

  preCreate(): RequestHandler[] {
    return [this.cbNext];
  }
  abstract create(req: Request, res: Response, next: NextFunction): Promise<void>;

  preUpdate(): RequestHandler[] {
    return [this.cbNext];
  }
  abstract update(req: Request, res: Response, next: NextFunction): Promise<void>;

  preRemove(): RequestHandler[] {
    return [this.cbNext];
  }
  abstract remove(req: Request, res: Response, next: NextFunction): Promise<void>;

  private cbNext(req: Request, res: Response, next: NextFunction) {
    next();
  }
}
