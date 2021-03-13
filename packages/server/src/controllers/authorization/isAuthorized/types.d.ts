import { Roles } from '../../../utils/types';

type IsAuthorizedRoute = (role: Roles, req: Request, res: Response) => void;

export { isAuthorizedRoute };
