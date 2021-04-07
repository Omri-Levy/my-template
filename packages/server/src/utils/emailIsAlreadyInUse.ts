import { emailAlreadyInUseMessage } from '@my-template/shared';
import { Response } from 'express';
import isCountOneInUsers from './isCountOneInUsers';

const emailIsAlreadyInUse = async (
  email: string,
  res: Response
): Promise<boolean> => {
  const emailAlreadyInUse = email
    ? await isCountOneInUsers(`email`, email)
    : false;

  if (emailAlreadyInUse) {
    console.error(emailAlreadyInUseMessage);

    res.status(400).send({ message: emailAlreadyInUseMessage });

    return true;
  }

  return false;
};

export default emailIsAlreadyInUse;
