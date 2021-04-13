import { useCallback, useEffect, useState } from 'react';
import { isEqual } from 'lodash';
import {
  CheckAllCheckboxes,
  CheckCheckbox,
  HookReturns,
  ResetCheckedItems,
} from './types';

/**
 * TODO: Update description
 */
const useCheckedItems: HookReturns = (allIds, cachedIds, setIds) => {
  const idsAreEqual = useCallback(
    () => isEqual(allIds.sort(), cachedIds.sort()),
    [allIds, cachedIds]
  );
  const [allCheckboxesChecked, setAllCheckboxesChecked] = useState(
    idsAreEqual()
  );
  const conditionalSetIds = useCallback(
    (value: string[]) => {
      if (setIds) {
        setIds(value);
      }
    },
    [setIds]
  );
  const checkCheckbox: CheckCheckbox = useCallback(
    (id) => () => {
      if (cachedIds.includes(id)) {
        const newIds = cachedIds.filter((singleId) => singleId !== id);

        conditionalSetIds(newIds);
      } else {
        conditionalSetIds([...cachedIds, id]);
      }
    },
    [cachedIds, conditionalSetIds]
  );
  const resetCheckedItems: ResetCheckedItems = useCallback(
    () => conditionalSetIds([]),
    [conditionalSetIds]
  );
  const checkAllCheckboxes: CheckAllCheckboxes = useCallback(() => {
    if (allCheckboxesChecked) {
      resetCheckedItems();
    } else {
      conditionalSetIds(allIds);
    }
  }, [allCheckboxesChecked, allIds, conditionalSetIds, resetCheckedItems]);
  const isChecked = (id: string) => cachedIds.includes(id);

  useEffect(() => {
    setAllCheckboxesChecked(idsAreEqual());
  }, [allIds, cachedIds, idsAreEqual]);

  return {
    resetCheckedItems,
    checkCheckbox,
    checkAllCheckboxes,
    allCheckboxesChecked,
    isChecked,
  };
};

export default useCheckedItems;
