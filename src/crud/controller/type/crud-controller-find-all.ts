import { Request, Response } from 'express';

export interface CrudControllerFindAll {
  findAll(req: Request, res: Response): Promise<void>;
}
