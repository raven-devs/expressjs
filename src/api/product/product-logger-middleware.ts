import { NextFunction, Request, Response } from 'express';
import { Logger } from '../../logger/type/logger';

export const ProductLoggerMiddleware = (logger: Logger) => async (req: Request, res: Response, next: NextFunction) => {
  await logger.log('Time: ', Date.now());
  next();
};
