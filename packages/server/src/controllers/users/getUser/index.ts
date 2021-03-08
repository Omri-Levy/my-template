import { Route } from '../../../utils/types';

const getUser: Route = async (req, res) => {
  try {
    const { user } = req;

    res.status(200).send({ status: `success`, user });
  } catch (error) {
    console.error(error);

    res.status(500).send({ error });
  }
};

export default getUser;
