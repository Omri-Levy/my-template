import { FieldErrors, FieldValues, useForm } from 'react-hook-form';

interface Props {
  errors: FieldErrors<FieldValues>;
  register: useForm.register;
}

export {Props};
