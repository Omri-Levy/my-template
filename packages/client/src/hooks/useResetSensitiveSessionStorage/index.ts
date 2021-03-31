import { HookReturns, ResetSensitiveSessionStorage } from './types';
import useCheckedItems from '../useCheckedItems';
import useUserIds from '../useUserIds';

const useResetSensitiveSessionStorage: HookReturns = () => {
  const { resetUserIds } = useUserIds();
  const { resetCheckedItems } = useCheckedItems();

  const resetSensitiveSessionStorage: ResetSensitiveSessionStorage = () => {
    resetUserIds();
    resetCheckedItems();
  };

  return resetSensitiveSessionStorage;
};

export default useResetSensitiveSessionStorage;
