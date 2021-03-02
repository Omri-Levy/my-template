import {
  ClearErrors,
  ClearResponseError,
} from '../AuthenticationForm/FormFields/types';

const clearResponseError: ClearResponseError = (
  clearErrors: ClearErrors
) => () => clearErrors(`responseError`);

export default clearResponseError;
