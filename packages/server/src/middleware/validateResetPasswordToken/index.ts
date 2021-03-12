import { verify } from 'jsonwebtoken';
import { invalidTokenMessage, serverErrorMessage } from '@my-template/shared';
import User from '../../models/User.model';
import { JwtTokenPayload, Middleware } from '../../utils/types';

const validateResetPasswordToken: Middleware = async (req, res, next) => {
  const { JWT_SECRET } = process.env;
  const { token } = req.params;

  if (!token) {
    console.error(invalidTokenMessage);

    res.status(500).send({ message: invalidTokenMessage });

    return;
  }
  let verifiedToken;

  try {
    verifiedToken = verify(token, JWT_SECRET as string);
  } catch {
    console.error(invalidTokenMessage);

    res.status(500).send({ message: invalidTokenMessage });

    return;
  }

  if (!verifiedToken) {
    console.error(invalidTokenMessage);

    res.status(500).send({ message: invalidTokenMessage });

    return;
  }

  const { id, tokenVersion } = verifiedToken as JwtTokenPayload;
  const user = await User.findOne({
    where: { id },
    attributes: [`tokenVersion`, `securityQuestion`, `securityAnswer`],
  });

  if (!user) {
    console.error(serverErrorMessage);

    res.status(500).send({ message: serverErrorMessage });

    return;
  }

  if (user.tokenVersion !== tokenVersion) {
    console.error(invalidTokenMessage);

    res.status(400).send({ message: invalidTokenMessage });

    return;
  }

  res.locals.user = user;

  next();
};

export default validateResetPasswordToken;
