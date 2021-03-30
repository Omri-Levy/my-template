import * as yup from 'yup';
import {
  deleteAllUsersFields,
  forgotPasswordFields,
  personalInformationFields,
  resetPasswordFields,
  securityInformationFields,
  signInFields,
  updatePasswordFields,
  updateProfileFields,
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
const deleteAllUsersSchema = yup.object().shape(deleteAllUsersFields);
const updateProfileSchema = yup.object().shape(updateProfileFields);
const updatePasswordSchema = yup.object().shape(updatePasswordFields);

export {
  personalInformationSchema,
  securityInformationSchema,
  signUpSchema,
  signInSchema,
  forgotPasswordSchema,
  resetPasswordSchema,
  deleteAllUsersSchema,
  updateProfileSchema,
  updatePasswordSchema,
};
