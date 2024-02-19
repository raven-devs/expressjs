import { Request, Response } from 'express';

export interface CrudControllerRemove {
  remove(req: Request, res: Response): Promise<void>;
}
