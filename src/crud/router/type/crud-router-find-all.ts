import { NextFunction, Request, RequestHandler, Response } from 'express';

export interface CrudRouterFindAll {
  preFindAll(): RequestHandler[];
  findAll(req: Request, res: Response, next: NextFunction): Promise<void>;
}
