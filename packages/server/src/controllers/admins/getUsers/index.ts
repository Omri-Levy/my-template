import { Route } from '../../../utils/types';
import getUsersCache from '../../../utils/usersCache/getUsersCache';

const getUsers: Route = async (_req, res) => {
  try {
    const users = await getUsersCache();

    console.log(users);

    res.status(200).send({ status: `success`, users });
  } catch (error) {
    console.error(error);

    res.status(500).send({ error });
  }
};

export default getUsers;
