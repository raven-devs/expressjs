import { Request, Response } from 'express';

export interface CrudControllerUpdate {
  update(req: Request, res: Response): Promise<void>;
}
