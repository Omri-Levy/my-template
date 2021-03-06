import { ClearResponseError } from './types';

const clearResponseError: ClearResponseError = (clearErrors) => () =>
  clearErrors(`responseError`);

export default clearResponseError;
