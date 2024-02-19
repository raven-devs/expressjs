import { NextFunction, Request, RequestHandler, Response } from 'express';

export interface CrudRouterFindOne {
  preFindOne(): RequestHandler[];
  findOne(req: Request, res: Response, next: NextFunction): Promise<void>;
}
