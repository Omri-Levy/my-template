import User from '../models/User.model';

const isCountOneInUsers = async (
  key?: string,
  value?: string
): Promise<boolean> => {
  let where;

  if (key) {
    where = {
      [key]: value || key,
    };
  }

  return (await User.count(where)) === 1;
};

export default isCountOneInUsers;
