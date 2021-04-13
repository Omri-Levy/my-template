import { conditionalFunction } from '@my-template/shared';
import clearResponseError from '../../components/forms/FormResponseError/clearResponseError';
import { ClearIfResponseError } from './types';

const clearIfResponseError: ClearIfResponseError = (errors, clearErrors) =>
  conditionalFunction(
    errors?.responseError?.message,
    clearResponseError(clearErrors)
  );

export default clearIfResponseError;
