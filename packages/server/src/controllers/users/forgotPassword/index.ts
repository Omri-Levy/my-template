import { Request, Response } from 'express';
import { forgotPasswordMessage } from '@my-template/shared';
import User from '../../../models/User.model';
import sendEmail from '../../../utils/sendEmail';

const forgotPassword = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    const { EMAIL_USER } = process.env;

    const user = await User.findOne({ where: { email } });

    if (user) {
      const from = EMAIL_USER!;
      const to = email;
      const subject = `Forgot password - my-template`;
      const text = `Did you forget your password? Too bad!`;
      const html = `<a href='www.google.com' referrerpolicy='no-referrer'>
                    Reset password
                    </a>`;

      sendEmail(from, to, subject, text, html);
    }

    res.status(200).send({ message: forgotPasswordMessage });
  } catch (error) {
    res.status(500).send({ error });
  }
};

export default forgotPassword;
