import { serverErrorMessage } from '@my-template/shared';
import formFields from '../../../utils/formFields';
import { FormHasErrors } from './types';

const formHasErrors: FormHasErrors = (errors) => {
  let invalidForm = false;
  const isServerError = errors?.responseError?.message === serverErrorMessage;

  formFields.forEach((formField) => {
    if (errors[formField.name]?.message && !isServerError) {
      invalidForm = true;
    }
  });

  return invalidForm;
};

export default formHasErrors;
