import { FunctionComponent } from 'react';
import { FaLock, FaShieldAlt } from 'react-icons/fa';
import {
  invalidPasswordPolicyMessage,
  securityQuestions,
} from '@my-template/shared';
import FormField from '../../FormField';
import clearResponseError from '../../FormResponseError/clearResponseError';
import { Props } from '../types';
import { securityQuestionPlaceholder } from '../../../../utils/constants';

/**
 * TODO: update description
 */
const ResetPasswordFormFields: FunctionComponent<Props> = ({
  errors,
  clearErrors,
  register,
  ...props
}) => {
  const onChange = errors?.responseError?.message
    ? clearResponseError(clearErrors)
    : undefined;

  return (
    <>
      <FormField
        isSelectField
        selectOptions={securityQuestions}
        selectPlaceholder={securityQuestionPlaceholder}
        onChange={onChange}
        isRequired
        errors={errors}
        labelTitle={`Security Question:`}
        type={`text`}
        name={`securityQuestion`}
        icon={FaShieldAlt}
        register={register}
        {...props}
      />
      <FormField
        onChange={onChange}
        isRequired
        errors={errors}
        labelTitle={`Security Answer:`}
        type={`text`}
        name={`securityAnswer`}
        icon={FaShieldAlt}
        register={register}
        {...props}
      />
      <FormField
        onChange={onChange}
        isRequired
        errors={errors}
        labelTitle={`New Password:`}
        type={`password`}
        name={`newPassword`}
        icon={FaLock}
        register={register}
        helperText={invalidPasswordPolicyMessage}
        {...props}
      />
      <FormField
        onChange={onChange}
        isRequired
        errors={errors}
        labelTitle={`New Password Confirmation:`}
        type={`password`}
        name={`newPasswordConfirmation`}
        icon={FaLock}
        register={register}
        inputProps={{
          autoComplete: `off`,
        }}
        {...props}
      />
    </>
  );
};

export default ResetPasswordFormFields;
