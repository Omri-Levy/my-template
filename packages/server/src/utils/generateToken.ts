import { sign } from 'jsonwebtoken';
import { GenerateToken } from '../controllers/authentication/signUp/types';

const generateToken: GenerateToken = (user, expiresIn): string => {
  const { JWT_SECRET } = process.env;
  const { id, tokenVersion } = user;

  return sign(
    {
      id,
      tokenVersion,
    },
    JWT_SECRET as string,
    { expiresIn }
  );
};

export default generateToken;
