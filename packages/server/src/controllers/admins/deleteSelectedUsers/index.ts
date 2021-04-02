import { deleteSelectedUsersMessage, isUuidV4 } from '@my-template/shared';
import User from '../../../models/User.model';
import { Route } from '../../../utils/types';

const deleteSelectedUsers: Route = async (req, res) => {
  try {
    const { userIds } = req.body;
    let isAnArrayOfUuidV4 = true;

    if (!Array.isArray(userIds)) {
      isAnArrayOfUuidV4 = false;
    } else {
      userIds.forEach((userId: string) => {
        if (!isUuidV4.test(userId)) {
          isAnArrayOfUuidV4 = false;
        }
      });
    }

    if (userIds.length === 0 || !isAnArrayOfUuidV4) {
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
