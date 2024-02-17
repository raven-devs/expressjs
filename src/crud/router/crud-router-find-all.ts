import { NextFunction, Request, Response } from 'express';

export interface CrudRouterFindAll {
  findAll(req: Request, res: Response, next?: NextFunction): Promise<void>;
}
