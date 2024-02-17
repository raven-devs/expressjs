import { NextFunction, Request, Response } from 'express';

export interface CrudRouterUpdate {
  update(req: Request, res: Response, next?: NextFunction): Promise<void>;
}
