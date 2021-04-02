import * as yup from 'yup';
import {
  deleteAllUsersFields,
  forgotPasswordFields,
  personalInformationFields,
  resetPasswordFields,
  securityInformationFields,
  sharedFields,
  signInFields,
  updatePasswordFields,
  updateProfileFields,
  updateUserPasswordFields,
  updateUserProfileFields,
} from './validationFields';

const personalInformationSchema = yup.object().shape(personalInformationFields);
const securityInformationSchema = yup.object().shape(securityInformationFields);
const signUpSchema = yup.object().shape({
  ...personalInformationFields,
  ...securityInformationFields,
  role: sharedFields.role,
});
const signInSchema = yup.object().shape(signInFields);
const forgotPasswordSchema = yup.object().shape(forgotPasswordFields);
const resetPasswordSchema = yup.object().shape(resetPasswordFields);
const deleteAllUsersSchema = yup.object().shape(deleteAllUsersFields);
const updateProfileSchema = yup.object().shape(updateProfileFields);
const updateUserProfileSchema = yup.object().shape(updateUserProfileFields);
const updatePasswordSchema = yup.object().shape(updatePasswordFields);
const updateUserPasswordSchema = yup.object().shape(updateUserPasswordFields);

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
  updateUserProfileSchema,
  updateUserPasswordSchema,
};
