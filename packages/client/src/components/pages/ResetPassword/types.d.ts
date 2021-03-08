import { AxiosResponse } from 'axios';

interface Params {
  token: string;
}

type ValidateResetPasswordToken = (
  token: string
) => () => Promise<AxiosResponse<unknown>>;

export { Params, ValidateResetPasswordToken };
