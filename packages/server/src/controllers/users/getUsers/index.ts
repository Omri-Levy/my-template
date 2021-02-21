import { Response } from 'express';
import User from '../../../models/User.model';

const getUsers = async (res: Response): Promise<void> => {
  try {
    const users = await User.findAll();

    res.status(200).json({ status: `success`, users });
  } catch (err) {
    console.error(err);

    res.status(500).json({ error: err });
  }
};

export default getUsers;
