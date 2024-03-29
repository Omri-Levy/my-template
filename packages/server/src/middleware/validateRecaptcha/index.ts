import axios from 'axios';
import { invalidIsRobotMessage } from '@my-template/shared';
import { Middleware } from '../../utils/types';

const validateRecaptcha: Middleware = async (req, res, next) => {
  const { RECAPTCHA_SECRET_KEY } = process.env;
  const { gRecaptchaResponse } = req?.body;
  const verifyRecaptchaUrl =
    `https://www.google.com/recaptcha/api/` +
    `siteverify?secret=${RECAPTCHA_SECRET_KEY}&response` +
    `=${gRecaptchaResponse}`;
  const isRobot = await axios({
    method: `POST`,
    url: verifyRecaptchaUrl,
  });

  if (!isRobot.data.success) {
    console.error(invalidIsRobotMessage);

    res?.status(400)?.send({ message: invalidIsRobotMessage });

    return;
  }

  next();
};

export default validateRecaptcha;
