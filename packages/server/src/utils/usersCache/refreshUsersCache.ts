import User from '../../models/User.model';
import setUsersCache from './setUsersCache';

/**
 * TODO: in the future only update the updated users and manage to use hmap
 */
const refreshUsersCache = async (): Promise<any> => {
  const allUsers = await User.findAll({
    attributes: {
      include: [`id`, `email`, `firstName`, `lastName`, `role`],
    },
  });

  if (allUsers) {
    await setUsersCache(allUsers);

    return allUsers;
  }

  return null;
};

export default refreshUsersCache;
