import { ClearResponseError, ClearErrors } from './types';

const clearResponseError: ClearResponseError = (clearErrors: ClearErrors) =>
// @ts-ignore
  (event) => (
  clearErrors(`responseError`)
);

export default clearResponseError;