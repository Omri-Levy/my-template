import { signInSchema, wrongCredentialsMessage } from '@my-template/shared';
import User from '../../../models/User.model';
import generateJwtToken from '../../../utils/generateJwtToken';
import sendJwtToken from '../../../utils/sendJwtToken';
import { Route } from '../../../utils/types';
import verifyIfVerifiable from '../../../utils/verifyIfVerifiable';
import setCurrentUserCache from '../../../utils/currentUserCache/setCurrentUserCache';
import { redisClient } from '../../../redis';

const signIn: Route = async (req, res) => {
  try {
    const { email, password } = req.body;

    await signInSchema.validate(req.body, {
      abortEarly: false,
    });

    const user = await User.findOne({
      attributes: {
        exclude: [
          `createdAt`,
          `updatedAt`,
          `securityQuestion`,
          `securityAnswer`,
        ],
      },
      where: { email },
    });

    const verify = verifyIfVerifiable(user);
    const passwordMatches = await verify(user?.password, password);
    await redisClient.setnx(`retriesLeft`, `5`);

    if (!user || !passwordMatches) {
      const retriesLeft = Number(await redisClient.get(`retriesLeft`));
      let attempts;

      if (retriesLeft !== 0) {
        attempts = retriesLeft - 1;
        await redisClient.decr(`retriesLeft`);
      } else {
        attempts = retriesLeft;
        await redisClient.set(`retriesLeft`, `5`);
      }

      const attemptsLeft = `${attempts} attempts left.`;

      console.error(wrongCredentialsMessage(attemptsLeft));

      res.status(401).send({
        message: wrongCredentialsMessage(attemptsLeft),
        attemptsLeft,
      });

      return;
    }

    const jwtToken = generateJwtToken(user, `30m`);
    sendJwtToken(res, jwtToken);

    console.log(`Sign in successful.`);

    if (req?.brute?.reset) {
      req.brute.reset();

      console.log(`reset brute force`);
    }

    await redisClient.set(`retriesLeft`, `5`);

    await setCurrentUserCache(user);

    res.status(200).send({ status: `success` });
  } catch (error) {
    const { name, errors } = error;

    if (name === `ValidationError`) {
      console.error(errors);

      res.status(400).send({ message: errors });
    }

    console.error(error);

    res.status(500).send({ error });
  }
};

export default signIn;
