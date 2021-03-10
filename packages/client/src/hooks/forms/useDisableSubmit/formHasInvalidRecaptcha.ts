import { FormHasInvalidRecaptcha } from './types';

const formHasInvalidRecaptcha: FormHasInvalidRecaptcha = (
  gRecaptchaResponse
) => {
  const usesRecaptcha = gRecaptchaResponse !== `empty`;

  return usesRecaptcha && !gRecaptchaResponse;
};

export default formHasInvalidRecaptcha;
