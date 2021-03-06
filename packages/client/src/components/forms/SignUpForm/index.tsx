import { FunctionComponent } from 'react';
import PersonalInformationForm from './PersonalInformationForm';
import SecurityInformationForm from './SecurityInformationForm';
import FormWizard from '../FormWizard';
import generateForms from '../FormWizard/generateForms';
import generateFormStep from '../FormWizard/generateFormStep';

/**
 * TODO: update description
 */
const SignUpForm: FunctionComponent = () => {
  const forms = generateForms(
    generateFormStep(
      `/signUp`,
      PersonalInformationForm,
      `Personal Information`
    ),
    generateFormStep(
      `/signUp/securityInformation`,
      SecurityInformationForm,
      `Security Information`
    )
  );

  return <FormWizard forms={forms} />;
};

export default SignUpForm;
