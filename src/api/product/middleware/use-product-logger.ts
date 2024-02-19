import { NextFunction, Request, Response } from 'express';
import { Logger } from '../../../logger/type/logger';

export const useProductLogger = (logger: Logger) => async (req: Request, res: Response, next: NextFunction) => {
  await logger.log('Time: ', Date.now());
  next();
};
