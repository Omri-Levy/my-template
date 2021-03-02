import { isName, validPassword } from './utils/regex';
import {
  Data,
  Endpoint,
  IterableUser,
  ObjectKey,
  ObjectType,
  RequestMethod,
  User,
} from './utils/types';
import {
  emailAlreadyInUseMessage,
  invalidEmailMessage,
  invalidFirstNameMessage,
  invalidIsRobotMessage,
  invalidLastNameMessage,
  invalidPasswordConfirmationMessage,
  invalidPasswordMessage,
  invalidPasswordPolicyMessage,
  passwordConfirmationIsRequiredMessage,
  serverErrorMessage,
  wrongCredentialsMessage,
} from './utils/validation/validationMessages';
import {
  forgotPasswordSchema,
  signInSchema,
  signUpSchema,
} from './utils/validation/validationSchemas';
import fetch from './utils/fetch';
import { apiUrl, securityQuestions } from './utils/constants';

export {
  apiUrl,
  securityQuestions,
  isName,
  validPassword,
  invalidFirstNameMessage,
  invalidLastNameMessage,
  invalidEmailMessage,
  invalidPasswordPolicyMessage,
  passwordConfirmationIsRequiredMessage,
  invalidPasswordConfirmationMessage,
  invalidPasswordMessage,
  invalidIsRobotMessage,
  wrongCredentialsMessage,
  emailAlreadyInUseMessage,
  serverErrorMessage,
  signUpSchema,
  signInSchema,
  forgotPasswordSchema,
  fetch,
};

export type {
  ObjectKey,
  ObjectType,
  Data,
  Endpoint,
  RequestMethod,
  User,
  IterableUser,
};
