import { useEffect, useState } from 'react';
import { HookReturns } from './types';
import formHasEmptyFields from './formHasEmptyFields';
import formHasErrors from './formHasErrors';
import formHasInvalidRecaptcha from './formHasInvalidRecaptcha';

/**
 * a hook returning a boolean to decide if to disable forms buttons based on
 * forms validation - disables the button if the forms is invalid or
 * incomplete(including recaptcha completion).
 */
const useDisableSubmit: HookReturns = (
  errors,
  getValues,
  gRecaptchaResponse,
  disableSubmitCondition
) => {
  const [disableSubmit, setDisableSubmit] = useState(true);
  const errorsKeys = Object.keys(errors);
  const formValues = getValues();
  const formKeys = Object.keys(formValues);

  useEffect(() => {
    const invalidForm =
      formHasEmptyFields(formKeys, formValues) || formHasErrors(errors);
    const invalidRecaptcha = formHasInvalidRecaptcha(gRecaptchaResponse);

    if (
      invalidForm ||
      invalidRecaptcha ||
      (disableSubmitCondition && disableSubmitCondition())
    ) {
      setDisableSubmit(true);
    } else {
      setDisableSubmit(false);
    }
  }, [
    disableSubmitCondition,
    errors,
    errorsKeys,
    formKeys,
    formValues,
    gRecaptchaResponse,
  ]);

  return disableSubmit;
};

export default useDisableSubmit;
