import { FunctionComponent } from 'react';
import { PropsPlusFormType } from './types';
import SecurityInformationFormFields from './SignUpFormFields/SecurityInformationFormFields';
import PersonalInformationFormFields from './SignUpFormFields/PersonalInformationFormFields';
import SignInFormFields from './SignInFormFields';
import ForgotPasswordFormFields from './ForgotPasswordFormFields';
import ResetPasswordFormFields from './ResetPasswordFormFields';
import UpdateProfileFormFields from './UpdateProfileFormFields';
import UpdatePasswordFormFields from './UpdatePasswordFormFields';

/**
 * TODO: update description
 */
const FormFields: FunctionComponent<PropsPlusFormType> = ({
  errors,
  clearErrors,
  register,
  formType,
}) => {
  switch (formType) {
    case `personalInformation`:
      return (
        <PersonalInformationFormFields
          errors={errors}
          clearErrors={clearErrors}
          register={register}
        />
      );
    case `securityInformation`:
      return (
        <SecurityInformationFormFields
          errors={errors}
          clearErrors={clearErrors}
          register={register}
        />
      );
    case `signIn`:
      return (
        <SignInFormFields
          errors={errors}
          clearErrors={clearErrors}
          register={register}
        />
      );
    case `forgotPassword`:
      return (
        <ForgotPasswordFormFields
          errors={errors}
          clearErrors={clearErrors}
          register={register}
        />
      );
    case `resetPassword`:
      return (
        <ResetPasswordFormFields
          errors={errors}
          clearErrors={clearErrors}
          register={register}
        />
      );
    case `updateProfile`:
      return (
        <UpdateProfileFormFields
          errors={errors}
          clearErrors={clearErrors}
          register={register}
        />
      );
    case `updateUserProfile`:
      return (
        <UpdateProfileFormFields
          errors={errors}
          clearErrors={clearErrors}
          register={register}
          isAdminAction
        />
      );
    case `updatePassword`:
      return (
        <UpdatePasswordFormFields
          errors={errors}
          clearErrors={clearErrors}
          register={register}
        />
      );
    case `updateUserPassword`:
      return (
        <UpdatePasswordFormFields
          errors={errors}
          clearErrors={clearErrors}
          register={register}
          isAdminAction
        />
      );
    default:
      return null;
  }
};

export default FormFields;
