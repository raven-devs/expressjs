import { Request, Response } from 'express';

export interface CrudControllerFindOne {
  findOne(req: Request, res: Response): Promise<void>;
}
