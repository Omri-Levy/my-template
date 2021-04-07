import { hash } from 'argon2';
import { signUpSchema } from '@my-template/shared';

import User from '../../../models/User.model';
import { Route } from '../../../utils/types';
import isCountOneInUsers from '../../../utils/isCountOneInUsers';
import isCountZeroInUsers from '../../../utils/isCountZeroInUsers';
import emailIsAlreadyInUse from '../../../utils/emailIsAlreadyInUse';

const signUp: Route = async (req, res) => {
  try {
    await signUpSchema.validate(req?.body, {
      abortEarly: false,
    });

    const {
      fname: firstName,
      lname: lastName,
      email,
      securityQuestion,
      securityAnswer,
      password,
      role,
    } = req?.body;
    const hashedPassword = await hash(password);
    const hashedSecurityQuestion = await hash(securityQuestion);
    const hashedSecurityAnswer = await hash(securityAnswer);

    const isFirstUser = await isCountOneInUsers();
    const noAdmins = await isCountZeroInUsers(`role`, `admin`);

    let requiredRole = role || `user`;

    if (isFirstUser || noAdmins) {
      requiredRole = `admin`;
    }

    const emailAlreadyInUse = await emailIsAlreadyInUse(email, res);

    if (emailAlreadyInUse) {
      return;
    }

    const newUser = new User({
      firstName,
      lastName,
      email,
      securityQuestion: hashedSecurityQuestion,
      securityAnswer: hashedSecurityAnswer,
      password: hashedPassword,
      role: requiredRole,
    });

    await newUser.save();

    console.log(`New user was added.`);

    res.status(200).send({ status: `success` });
  } catch (error) {
    const { name, errors } = error;

    if (name === `ValidationError`) {
      console.error(errors);

      res.status(400).send({ message: errors });

      return;
    }

    console.error(error);

    res.status(500).send({ error });
  }
};

export default signUp;
