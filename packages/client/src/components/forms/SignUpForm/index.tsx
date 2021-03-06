// import { FunctionComponent } from 'react';
// import { useLocation } from 'react-router-dom';
// import PersonalInformationForm from './PersonalInformationForm';
// import SecurityInformationForm from './SecurityInformationForm';
//
// /**
//  * TODO: update description
//  */
// const SignUpForm: FunctionComponent = () => {
//   const { pathname } = useLocation();
//
//   if (pathname === `/signUp`) {
//     return <PersonalInformationForm />;
//   }
//
//   return <SecurityInformationForm />;
// };
//
// export default SignUpForm;

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
