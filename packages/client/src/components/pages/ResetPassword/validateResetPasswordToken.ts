import { fetch } from '@my-template/shared';
import { ValidateResetPasswordToken } from './types';

const validateResetPasswordToken: ValidateResetPasswordToken = (
  token
) => async () =>
  await fetch(`GET`, undefined, `validateResetPasswordToken`, undefined, token);

export default validateResetPasswordToken;
