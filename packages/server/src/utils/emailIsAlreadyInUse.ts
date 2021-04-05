import { emailAlreadyInUseMessage } from '@my-template/shared';
import { Response } from 'express';
import isCountOneInUsers from './isCountOneInUsers';
import User from '../models/User.model';

const emailIsAlreadyInUse = async (
  email: string,
  user: User | null,
  res: Response
): Promise<boolean> => {
  let emailAlreadyInUse = false;

  if (email) {
    emailAlreadyInUse = await isCountOneInUsers(email);
  }

  if (emailAlreadyInUse && user?.email !== email) {
    console.error(emailAlreadyInUseMessage);

    res.status(400).send({ message: emailAlreadyInUseMessage });

    return true;
  }

  return false;
};

export default emailIsAlreadyInUse;
