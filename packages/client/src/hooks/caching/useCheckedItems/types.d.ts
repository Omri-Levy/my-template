import { ChangeEvent } from 'react';
import { SetState } from '../../../utils/types';

type CheckCheckbox = (
  id: string
) => (event: ChangeEvent<HTMLInputElement>) => void;
type CheckAllCheckboxes = (event: ChangeEvent<HTMLInputElement>) => void;
type GetCheckedItems = () => boolean[];
type ResetCheckedItems = () => void;
type HookReturns = (
  allIds: string[],
  cachedIds: string[],
  setIds?: SetState<string[]>
) => {
  resetCheckedItems: ResetCheckedItems;
  checkCheckbox: CheckCheckbox;
  checkAllCheckboxes: CheckAllCheckboxes;
  allCheckboxesChecked: boolean;
  isChecked: (id: string) => boolean;
};

export {
  HookReturns,
  GetCheckedItems,
  ResetCheckedItems,
  CheckCheckbox,
  CheckAllCheckboxes,
};
