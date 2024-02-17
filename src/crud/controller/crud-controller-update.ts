import { NextFunction, Request, Response } from 'express';

export interface CrudControllerUpdate {
  update(req: Request, res: Response, next?: NextFunction): void;
}
