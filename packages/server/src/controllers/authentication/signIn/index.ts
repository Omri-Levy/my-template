import { signInSchema, wrongCredentialsMessage } from '@my-template/shared';
import User from '../../../models/User.model';
import generateJwtToken from '../../../utils/generateJwtToken';
import sendJwtToken from '../../../utils/sendJwtToken';
import { Route } from '../../../utils/types';
import verifyIfVerifiable from '../../../utils/verifyIfVerifiable';
import { decrAsync, getAsync, setAsync, setnxAsync } from '../../../redis';

const signIn: Route = async (req, res) => {
  try {
    const { email, password } = req.body;

    await signInSchema.isValid(req.body);
    const user = await User.findOne({
      where: { email },
      attributes: [`id`, `tokenVersion`, `password`],
    });
    const verify = verifyIfVerifiable(user);
    const passwordMatches = await verify(user?.password, password);
    await setnxAsync(`retriesLeft`, `5`);

    if (!user || !passwordMatches) {
      const retriesLeft = Number(await getAsync(`retriesLeft`));
      let attempts;

      if (retriesLeft !== 0) {
        attempts = retriesLeft - 1;
        await decrAsync(`retriesLeft`);
      } else {
        attempts = retriesLeft;
        await setAsync(`retriesLeft`, `5`);
      }

      const attemptsLeft = `${attempts} attempts left.`;

      console.error(wrongCredentialsMessage(attemptsLeft));

      res.status(401).send({
        message: wrongCredentialsMessage(attemptsLeft),
        attemptsLeft,
      });

      return;
    }

    const jwtToken = generateJwtToken(user, `9h`);
    sendJwtToken(res, jwtToken);

    console.log(`Sign in successful.`);

    if (req?.brute?.reset) {
      req.brute.reset();

      console.log(`reset brute force`);
    }

    await setAsync(`retriesLeft`, `5`);

    res.status(200).send({ status: `success` });
  } catch (error) {
    console.error(error);

    res.status(500).send({ error });
  }
};

export default signIn;
