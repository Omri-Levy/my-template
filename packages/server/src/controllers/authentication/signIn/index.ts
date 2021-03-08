import { signInSchema, wrongCredentialsMessage } from '@my-template/shared';
import User from '../../../models/User.model';
import generateJwtToken from '../../../utils/generateJwtToken';
import sendJwtToken from '../../../utils/sendJwtToken';
import { Route } from '../../../utils/types';
import verifyIfVerifiable from '../../../utils/verifyIfVerifiable';

const signIn: Route = async (req, res) => {
  try {
    const { email, password } = req.body;

    await signInSchema.isValid(req.body);
    const user = await User.findOne({ where: { email } });
    const verify = verifyIfVerifiable(user);
    const passwordMatches = await verify(user?.password, password);

    if (!user || !passwordMatches) {
      console.error(wrongCredentialsMessage);

      res.status(401).send({ message: wrongCredentialsMessage });

      return;
    }

    const jwtToken = generateJwtToken(user, `9h`);
    await sendJwtToken(res, jwtToken);

    console.log(`Sign in successful.`);

    res.status(200).send({ status: `success` });
  } catch (error) {
    console.error(error);

    res.status(500).send({ error });
  }
};

export default signIn;
