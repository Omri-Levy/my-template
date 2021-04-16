import { forgotPasswordMessage } from '@my-template/shared';
import User from '../../../models/User.model';
import sendEmail from '../../../utils/sendEmail';
import generateJwtToken from '../../../utils/generateToken';
import { Route } from '../../../utils/types';

const forgotPassword: Route = async (req, res) => {
  try {
    const { email } = req?.body;
    const { EMAIL_USER } = process.env;

    const user = await User.findOne({
      where: { email },
      attributes: [`id`, `tokenVersion`],
    });

    if (user) {
      const jwtToken = generateJwtToken(user, `5m`);
      const from = EMAIL_USER as string;
      const to = email;
      const subject = `Forgot password - my-template`;

      const link = `<a 
          href='http://localhost:3000/resetPassword/${jwtToken}' 
          referrerpolicy='no-referrer'
        >
         Reset password
        </a>`;

      const paragraphOne = `<p>
        You are receiving this email because you
        (or someone else) have requested the reset of the password
        for your account.
         </p>`;
      const paragraphTwo = `<p>
        Please click on the following link, or paste
        this into your browser to complete the process within five minutes
        of receiving this message:
          ${link}
        </p>`;
      const paragraphThree = `<p>
          if you did not request this, please ignore
          this email and your password will remain unchanged.
         </p>`;

      const html = `${paragraphOne}${paragraphTwo}${paragraphThree}`;

      sendEmail(from, to, subject, undefined, html);
    }

    res?.status(200)?.send({ message: forgotPasswordMessage });
  } catch (error) {
    console.error(error);

    res?.status(500)?.send({ error });
  }
};

export default forgotPassword;
