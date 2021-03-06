import * as yup from 'yup';
import {
  forgotPasswordFields,
  personalInformationFields,
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

export {
  personalInformationSchema,
  securityInformationSchema,
  signUpSchema,
  signInSchema,
  forgotPasswordSchema,
};
