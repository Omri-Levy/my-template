import sendJwtToken from '../../../utils/sendJwtToken';
import { Route } from '../../../utils/types';
import resetCurrentUserAndUsersCache from '../../../utils/resetCurrentUserAndUsersCache';

const signOut: Route = async (_req, res): Promise<void> => {
  try {
    await sendJwtToken(res, ``);

    console.log(`Sign out successful.`);

    await resetCurrentUserAndUsersCache();

    res?.status(200)?.send({ status: `success` });
  } catch (error) {
    console.error(error);

    res?.status(500)?.send({ error });
  }
};

export default signOut;
