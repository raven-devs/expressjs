import { NextFunction, Request, RequestHandler, Response } from 'express';

export interface CrudRouterRemove {
  preRemove(): RequestHandler[];
  remove(req: Request, res: Response, next: NextFunction): Promise<void>;
}
