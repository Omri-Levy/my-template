import * as yup from 'yup';
import { isName, validPassword } from '../regex';
import {
  invalidEmailMessage,
  invalidFirstNameMessage,
  invalidLastNameMessage,
  invalidPasswordConfirmationMessage,
  invalidPasswordMessage,
  passwordConfirmationIsRequiredMessage,
} from './validationMessages';
import { roles } from './validationReferences';
import { securityQuestions } from '../constants';

const signUpSchema = yup.object().shape({
  fname: yup
    .string()
    .matches(isName, invalidFirstNameMessage)
    .min(2)
    .max(35)
    .required(),
  lname: yup
    .string()
    .matches(isName, invalidLastNameMessage)
    .min(2)
    .max(35)
    .required(),
  email: yup
    .string()
    .min(6, invalidEmailMessage)
    .max(320, invalidEmailMessage)
    .required(),
  securityQuestion: yup.string().required().oneOf(securityQuestions),
  securityAnswer: yup.string().min(2).max(70).required(),
  password: yup
    .string()
    .matches(validPassword, invalidPasswordMessage)
    .required(),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref(`password`)], invalidPasswordConfirmationMessage)
    .required(passwordConfirmationIsRequiredMessage),
  role: yup.string().nullable().oneOf(roles),
});
const signInSchema = yup.object().shape({
  email: yup
    .string()
    .email(invalidEmailMessage)
    .min(6, invalidEmailMessage)
    .max(320, invalidEmailMessage)
    .required(),
  password: yup.string().required(),
});
const forgotPasswordSchema = yup.object().shape({
  email: yup
    .string()
    .email(invalidEmailMessage)
    .min(6, invalidEmailMessage)
    .max(320, invalidEmailMessage)
    .required(),
});

export { signUpSchema, signInSchema, forgotPasswordSchema };
