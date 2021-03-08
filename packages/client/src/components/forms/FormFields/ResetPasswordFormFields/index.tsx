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
}) => (
  <>
    <FormField
      isSelectField
      selectOptions={securityQuestions}
      selectPlaceholder={securityQuestionPlaceholder}
      onChange={clearResponseError(clearErrors)}
      isRequired
      errors={errors}
      labelTitle={`Security Question:`}
      type={`text`}
      name={`securityQuestion`}
      icon={FaShieldAlt}
      iconColor={`gray.300`}
      register={register}
    />
    <FormField
      onChange={clearResponseError(clearErrors)}
      isRequired
      errors={errors}
      labelTitle={`Security Answer:`}
      type={`text`}
      name={`securityAnswer`}
      icon={FaShieldAlt}
      iconColor={`gray.300`}
      register={register}
    />
    <FormField
      onChange={clearResponseError(clearErrors)}
      isRequired
      errors={errors}
      labelTitle={`New Password:`}
      type={`password`}
      name={`newPassword`}
      icon={FaLock}
      iconColor={`gray.300`}
      register={register}
      helperText={invalidPasswordPolicyMessage}
    />
    <FormField
      onChange={clearResponseError(clearErrors)}
      isRequired
      errors={errors}
      labelTitle={`New Password Confirmation:`}
      type={`password`}
      name={`newPasswordConfirmation`}
      icon={FaLock}
      iconColor={`gray.300`}
      register={register}
    />
  </>
);

export default ResetPasswordFormFields;
