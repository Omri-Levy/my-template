import { sign } from 'jsonwebtoken';
import User from '../../../models/User.model';

const generateToken = (user: User): string => {
  const { JWT_SECRET } = process.env;
  const { id, tokenVersion } = user;

  return sign(
    {
      id,
      tokenVersion,
    },
    JWT_SECRET as string,
    { expiresIn: `9h` }
  );
};

export default generateToken;
