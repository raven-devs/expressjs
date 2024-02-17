import { NextFunction, Request, Response } from 'express';

export interface CrudControllerRemove {
  remove(req: Request, res: Response, next?: NextFunction): void;
}
