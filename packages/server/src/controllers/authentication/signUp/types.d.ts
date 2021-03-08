import User from '../../../models/User.model';

type GenerateToken = (user: User, expiresIn: string) => string;

export { GenerateToken };
