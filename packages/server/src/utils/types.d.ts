type JwtToken = string | null;
type SendEmail = (
  from: string,
  to: string,
  subject: string,
  text: string,
  html: string
) => void;

export { JwtToken, SendEmail };
