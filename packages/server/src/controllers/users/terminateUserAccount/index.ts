import { terminateUserAccountMessage, UserObject } from '@my-template/shared';
import User from '../../../models/User.model';
import { Route } from '../../../utils/types';

const terminateUserAccount: Route = async (req, res) => {
  try {
    const user = req.user as UserObject;
    const { id, role } = user;

    const isOnlyAdmin = (await User.count({ where: { role: `admin` } })) === 1;

    if (isOnlyAdmin && role === `admin`) {
      console.log(terminateUserAccountMessage);

      res.status(400).send({ message: terminateUserAccountMessage });

      return;
    }

    await User.destroy({ where: { id } });

    res.status(200).send({ status: `success` });
  } catch (error) {
    console.error(error);

    res.status(500).send({ error });
  }
};

export default terminateUserAccount;
