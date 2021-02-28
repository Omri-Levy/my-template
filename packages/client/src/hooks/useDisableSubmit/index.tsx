import { useEffect, useState } from 'react';
import formFields from '../../utils/formFields';
import { HookReturns } from './types';

/**
 * a hook returning a boolean to decide if to disable forms buttons based on
 * forms validation - disables the button if the forms is invalid or
 * incomplete(including recaptcha completion).
 */
const useDisableSubmit: HookReturns = (
  errors,
  getValues,
  gRecaptchaResponse
) => {
  const [disableSubmit, setDisableSubmit] = useState(true);
  const errorsKeys = Object.keys(errors);
  const formValues = getValues();
  const formKeys = Object.keys(formValues);

  useEffect(() => {
    let invalidFields = false;

    formKeys.forEach((formKey) => {
      if (formValues[formKey].length === 0) {
        invalidFields = true;
      }
    });

    formFields.forEach((formField) => {
      if (errors[formField.name]) {
        invalidFields = true;
      }
    });

    if (invalidFields || !gRecaptchaResponse) {
      setDisableSubmit(true);
    } else {
      setDisableSubmit(false);
    }
  }, [errors, errorsKeys, formKeys, formValues, gRecaptchaResponse]);

  return { disableSubmit };
};

export default useDisableSubmit;
