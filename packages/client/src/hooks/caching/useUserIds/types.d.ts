import { SetState } from '../../../utils/types';

type SetUserIds = (value: string[]) => void;
type GetUserIds = () => string[];
type ResetUserIds = () => void;
type HookReturns = () => {
  setUserIds: SetUserIds;
  getUserIds: GetUserIds;
  resetUserIds: ResetUserIds;
  userIds: string[];
  _setUserIds: SetState<string[]>;
};

export { HookReturns, SetUserIds, GetUserIds, ResetUserIds };
