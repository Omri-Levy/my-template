import { User } from '@my-template/shared';
import { redisClient } from '../../redis';

const setCurrentUserCache = async (user: User): Promise<void> => {
  if (user && user !== `unauthenticated`) {
    await redisClient.set(`currentUser`, JSON.stringify(user));
  }
};

export default setCurrentUserCache;
