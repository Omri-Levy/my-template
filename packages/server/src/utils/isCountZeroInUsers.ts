import User from '../models/User.model';

const isCountZeroInUsers = async (
  key?: string,
  value?: string
): Promise<boolean> => {
  let where;

  if (key) {
    where = {
      [key]: value || key,
    };
  }

  return (await User.count(where)) === 0;
};

export default isCountZeroInUsers;
