import { Users } from '@my-template/shared';

type HookReturns = (
  users: Users | undefined
) => {
  col1: string;
  col2: string;
  col3: string;
  col4: string;
  col5: string;
}[];

export { HookReturns };
