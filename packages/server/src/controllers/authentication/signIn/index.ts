import { verify } from 'argon2';
import { signInSchema, wrongCredentialsMessage } from '@my-template/shared';
import { Request, Response } from 'express';
import User from '../../../models/User.model';
import generateJwtToken from '../signUp/generateJwtToken';
import sendJwtToken from '../../../utils/sendJwtToken';

const signIn = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;

    await signInSchema.isValid(req.body);
    const user = await User.findOne({ where: { email } });
    const passwordMatches = user ? await verify(user.password, password) : null;

    if (!user || !passwordMatches) {
      console.error(wrongCredentialsMessage);

      res.status(401).send({ message: wrongCredentialsMessage });

      return;
    }

    const jwtToken = generateJwtToken(user);
    await sendJwtToken(res, jwtToken);

    console.log(`Sign in successful.`);

    res.status(200).send({ status: `success` });
  } catch (error) {
    console.error(error);

    res.status(500).send({ error });
  }
};

export default signIn;
