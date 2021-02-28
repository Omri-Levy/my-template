import { ClearResponseError, ClearErrors } from './types';

const clearResponseError: ClearResponseError = (
  clearErrors: ClearErrors
) => () => clearErrors(`responseError`);

export default clearResponseError;
