import { NextFunction, Request, Response } from 'express';
import { Roles } from '@my-template/shared';

type IsAuthorizedMiddleware = (
  roles: Roles
) => (req: Request, res: Response, next: NextFunction) => void;

export { IsAuthorizedMiddleware };
