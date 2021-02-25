import { Response } from 'express';
import User from '../../../models/User.model';

const getUsers = async (res: Response): Promise<void> => {
  try {
    const users = await User.findAll();

    res.status(200).send({ status: `success`, users });
  } catch (err) {
    console.error(err);

    res.status(500).send({ error: err });
  }
};

export default getUsers;
