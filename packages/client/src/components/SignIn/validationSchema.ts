import * as yup from 'yup';
import {
  invalidEmailMessage,
} from '@my-template/shared';

const validationSchema = yup.object().shape({
  email: yup.string()
    .email(invalidEmailMessage)
    .min(6, invalidEmailMessage)
    .max(320, invalidEmailMessage)
    .required(),
  password: yup
    .string()
    .required(),
});

export default validationSchema;
