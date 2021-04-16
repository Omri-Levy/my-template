import { Route } from '../../../utils/types';

const authenticate: Route = async (req, res) => {
  try {
    const { user } = req;
    console.log(user);

    res?.status(200)?.send({ status: `success`, user });
  } catch (error) {
    console.error(error);

    res?.status(500)?.send({ error });
  }
};

export default authenticate;
