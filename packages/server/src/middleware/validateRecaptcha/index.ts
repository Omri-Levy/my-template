import axios from 'axios';
import { NextFunction, Request, Response } from 'express';
import { invalidIsRobotMessage } from '@my-template/shared';

const validateRecaptcha = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { RECAPTCHA_SECRET_KEY } = process.env;
  const { gRecaptchaResponse } = req.body;
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

    res.status(400).send({ message: invalidIsRobotMessage });

    return;
  }

  next();
};

export default validateRecaptcha;
