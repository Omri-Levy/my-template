import { User } from '@my-template/shared';
import { IsAuthorizedMiddleware } from './types';

const isAuthorized: IsAuthorizedMiddleware = (role) => async (
  req,
  res,
  next
) => {
  const user = req.user as User;

  if (role !== user?.role) {
    const errorMessage = `Unauthorized`;

    console.error(errorMessage);

    res.status(401).send(errorMessage);

    return;
  }

  next();
};

export default isAuthorized;
