import {
  deleteSelectedUsersMessage,
  isUuidV4,
  unauthorizedMessage,
  UserObject,
} from '@my-template/shared';
import User from '../../../models/User.model';
import { Route } from '../../../utils/types';
import refreshUsersCache from '../../../utils/usersCache/refreshUsersCache';

const deleteSelectedUsers: Route = async (req, res) => {
  try {
    const { userIds } = req?.body;
    const user = req?.user as UserObject;
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

      res?.status(400)?.send({ message: deleteSelectedUsersMessage });

      return;
    }

    /**
     * making sure only admins can update everyone and no one can update them.
     */
    const currentUserIsAdmin = user?.role === `admin`;
    const userToDelete = await User.findOne({ where: { id: uniqueUserIds } });

    if (!currentUserIsAdmin && userToDelete?.role === `admin`) {
      console.error(unauthorizedMessage);

      res?.status(401)?.send({ message: unauthorizedMessage });

      return;
    }

    await userToDelete?.destroy();

    await refreshUsersCache();

    res?.status(200)?.send({ status: `success` });
  } catch (error) {
    console.error(error);

    res?.status(500)?.send({ error });
  }
};

export default deleteSelectedUsers;
