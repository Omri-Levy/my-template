const lowerCaseComparison = (
  stringOne: string | undefined,
  stringTwo: string | undefined
): boolean => {
  if (!stringOne || !stringTwo) {
    return false;
  }

  return stringOne?.toLowerCase() === stringTwo?.toLowerCase();
};

export default lowerCaseComparison;
