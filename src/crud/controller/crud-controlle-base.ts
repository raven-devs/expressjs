import { Request, Response } from 'express';
import { CrudControllerCreate } from './type/crud-controller-create';
import { CrudControllerFindAll } from './type/crud-controller-find-all';
import { CrudControllerFindOne } from './type/crud-controller-find-one';
import { CrudControllerRemove } from './type/crud-controller-remove';
import { CrudControllerUpdate } from './type/crud-controller-update';

export abstract class CrudControllerBase
  implements
    CrudControllerFindAll,
    CrudControllerFindOne,
    CrudControllerCreate,
    CrudControllerUpdate,
    CrudControllerRemove
{
  findAll(req: Request, res: Response): Promise<void> {
    throw new Error('Method not implemented.');
  }
  findOne(req: Request, res: Response): Promise<void> {
    throw new Error('Method not implemented.');
  }
  create(req: Request, res: Response): Promise<void> {
    throw new Error('Method not implemented.');
  }
  update(req: Request, res: Response): Promise<void> {
    throw new Error('Method not implemented.');
  }
  remove(req: Request, res: Response): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
