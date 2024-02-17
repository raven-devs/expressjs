import { NextFunction, Request, Response } from 'express';

export interface CrudControllerCreate {
  create(req: Request, res: Response, next?: NextFunction): void;
}
