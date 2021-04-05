import resetCurrentUserCache from './currentUserCache/resetCurrentUserCache';
import resetUsersCache from './usersCache/resetUsersCache';

const resetCurrentUserAndUsersCache = async (): Promise<void> => {
  await resetCurrentUserCache();
  await resetUsersCache();
};

export default resetCurrentUserAndUsersCache;
