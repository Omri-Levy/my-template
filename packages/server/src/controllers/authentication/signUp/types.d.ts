import User from '../../../models/User.model';

type GenerateToken = (user: User, expiresIn: string) => string;
type FormDataKeys = [
  `firstName`,
  `lastName`,
  `email`,
  `securityQuestion`,
  `securityAnswer`,
  `password`,
  `role`
];

export { GenerateToken, FormDataKeys };
