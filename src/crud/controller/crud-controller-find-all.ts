import { NextFunction, Request, Response } from 'express';

export interface CrudControllerFindAll {
  findAll(req: Request, res: Response, next?: NextFunction): void;
}
