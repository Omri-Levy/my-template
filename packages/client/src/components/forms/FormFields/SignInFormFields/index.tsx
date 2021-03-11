import { FunctionComponent } from 'react';
import { FaAt, FaLock } from 'react-icons/fa';
import FormField from '../../FormField';
import clearResponseError from '../../FormResponseError/clearResponseError';
import { Props } from '../types';
import ForgotPasswordLink from '../../../pages/SignIn/ForgotPasswordLink';

/**
 * TODO: update description
 */
const SignInFormFields: FunctionComponent<Props> = ({
  errors,
  clearErrors,
  register,
}) => (
  <>
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
    <FormField
      onChange={clearResponseError(clearErrors)}
      isRequired
      labelTitle={`Password:`}
      name={`password`}
      errors={errors}
      register={register}
      type={`password`}
      maxLength={128}
      icon={FaLock}
      mb={1}
    />
    <ForgotPasswordLink />
  </>
);

export default SignInFormFields;
