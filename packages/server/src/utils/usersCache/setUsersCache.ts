import { Users } from '@my-template/shared';
import { redisClient } from '../../redis';

const setUsersCache = async (users: Users): Promise<any> => {
  if (users) {
    await redisClient.set(`users`, JSON.stringify(users));
  }
};

export default setUsersCache;
