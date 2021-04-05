import refreshUsersCache from './refreshUsersCache';
import { redisClient } from '../../redis';

const getUsersCache = async (): Promise<any> => {
  let users = await redisClient.get(`users`);

  if (!users) {
    users = await refreshUsersCache();
  } else {
    users = JSON.parse(users);
  }

  return users;
};

export default getUsersCache;
