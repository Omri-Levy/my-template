import { deleteSelectedUsersMessage, isUuidV4 } from '@my-template/shared';
import User from '../../../models/User.model';
import { Route } from '../../../utils/types';
import refreshUsersCache from '../../../utils/usersCache/refreshUsersCache';

const deleteSelectedUsers: Route = async (req, res) => {
  try {
    const { userIds } = req.body;
    const uniqueUserIds = Array.from(new Set(userIds));
    let isAnArrayOfUuidV4 = true;

    if (!Array.isArray(uniqueUserIds)) {
      isAnArrayOfUuidV4 = false;
    } else {
      uniqueUserIds.forEach((userId: string) => {
        if (!isUuidV4.test(userId)) {
          isAnArrayOfUuidV4 = false;
        }
      });
    }

    if (uniqueUserIds?.length === 0 || !isAnArrayOfUuidV4) {
      console.error(deleteSelectedUsersMessage);

      res.status(400).send({ message: deleteSelectedUsersMessage });

      return;
    }

    await User.destroy({ where: { id: uniqueUserIds } });

    await refreshUsersCache();

    res.status(200).send({ status: `success` });
  } catch (error) {
    console.error(error);

    res.status(500).send({ error });
  }
};

export default deleteSelectedUsers;
