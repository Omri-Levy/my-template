import { Route } from '../../../utils/types';

const validateResetPasswordToken: Route = (_req, res) => {
  try {
    res.status(200).send({ status: `success` });
  } catch (error) {
    res.status(500).send({ error });
  }
};

export default validateResetPasswordToken;
