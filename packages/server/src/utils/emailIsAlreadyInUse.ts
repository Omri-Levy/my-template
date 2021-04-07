import { emailAlreadyInUseMessage, UserObject } from '@my-template/shared';
import { Response } from 'express';
import isCountOneInUsers from './isCountOneInUsers';

const emailIsAlreadyInUse = async (
  email: string,
  res: Response,
  user?: UserObject
): Promise<boolean> => {
  const emailAlreadyInUse = email
    ? await isCountOneInUsers(`email`, email)
    : false;
  const currentUserEmail = user?.email === email;

  if (emailAlreadyInUse && !currentUserEmail) {
    console.error(emailAlreadyInUseMessage);

    res.status(400).send({ message: emailAlreadyInUseMessage });

    return true;
  }

  return false;
};

export default emailIsAlreadyInUse;
