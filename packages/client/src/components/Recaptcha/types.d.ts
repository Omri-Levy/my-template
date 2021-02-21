import { ReCAPTCHAProps } from 'react-google-recaptcha';
import { GRecaptchaResponse, SetState } from '../../utils/types';

interface Props extends ReCAPTCHAProps {
  setGRecaptchaResponse: SetState<GRecaptchaResponse>;
  sitekey?: never;
  ref?: never;
}

export {Props};
