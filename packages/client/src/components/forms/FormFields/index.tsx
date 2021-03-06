import { FunctionComponent } from 'react';
import { PropsPlusFormType } from './types';
import SecurityInformationFormFields from './SignUpFormFields/SecurityInformationFormFields';
import PersonalInformationFormFields from './SignUpFormFields/PersonalInformationFormFields';
import SignInFormFields from './SignInFormFields';
import ForgotPasswordFormFields from './ForgotPasswordFormFields';

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
    default:
      return null;
  }
};

export default FormFields;
