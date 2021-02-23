import * as yup from 'yup';
import { isName, validPassword } from './regex';
import {
  invalidEmailMessage,
  invalidFirstNameMessage,
  invalidLastNameMessage,
  invalidPasswordConfirmationMessage,
  invalidPasswordMessage,
  passwordConfirmationIsRequiredMessage,
} from './validationMessages';

const signUpSchema = yup.object().shape({
  firstName: yup
    .string()
    .matches(isName, invalidFirstNameMessage)
    .min(2)
    .max(35)
    .required(),
  lastName: yup
    .string()
    .matches(isName, invalidLastNameMessage)
    .min(2)
    .max(35)
    .required(),
  email: yup
    .string()
    .email(invalidEmailMessage)
    .min(6, invalidEmailMessage)
    .max(320, invalidEmailMessage)
    .required(),
  password: yup
    .string()
    .matches(validPassword, invalidPasswordMessage)
    .required(),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref(`password`)], invalidPasswordConfirmationMessage)
    .required(passwordConfirmationIsRequiredMessage),
  role: yup.string().nullable().oneOf([`user`, `admin`]),
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

export { signUpSchema, signInSchema };
