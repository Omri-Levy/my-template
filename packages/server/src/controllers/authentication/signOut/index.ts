import { Request, Response } from 'express';
import sendJwtToken from '../../../utils/sendJwtToken';

const signOut = async (_: Request, res: Response): Promise<void> => {
  try {
    await sendJwtToken(res, ``);

    console.log(`Sign out successful.`);

    res.status(200).json({ status: `success` });
  } catch (err) {
    console.error(err);

    res.status(500).json({ error: err });
  }
};

export default signOut;
