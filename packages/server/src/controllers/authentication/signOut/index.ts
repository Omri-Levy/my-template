import { Request, Response } from 'express';
import sendJwtToken from '../../../utils/sendJwtToken';

const signOut = async (_: Request, res: Response): Promise<void> => {
  try {
    await sendJwtToken(res, ``);

    console.log(`Sign out successful.`);

    res.status(200).send({ status: `success` });
  } catch (error) {
    console.error(error);

    res.status(500).send({ error });
  }
};

export default signOut;
