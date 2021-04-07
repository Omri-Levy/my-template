import { unauthorizedMessage, UserObject } from '@my-template/shared';
import { IsAuthorizedMiddleware } from './types';

const isAuthorized: IsAuthorizedMiddleware = (roles) => async (
  req,
  res,
  next
) => {
  const user = req.user as UserObject;

  if (!roles.includes(user?.role)) {
    console.error(unauthorizedMessage);

    res.status(401).send({ message: unauthorizedMessage });

    return;
  }

  next();
};

export default isAuthorized;
