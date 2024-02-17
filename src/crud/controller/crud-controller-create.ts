import { Request, Response } from 'express';

export interface CrudControllerCreate {
  create(req: Request, res: Response): Promise<void>;
}
