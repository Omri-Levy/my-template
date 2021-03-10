import { FieldErrors, FieldValues } from 'react-hook-form';
import { GetValues, GRecaptchaResponse } from '../../../utils/types';

type DisableSubmit = boolean;
type Errors = FieldErrors<FieldValues>;
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
) => {
  disableSubmit: DisableSubmit;
};

export {
  FormHasEmptyFields,
  FormHasErrors,
  FormHasInvalidRecaptcha,
  HookReturns,
};
