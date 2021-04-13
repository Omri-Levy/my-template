import { FieldErrors } from 'react-hook-form';
import { ClearErrors } from '../types';

type Callback = <T, K>(args?: T) => T | K | any;
type ClearIfResponseError = (
  errors: FieldErrors,
  clearErrors: ClearErrors
) => Callback | undefined;

export { Callback, ClearIfResponseError };
