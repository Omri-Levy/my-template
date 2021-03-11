import { FunctionComponent } from 'react';
import { FaAt } from 'react-icons/fa';
import FormField from '../../FormField';
import clearResponseError from '../../FormResponseError/clearResponseError';
import { Props } from '../types';

/**
 * TODO: update description
 */
const ForgotPasswordFormFields: FunctionComponent<Props> = ({
  errors,
  clearErrors,
  register,
}) => (
  <FormField
    onChange={clearResponseError(clearErrors)}
    isRequired
    labelTitle={`Email:`}
    name={`email`}
    errors={errors}
    register={register}
    type={`email`}
    maxLength={320}
    icon={FaAt}
  />
);

export default ForgotPasswordFormFields;
