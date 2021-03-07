import { FunctionComponent } from 'react';
import { FaIdCard, FaShieldAlt } from 'react-icons/fa';
import PersonalInformationForm from './PersonalInformationForm';
import SecurityInformationForm from './SecurityInformationForm';
import FormWizard from '../FormWizard';
import useGenerateForms from '../FormWizard/hooks/useGenerateForms';
import generateFormStep from '../FormWizard/generateFormStep';

/**
 * TODO: update description
 */
const SignUpForm: FunctionComponent = () => {
  const forms = useGenerateForms(
    generateFormStep(
      `/signUp`,
      PersonalInformationForm,
      `Personal Information`,
      FaIdCard
    ),
    generateFormStep(
      `/signUp/securityInformation`,
      SecurityInformationForm,
      `Security Information`,
      FaShieldAlt
    )
  );

  return <FormWizard forms={forms} />;
};

export default SignUpForm;
