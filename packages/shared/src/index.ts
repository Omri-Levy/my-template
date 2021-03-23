import { isName, validPassword } from './utils/regex';
import {
  Data,
  Endpoint,
  IterableUser,
  ObjectKey,
  ObjectType,
  RequestMethod,
  User,
  Users,
} from './utils/types';
import {
  emailAlreadyInUseMessage,
  emailIsRequiredMessage,
  firstNameIsRequiredMessage,
  forgotPasswordMessage,
  invalidEmailMessage,
  invalidFirstNameMessage,
  invalidIsRobotMessage,
  invalidLastNameMessage,
  invalidPasswordConfirmationMessage,
  invalidPasswordMessage,
  invalidPasswordPolicyMessage,
  invalidSecurityAnswerMessage,
  invalidSecurityInformationMessage,
  invalidTokenMessage,
  lastNameIsRequiredMessage,
  lockoutMessage,
  passwordConfirmationIsRequiredMessage,
  passwordIsRequiredMessage,
  securityAnswerIsRequiredMessage,
  securityQuestionIsRequiredMessage,
  serverErrorMessage,
  terminateUserAccountMessage,
  wrongCredentialsMessage,
} from './utils/validation/validationMessages';
import axiosRequest from './utils/axiosRequest';
import { apiUrl, securityQuestions } from './utils/constants';
import {
  forgotPasswordSchema,
  personalInformationSchema,
  resetPasswordSchema,
  securityInformationSchema,
  signInSchema,
  signUpSchema,
} from './utils/validation/validationSchemas';
import {
  emailMax,
  emailMin,
  firstNameMax,
  firstNameMin,
  lastNameMax,
  lastNameMin,
  passwordLowercaseCharacters,
  passwordMax,
  passwordMin,
  passwordNumbers,
  passwordSpecialCharacters,
  passwordUppercaseCharacters,
  securityAnswerMax,
  securityAnswerMin,
} from './utils/validation/validationConstants';
import calculateHours from './utils/functions/calculateHours';
import calculateMinutes from './utils/functions/calculateMinutes';
import secondsToHours from './utils/functions/secondsToHours';
import capitalize from './utils/functions/capitalize';

export {
  apiUrl,
  securityQuestions,
  isName,
  validPassword,
  firstNameMin,
  firstNameMax,
  lastNameMin,
  lastNameMax,
  emailMin,
  emailMax,
  securityAnswerMin,
  securityAnswerMax,
  passwordMin,
  passwordMax,
  passwordUppercaseCharacters,
  passwordLowercaseCharacters,
  passwordNumbers,
  passwordSpecialCharacters,
  invalidFirstNameMessage,
  invalidLastNameMessage,
  invalidEmailMessage,
  invalidPasswordPolicyMessage,
  passwordIsRequiredMessage,
  passwordConfirmationIsRequiredMessage,
  invalidPasswordConfirmationMessage,
  invalidPasswordMessage,
  invalidIsRobotMessage,
  wrongCredentialsMessage,
  emailAlreadyInUseMessage,
  serverErrorMessage,
  invalidSecurityAnswerMessage,
  securityAnswerIsRequiredMessage,
  forgotPasswordMessage,
  invalidTokenMessage,
  invalidSecurityInformationMessage,
  emailIsRequiredMessage,
  securityQuestionIsRequiredMessage,
  lockoutMessage,
  firstNameIsRequiredMessage,
  lastNameIsRequiredMessage,
  terminateUserAccountMessage,
  personalInformationSchema,
  securityInformationSchema,
  signUpSchema,
  signInSchema,
  forgotPasswordSchema,
  resetPasswordSchema,
  axiosRequest,
  calculateMinutes,
  calculateHours,
  secondsToHours,
  capitalize,
};

export type {
  ObjectKey,
  ObjectType,
  Data,
  Endpoint,
  RequestMethod,
  User,
  Users,
  IterableUser,
};
