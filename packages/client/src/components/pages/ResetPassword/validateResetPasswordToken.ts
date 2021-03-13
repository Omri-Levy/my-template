import { axiosRequest } from '@my-template/shared';
import { ValidateResetPasswordToken } from './types';

const validateResetPasswordToken: ValidateResetPasswordToken = (
  token
) => async () =>
  await axiosRequest(
    `GET`,
    undefined,
    `validateResetPasswordToken`,
    undefined,
    token
  );

export default validateResetPasswordToken;
