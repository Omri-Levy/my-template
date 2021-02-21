import * as yup from 'yup';
import { isFullName, validPassword } from './regex';
import {
  invalidEmailMessage,
  invalidFullNameMessage,
  invalidPasswordConfirmationMessage,
  invalidPasswordMessage,
  passwordConfirmationIsRequiredMessage,
} from './validationMessages';

const signUpSchema = yup.object().shape({
  fullName: yup.string().matches(isFullName, invalidFullNameMessage).required(),
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
