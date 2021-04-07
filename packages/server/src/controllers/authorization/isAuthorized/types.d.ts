import { Roles } from '@my-template/shared';

type IsAuthorizedRoute = (role: Roles, req: Request, res: Response) => void;

export { isAuthorizedRoute };
