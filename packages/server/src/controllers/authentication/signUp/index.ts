import { hash } from 'argon2';
import { emailAlreadyInUseMessage, signUpSchema } from '@my-template/shared';

import User from '../../../models/User.model';
import { Route } from '../../../utils/types';

const signUp: Route = async (req, res) => {
  try {
    const {
      fname: firstName,
      lname: lastName,
      email,
      securityQuestion,
      securityAnswer,
      password,
      role,
    } = req.body;
    console.log(req.body);
    await signUpSchema.isValid(req.body);

    const hashedPassword = await hash(password);
    const hashedSecurityQuestion = await hash(securityQuestion);
    const hashedSecurityAnswer = await hash(securityAnswer);

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
      securityQuestion: hashedSecurityQuestion,
      securityAnswer: hashedSecurityAnswer,
      password: hashedPassword,
      role: role || `user`,
    });

    await newUser.save();

    console.log(`New user was added.`);

    res.status(200).send({ status: `success` });
  } catch (error) {
    console.error(error);

    res.status(500).send({ error });
  }
};

export default signUp;
