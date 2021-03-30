/**
 * TODO: Add required field messages
 * TODO: Re-evaluate groups and shared fields
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
  invalidNewPasswordConfirmationMessage,
  invalidNewPasswordMessage,
  invalidNewPasswordPolicyMessage,
  invalidPasswordConfirmationMessage,
  invalidPasswordMessage,
  invalidSecurityAnswerMessage,
  lastNameIsRequiredMessage,
  newPasswordConfirmationIsRequiredMessage,
  newPasswordIsRequiredMessage,
  oldPasswordIsRequiredMessage,
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
  newPasswordConfirmation: yup
    .string()
    .oneOf([yup.ref(`newPassword`)], invalidNewPasswordConfirmationMessage)
    .required(newPasswordConfirmationIsRequiredMessage),
};
const personalInformationFields = {
  email: sharedFields.email,
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
  newPassword: yup
    .string()
    .matches(validPassword, invalidNewPasswordPolicyMessage)
    .min(passwordMin)
    .max(passwordMax)
    .required(newPasswordIsRequiredMessage),
  newPasswordConfirmation: sharedFields.newPasswordConfirmation,
};
const deleteAllUsersFields = {
  deleteAdmins: yup.boolean().required(deleteAdminsIsRequiredMessage),
};
const updateProfileFields = {
  email: yup
    .string()
    .email(invalidEmailMessage)
    .min(emailMin, invalidEmailMessage)
    .max(emailMax, invalidEmailMessage)
    .nullable(),
  fname: yup
    .string()
    .matches(isName, invalidFirstNameMessage)
    .min(firstNameMin)
    .max(firstNameMax)
    .nullable(),
  lname: yup
    .string()
    .matches(isName, invalidLastNameMessage)
    .min(lastNameMin)
    .max(lastNameMax)
    .nullable(),
};
const updatePasswordFields = {
  oldPassword: yup.string().required(oldPasswordIsRequiredMessage),
  newPassword: yup
    .string()
    .matches(validPassword, invalidNewPasswordPolicyMessage)
    .min(passwordMin)
    .max(passwordMax)
    .notOneOf([yup.ref(`oldPassword`)], invalidNewPasswordMessage)
    .required(newPasswordIsRequiredMessage),
  newPasswordConfirmation: sharedFields.newPasswordConfirmation,
};

export {
  sharedFields,
  personalInformationFields,
  securityInformationFields,
  signInFields,
  forgotPasswordFields,
  resetPasswordFields,
  deleteAllUsersFields,
  updateProfileFields,
  updatePasswordFields,
};
