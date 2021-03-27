import { FieldErrors } from 'react-hook-form';
import { GetValues, GRecaptchaResponse } from '../../../utils/types';

type Errors = FieldErrors;
type FormHasEmptyFields = (
  formKeys: string[],
  formValues: GetValues
) => boolean;
type FormHasErrors = (errors: Errors) => boolean;
type FormHasInvalidRecaptcha = (
  gRecaptchaResponse: GRecaptchaResponse | undefined
) => boolean;
type HookReturns = (
  errors: Errors,
  getValues: GetValues,
  gRecaptchaResponse?: GRecaptchaResponse
) => boolean;

export {
  FormHasEmptyFields,
  FormHasErrors,
  FormHasInvalidRecaptcha,
  HookReturns,
};
