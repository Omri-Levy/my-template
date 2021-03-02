import { Request, Response } from 'express';

const getUser = async (req: Request, res: Response): Promise<void> => {
  try {
    res.status(200).send({ status: `success`, user: req.user });
  } catch (error) {
    console.error(error);

    res.status(500).send({ error });
  }
};

export default getUser;
