import { Route } from '../../../utils/types';
import resetUsersCache from '../../../utils/usersCache/resetUsersCache';

const isAuthorized: Route = async (_req, res) => {
  try {
    res?.status(200)?.send({ status: `success` });
  } catch (error) {
    console.error(error);

    await resetUsersCache();

    res?.status(500)?.send({ error });
  }
};

export default isAuthorized;
