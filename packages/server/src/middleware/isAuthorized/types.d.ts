import { NextFunction, Request, Response } from 'express';
import { Roles } from '@my-template/shared/src/utils/types';

type IsAuthorizedMiddleware = (
  role: Roles
) => (req: Request, res: Response, next: NextFunction) => void;

export { IsAuthorizedMiddleware };
