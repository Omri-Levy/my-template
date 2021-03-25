import { deleteAllUsersSchema, User as UserType } from '@my-template/shared';
import { Op } from 'sequelize';
import { Route } from '../../../utils/types';
import User from '../../../models/User.model';

const deleteAllUsers: Route = async (req, res) => {
  try {
    const user = req.user as UserType;
    const { deleteAdmins } = req.body;

    await deleteAllUsersSchema.validate({ deleteAdmins });

    if (deleteAdmins) {
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

    res.status(200).send({ status: `success` });
  } catch (error) {
    const { name, errors } = error;

    if (name === `ValidationError`) {
      console.error(errors);

      res.status(400).send({ message: errors });

      return;
    }

    console.error(error);

    res.status(500).send({ error });
  }
};

export default deleteAllUsers;
