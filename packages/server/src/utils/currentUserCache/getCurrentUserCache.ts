import { redisClient } from '../../redis';

const getCurrentUserCache = async (): Promise<any> => {
  const currentUser = await redisClient.get(`currentUser`);

  if (currentUser) {
    return JSON.parse(currentUser);
  }

  return null;
};

export default getCurrentUserCache;
