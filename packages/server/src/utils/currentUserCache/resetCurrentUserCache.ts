import { redisClient } from '../../redis';

const resetCurrentUserCache = async (): Promise<unknown> =>
  await redisClient.del(`currentUser`);

export default resetCurrentUserCache;
