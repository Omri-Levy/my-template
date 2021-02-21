import { isFullName, validPassword } from './utils/regex';
import { Data, Endpoint, ObjectKey, RequestMethod } from './utils/types';
import {
  emailAlreadyInUseMessage,
  invalidEmailMessage,
  invalidFullNameMessage,
  invalidIsRobotMessage,
  invalidPasswordConfirmationMessage,
  invalidPasswordMessage,
  invalidPasswordPolicyMessage,
  passwordConfirmationIsRequiredMessage,
  wrongCredentialsMessage,
} from './utils/validationMessages';
import { signInSchema, signUpSchema } from './utils/validationSchemas';
import fetch from './utils/fetch';
import { apiUrl } from './utils/constants';

export {
  apiUrl,
  isFullName,
  validPassword,
  invalidFullNameMessage,
  invalidEmailMessage,
  invalidPasswordPolicyMessage,
  passwordConfirmationIsRequiredMessage,
  invalidPasswordConfirmationMessage,
  invalidPasswordMessage,
  invalidIsRobotMessage,
  wrongCredentialsMessage,
  emailAlreadyInUseMessage,
  signUpSchema,
  signInSchema,
  fetch,
};

export type { ObjectKey, Data, Endpoint, RequestMethod };
