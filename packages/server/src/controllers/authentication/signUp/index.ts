import { Request, Response } from 'express';
import { hash } from 'argon2';
import { emailAlreadyInUseMessage, signUpSchema } from '@my-template/shared';

import User from '../../../models/User.model';

const signUp = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      fname: firstName,
      lname: lastName,
      email,
      password,
      role,
    } = req.body;
    const hashedPassword = await hash(password);

    await signUpSchema.isValid(req.body);
    const user = await User.findOne({ where: { email } });

    if (user) {
      console.error(emailAlreadyInUseMessage);

      res.status(400).send({ message: emailAlreadyInUseMessage });

      return;
    }

    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      role: role || `user`,
    });

    await newUser.save();

    console.log(`New user was added.`);

    res.status(200).send({ status: `success` });
  } catch (err) {
    console.error(err);

    res.status(500).send({ error: err });
  }
};

export default signUp;
