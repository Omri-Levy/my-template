import { Request, Response } from 'express';

const getUser = async (req: Request, res: Response): Promise<void> => {
  try {
    res.status(200).json({ status: `success`, user: req.user });
  } catch (err) {
    console.error(err);

    res.status(500).json({ error: err });
  }
};

export default getUser;
