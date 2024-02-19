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
  async findAll(req: Request, res: Response) {
    throw new Error('Method not implemented.');
  }

  async findOne(req: Request, res: Response) {
    throw new Error('Method not implemented.');
  }

  async create(req: Request, res: Response) {
    throw new Error('Method not implemented.');
  }

  async update(req: Request, res: Response) {
    throw new Error('Method not implemented.');
  }

  async remove(req: Request, res: Response) {
    throw new Error('Method not implemented.');
  }
}
