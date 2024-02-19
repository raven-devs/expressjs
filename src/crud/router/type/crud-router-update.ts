import { NextFunction, Request, RequestHandler, Response } from 'express';

export interface CrudRouterUpdate {
  preUpdate(): RequestHandler[];
  update(req: Request, res: Response, next: NextFunction): Promise<void>;
}
