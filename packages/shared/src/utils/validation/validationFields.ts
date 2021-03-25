/**
 * TODO: Add required field messages
 */
import * as yup from 'yup';
import { isName, validPassword } from '../regex';
import {
  deleteAdminsIsRequiredMessage,
  emailIsRequiredMessage,
  firstNameIsRequiredMessage,
  invalidEmailMessage,
  invalidFirstNameMessage,
  invalidLastNameMessage,
  invalidPasswordConfirmationMessage,
  invalidPasswordMessage,
  invalidSecurityAnswerMessage,
  lastNameIsRequiredMessage,
  passwordConfirmationIsRequiredMessage,
  passwordIsRequiredMessage,
  securityAnswerIsRequiredMessage,
  securityQuestionIsRequiredMessage,
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
    .required(emailIsRequiredMessage),
  password: yup
    .string()
    .matches(validPassword, invalidPasswordMessage)
    .min(passwordMin)
    .max(passwordMax)
    .required(passwordIsRequiredMessage),
  securityQuestion: yup
    .string()
    .oneOf(securityQuestions, securityQuestionOneOfMessage)
    .required(securityQuestionIsRequiredMessage),
};
const personalInformationFields = {
  fname: yup
    .string()
    .matches(isName, invalidFirstNameMessage)
    .min(firstNameMin)
    .max(firstNameMax)
    .required(firstNameIsRequiredMessage),
  lname: yup
    .string()
    .matches(isName, invalidLastNameMessage)
    .min(lastNameMin)
    .max(lastNameMax)
    .required(lastNameIsRequiredMessage),
  email: sharedFields.email,
};
const securityInformationFields = {
  securityQuestion: sharedFields.securityQuestion,
  securityAnswer: yup
    .string()
    .min(securityAnswerMin, invalidSecurityAnswerMessage)
    .max(securityAnswerMax, invalidSecurityAnswerMessage)
    .required(securityAnswerIsRequiredMessage),
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
  securityAnswer: yup.string().required(securityAnswerIsRequiredMessage),
  newPassword: sharedFields.password,
  newPasswordConfirmation: yup
    .string()
    .oneOf([yup.ref(`newPassword`)], invalidPasswordConfirmationMessage)
    .required(passwordConfirmationIsRequiredMessage),
};
const deleteAllUsersFields = {
  deleteAdmins: yup.boolean().required(deleteAdminsIsRequiredMessage),
};

export {
  sharedFields,
  personalInformationFields,
  securityInformationFields,
  signInFields,
  forgotPasswordFields,
  resetPasswordFields,
  deleteAllUsersFields,
};
