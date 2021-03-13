import { NextFunction, Request, Response } from 'express';
import { Roles } from '../../utils/types';

type IsAuthorizedMiddleware = (
  role: Roles
) => (req: Request, res: Response, next: NextFunction) => void;

export { IsAuthorizedMiddleware };
