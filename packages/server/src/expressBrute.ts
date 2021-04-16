import ExpressBrute, { FailCallback } from 'express-brute';
import {
  calculateHours,
  calculateMinutes,
  lockoutMessage,
  secondsToHours,
} from '@my-template/shared';
import { DateTime } from 'luxon';
import RedisStore from 'express-brute-redis';

const failCallback: FailCallback = (_req, res, _next, nextValidRequestDate) => {
  const retryIn = DateTime.fromJSDate(nextValidRequestDate).toRelative();
  const message = `${lockoutMessage} ${retryIn}.`;

  res?.status(429)?.send({ message });
};
const store = new RedisStore({
  host: `127.0.0.1`,
  port: 6379,
});
const bruteForceOptions = {
  freeRetries: 5,
  minWait: calculateMinutes(10) + calculateMinutes(1),
  maxWait: calculateHours(24),
  lifetime: secondsToHours(24),
  refreshTimeoutOnRequest: false,
  failCallback,
};
const bruteForce = new ExpressBrute(store, bruteForceOptions);

export default bruteForce;
