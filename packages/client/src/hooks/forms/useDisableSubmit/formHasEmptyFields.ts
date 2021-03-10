import { FormHasEmptyFields } from './types';

const formHasEmptyFields: FormHasEmptyFields = (formKeys, formValues) => {
  let invalidForm = false;

  formKeys.forEach((formKey) => {
    if (!formValues[formKey] || formValues[formKey].length === 0) {
      invalidForm = true;
    }
  });

  return invalidForm;
};

export default formHasEmptyFields;
