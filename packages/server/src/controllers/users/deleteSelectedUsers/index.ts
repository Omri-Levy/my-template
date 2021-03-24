import { deleteSelectedUsersMessage } from '@my-template/shared';
import User from '../../../models/User.model';
import { Route } from '../../../utils/types';

const deleteSelectedUsers: Route = async (req, res) => {
  try {
    const { userIds } = req.body;

    if (userIds.length === 0) {
      console.error(deleteSelectedUsersMessage);

      res.status(400).send({ message: deleteSelectedUsersMessage });

      return;
    }

    await User.destroy({ where: { id: userIds } });

    res.status(200).send({ status: `success` });
  } catch (error) {
    console.error(error);

    res.status(500).send({ error });
  }
};

export default deleteSelectedUsers;
