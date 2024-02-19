import { NextFunction, Request, RequestHandler, Response } from 'express';

export interface CrudRouterCreate {
  preCreate(): RequestHandler[];
  create(req: Request, res: Response, next: NextFunction): Promise<void>;
}
