import { Users } from '@my-template/shared';
import { ColumnsArray } from '../../../../../utils/types';

type HookReturns = (users: Users | undefined) => ColumnsArray;

export { HookReturns };
