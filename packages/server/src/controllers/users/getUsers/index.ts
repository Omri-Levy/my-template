import User from '../../../models/User.model';
import { Route } from '../../../utils/types';

const getUsers: Route = async (_req, res) => {
  try {
    const users = await User.findAll();

    res.status(200).send({ status: `success`, users });
  } catch (error) {
    console.error(error);

    res.status(500).send({ error });
  }
};

export default getUsers;
