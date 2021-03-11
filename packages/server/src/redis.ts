import redis from 'redis';
import { promisify } from 'util';

const redisClient = redis.createClient();
const getAsync = promisify(redisClient.get).bind(redisClient);
const setAsync = promisify(redisClient.set).bind(redisClient);
const setnxAsync = promisify(redisClient.setnx).bind(redisClient);
const decrAsync = promisify(redisClient.decr).bind(redisClient);
const keysAsync = promisify(redisClient.keys).bind(redisClient);

export {
  redisClient,
  redis,
  getAsync,
  setAsync,
  setnxAsync,
  decrAsync,
  keysAsync,
};
