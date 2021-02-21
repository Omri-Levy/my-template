import { FieldErrors, FieldValues, useForm } from 'react-hook-form';
import { GRecaptchaResponse } from '../../components/SignIn/types';

type DisableSubmit = boolean;
type Errors = FieldErrors<FieldValues>;
type GetValues = useForm.getValues;
type HookReturns = (
  errors: Errors,
  getValues: GetValues,
  gRecaptchaResponse: GRecaptchaResponse
) => {
  disableSubmit: DisableSubmit
};

export {HookReturns};
