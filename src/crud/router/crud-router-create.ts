import { NextFunction, Request, Response } from 'express';

export interface CrudRouterCreate {
  create(req: Request, res: Response, next?: NextFunction): Promise<void>;
}
