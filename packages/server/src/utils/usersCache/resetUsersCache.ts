import { redisClient } from '../../redis';

const resetUsersCache = async (): Promise<unknown> =>
  await redisClient.del(`users`);

export default resetUsersCache;
