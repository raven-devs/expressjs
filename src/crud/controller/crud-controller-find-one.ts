import { NextFunction, Request, Response } from 'express';

export interface CrudControllerFindOne {
  findOne(req: Request, res: Response, next?: NextFunction): void;
}
