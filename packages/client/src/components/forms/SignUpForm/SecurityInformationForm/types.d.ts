import { Breadcrumbs } from '../../MultiStepForm/Breadcrumbs/types';

interface PersonalInformationFormFields {
  firstName: string;
  lastName: string;
  email: string;
  securityQuestion: string;
  securityAnswer: string;
  password: string;
  passwordConfirmation: string;
}

interface Props {
  breadcrumbs: Breadcrumbs;
}

export { PersonalInformationFormFields, Props };
