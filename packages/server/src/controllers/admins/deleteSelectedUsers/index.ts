import { deleteSelectedUsersMessage } from '@my-template/shared';
import User from '../../../models/User.model';
import { Route } from '../../../utils/types';

const deleteSelectedUsers: Route = async (req, res) => {
  try {
    const { userIds } = req.body;
    let isAnArrayOfStrings = true;

    if (!Array.isArray(userIds)) {
      isAnArrayOfStrings = false;
    } else {
      userIds.forEach((userId: string | unknown) => {
        if (typeof userId !== `string`) {
          isAnArrayOfStrings = false;
        }
      });
    }

    if (userIds.length === 0 || !isAnArrayOfStrings) {
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
