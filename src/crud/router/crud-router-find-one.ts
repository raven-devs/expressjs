import { NextFunction, Request, Response } from 'express';

export interface CrudRouterFindOne {
  findOne(req: Request, res: Response, next?: NextFunction): Promise<void>;
}
