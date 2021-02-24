import { isName, validPassword } from './utils/regex';
import {
  Data,
  Endpoint,
  IterableUser,
  ObjectKey,
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
} from './utils/validationMessages';
import { signInSchema, signUpSchema } from './utils/validationSchemas';
import fetch from './utils/fetch';
import { apiUrl } from './utils/constants';

export {
  apiUrl,
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
  fetch,
};

export type { ObjectKey, Data, Endpoint, RequestMethod, User, IterableUser };