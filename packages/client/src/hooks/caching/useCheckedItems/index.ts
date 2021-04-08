import { useCallback, useEffect, useState } from 'react';
import {
  CheckAllCheckboxes,
  CheckCheckbox,
  GetCheckedItems,
  HookReturns,
  ResetCheckedItems,
  SetCheckedItems,
} from './types';
import useSessionStorage from '../useSessionStorage';

/**
 * TODO: Update description
 */
const useCheckedItems: HookReturns = (setIds) => {
  const { setSessionStorage, getSessionStorage } = useSessionStorage(
    `checkedItems`
  );
  const setCheckedItems: SetCheckedItems = useCallback(
    (value: boolean[]) => setSessionStorage(value),
    [setSessionStorage]
  );
  const getCheckedItems: GetCheckedItems = () => getSessionStorage([false])();
  const resetCheckedItems: ResetCheckedItems = () => {
    setCheckedItems([false]);
  };
  const [checkedItems, _setCheckedItems] = useState(() => getCheckedItems());
  const conditionalSetIds = (value: string[]) => {
    if (setIds) {
      setIds(value);
    }
  };
  const checkCheckbox: CheckCheckbox = (ids) => (id, index) => (event) => {
    const newState = [...checkedItems];
    newState[index] = event.target.checked;

    _setCheckedItems(newState);

    if (checkedItems[index]) {
      const newIds = ids.filter((singleId) => singleId !== id);

      conditionalSetIds(newIds);
    } else {
      conditionalSetIds([...ids, id]);
    }
  };
  const resetIds = () => conditionalSetIds([]);
  const checkAllCheckboxes: CheckAllCheckboxes = (data) => () => {
    let newState: boolean[] = [];

    checkedItems.forEach(() => {
      newState = [...newState, !checkedItems.every(Boolean)];
    });

    _setCheckedItems(newState);

    if (checkedItems.every(Boolean)) {
      resetIds();
    } else {
      let newIds: string[] = [];

      data.forEach((item) => {
        newIds = [...newIds, item.col1];
      });

      conditionalSetIds(newIds);
    }
  };

  useEffect(() => {
    setCheckedItems(checkedItems);
  }, [checkedItems, setCheckedItems]);

  return {
    setCheckedItems,
    getCheckedItems,
    resetCheckedItems,
    resetIds,
    checkedItems,
    checkCheckbox,
    checkAllCheckboxes,
  };
};

export default useCheckedItems;
