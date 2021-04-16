import { deleteAllUsersSchema, UserObject } from '@my-template/shared';
import { Op } from 'sequelize';
import { Route } from '../../../utils/types';
import User from '../../../models/User.model';
import refreshUsersCache from '../../../utils/usersCache/refreshUsersCache';
import isCountOneInUsers from '../../../utils/isCountOneInUsers';

const deleteAllUsers: Route = async (req, res) => {
  try {
    const user = req?.user as UserObject;
    const { deleteAdmins } = req?.body;

    await deleteAllUsersSchema.validate({ deleteAdmins });
    const isOnlyAdmin = await isCountOneInUsers(`role`, `admin`);

    if (deleteAdmins && !isOnlyAdmin) {
      await User.destroy({
        where: {
          id: {
            [Op.not]: user.id,
          },
        },
      });
    } else {
      await User.destroy({
        where: {
          id: {
            [Op.not]: user.id,
          },
          role: {
            [Op.not]: `admin`,
          },
        },
      });
    }

    await refreshUsersCache();

    res?.status(200)?.send({ status: `success` });
  } catch (error) {
    const { name, errors } = error;

    if (name === `ValidationError`) {
      console.error(errors);

      res?.status(400)?.send({ message: errors });

      return;
    }

    console.error(error);

    res?.status(500)?.send({ error });
  }
};

export default deleteAllUsers;
