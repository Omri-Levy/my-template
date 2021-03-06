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
    errors={errors}
    labelTitle={`Email:`}
    type={`email`}
    name={`email`}
    icon={FaAt}
    iconColor={`gray.300`}
    register={register}
  />
);

export default ForgotPasswordFormFields;
