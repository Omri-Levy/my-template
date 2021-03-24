import * as yup from 'yup';
import {
  deleteUsersFields,
  forgotPasswordFields,
  personalInformationFields,
  resetPasswordFields,
  securityInformationFields,
  signInFields,
} from './validationFields';
import { roles } from './validationReferences';

const personalInformationSchema = yup.object().shape(personalInformationFields);
const securityInformationSchema = yup.object().shape(securityInformationFields);
const signUpSchema = yup.object().shape({
  ...personalInformationFields,
  ...securityInformationFields,
  role: yup.string().nullable().oneOf(roles),
});
const signInSchema = yup.object().shape(signInFields);
const forgotPasswordSchema = yup.object().shape(forgotPasswordFields);
const resetPasswordSchema = yup.object().shape(resetPasswordFields);
const deleteUsersSchema = yup.object().shape(deleteUsersFields);

export {
  personalInformationSchema,
  securityInformationSchema,
  signUpSchema,
  signInSchema,
  forgotPasswordSchema,
  resetPasswordSchema,
  deleteUsersSchema,
};
