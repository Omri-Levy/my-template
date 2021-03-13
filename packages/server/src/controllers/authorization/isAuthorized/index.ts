import { Route } from '../../../utils/types';

const isAuthorized: Route = async (_req, res) => {
  try {
    res.status(200).send({ status: `success` });
  } catch (error) {
    console.error(error);

    res.status(500).send({ error });
  }
};

export default isAuthorized;
