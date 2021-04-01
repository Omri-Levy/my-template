import { Roles } from '@my-template/shared/src/utils/types';

type IsAuthorizedRoute = (role: Roles, req: Request, res: Response) => void;

export { isAuthorizedRoute };
