/**
 * TODO: Add required field messages
 */
import * as yup from 'yup';
import { isName, validPassword } from '../regex';
import {
  invalidEmailMessage,
  invalidFirstNameMessage,
  invalidLastNameMessage,
  invalidPasswordConfirmationMessage,
  invalidPasswordMessage,
  invalidSecurityAnswerMessage,
  passwordConfirmationIsRequiredMessage,
  passwordIsRequiredMessage,
  securityQuestionOneOfMessage,
} from './validationMessages';
import {
  emailMax,
  emailMin,
  firstNameMax,
  firstNameMin,
  lastNameMax,
  lastNameMin,
  passwordMax,
  passwordMin,
  securityAnswerMax,
  securityAnswerMin,
} from './validationConstants';
import { securityQuestions } from '../constants';

const sharedFields = {
  email: yup
    .string()
    .email(invalidEmailMessage)
    .min(emailMin, invalidEmailMessage)
    .max(emailMax, invalidEmailMessage)
    .required(),
  password: yup
    .string()
    .matches(validPassword, invalidPasswordMessage)
    .min(passwordMin)
    .max(passwordMax)
    .required(passwordIsRequiredMessage),
  securityQuestion: yup
    .string()
    .oneOf(securityQuestions, securityQuestionOneOfMessage)
    .required(),
};
const personalInformationFields = {
  fname: yup
    .string()
    .matches(isName, invalidFirstNameMessage)
    .min(firstNameMin)
    .max(firstNameMax)
    .required(),
  lname: yup
    .string()
    .matches(isName, invalidLastNameMessage)
    .min(lastNameMin)
    .max(lastNameMax)
    .required(),
  email: sharedFields.email,
};
const securityInformationFields = {
  securityQuestion: sharedFields.securityQuestion,
  securityAnswer: yup
    .string()
    .min(securityAnswerMin, invalidSecurityAnswerMessage)
    .max(securityAnswerMax, invalidSecurityAnswerMessage)
    .required(),
  password: sharedFields.password,
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref(`password`)], invalidPasswordConfirmationMessage)
    .required(passwordConfirmationIsRequiredMessage),
};
const signInFields = {
  email: sharedFields.email,
  password: yup.string().required(passwordIsRequiredMessage),
};
const forgotPasswordFields = {
  email: sharedFields.email,
};
const resetPasswordFields = {
  securityQuestion: sharedFields.securityQuestion,
  securityAnswer: yup.string().required(),
  newPassword: sharedFields.password,
  newPasswordConfirmation: yup
    .string()
    .oneOf([yup.ref(`newPassword`)], invalidPasswordConfirmationMessage)
    .required(passwordConfirmationIsRequiredMessage),
};

export {
  sharedFields,
  personalInformationFields,
  securityInformationFields,
  signInFields,
  forgotPasswordFields,
  resetPasswordFields,
};
