import { FunctionComponent } from 'react';
import { FaAt, FaLock } from 'react-icons/fa';
import FormField from '../../FormField';
import { Props } from '../types';
import ForgotPasswordLink from '../../../pages/SignIn/ForgotPasswordLink';
import clearIfResponseError from '../../../../utils/clearIfResponseError';

/**
 * TODO: update description
 */
const SignInFormFields: FunctionComponent<Props> = ({
  errors,
  clearErrors,
  register,
  ...props
}) => {
  const onChange = clearIfResponseError(errors, clearErrors);

  return (
    <>
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
      <FormField
        onChange={onChange}
        isRequired
        labelTitle={`Password:`}
        name={`password`}
        errors={errors}
        register={register}
        type={`password`}
        maxLength={128}
        icon={FaLock}
        mb={1}
        {...props}
      />
      <ForgotPasswordLink />
    </>
  );
};

export default SignInFormFields;
