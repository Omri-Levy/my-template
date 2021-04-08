import { ChangeEvent } from 'react';
import { ColumnsArray, SetState } from '../../../utils/types';

type CheckCheckbox = (
  ids: string[],
  setIds: SetState<string[]>
) => (
  id: string,
  index: number
) => (event: ChangeEvent<HTMLInputElement>) => void;
type CheckAllCheckboxes = (
  data: ColumnsArray
) => (event: ChangeEvent<HTMLInputElement>) => void;
type SetCheckedItems = (value: boolean[]) => void;
type GetCheckedItems = () => boolean[];
type ResetCheckedItems = () => void;
type HookReturns = (
  setIds?: SetState<string[]>
) => {
  setCheckedItems: SetCheckedItems;
  getCheckedItems: GetCheckedItems;
  resetCheckedItems: ResetCheckedItems;
  resetIds: () => void;
  checkedItems: boolean[];
  checkCheckbox: CheckCheckbox;
  checkAllCheckboxes: CheckAllCheckboxes;
};

export {
  HookReturns,
  SetCheckedItems,
  GetCheckedItems,
  ResetCheckedItems,
  CheckCheckbox,
  CheckAllCheckboxes,
};
