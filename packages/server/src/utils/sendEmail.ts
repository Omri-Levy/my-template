import { createTransport } from 'nodemailer';
import { SendEmail } from './types';

const sendEmail: SendEmail = async (from, to, subject, text, html) => {
  const { EMAIL_USER, EMAIL_PASS } = process.env;

  const transporter = createTransport({
    service: `gmail`,
    host: `smtp.gmail.com`,
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },
  });

  await transporter.sendMail(
    {
      from,
      to,
      subject,
      text,
      html,
    },
    (error, info) => {
      if (error) {
        console.error(error);
      }

      if (info) {
        console.log(info);
      }
    }
  );
};

export default sendEmail;
