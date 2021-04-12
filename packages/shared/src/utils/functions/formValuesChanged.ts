import { ObjectKey } from '@my-template/shared';

const formValuesChanged = (
  currentValues: Record<ObjectKey, string>,
  /**
   * @type Function react-hook-form useForm's watch function
   */
  watch?: () => Record<ObjectKey, string>,
  newValues?: Record<ObjectKey, string>
): boolean => {
  let comparisonArray: boolean[] = [];
  const objectKeys = Object.keys(currentValues);
  const values: Record<ObjectKey, string> = watch ? watch() : newValues || {};

  objectKeys?.forEach((key) => {
    comparisonArray = [...comparisonArray, currentValues[key] === values[key]];
  });

  return comparisonArray.every(Boolean);
};

export default formValuesChanged;
