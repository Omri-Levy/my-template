import { FormHasEmptyFields } from './types';

const formHasEmptyFields: FormHasEmptyFields = (formKeys, formValues) => {
  let invalidForm = false;

  formKeys.forEach((formKey) => {
    const isEmptyFormField = formValues[formKey]?.length === 0;

    if (isEmptyFormField) {
      invalidForm = true;
    }
  });

  return invalidForm;
};

export default formHasEmptyFields;
