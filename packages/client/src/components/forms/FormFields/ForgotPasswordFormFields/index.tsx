import { FunctionComponent } from 'react';
import { FaAt } from 'react-icons/fa';
import FormField from '../../FormField';
import { Props } from '../types';
import clearIfResponseError from '../../../../utils/clearIfResponseError';

/**
 * TODO: update description
 */
const ForgotPasswordFormFields: FunctionComponent<Props> = ({
  errors,
  clearErrors,
  register,
  ...props
}) => {
  const onChange = clearIfResponseError(errors, clearErrors);

  return (
    <FormField
      onChange={onChange}
      isRequired
      labelTitle={`Email:`}
      name={`email`}
      errors={errors}
      register={register}
      type={`email`}
      maxLength={320}
      icon={FaAt}
      {...props}
    />
  );
};

export default ForgotPasswordFormFields;
