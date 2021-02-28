import ReCAPTCHA, { ReCAPTCHAProps } from 'react-google-recaptcha';
import { FieldErrors } from 'react-hook-form';
import { GRecaptchaResponse, SetState } from '../../../utils/types';

interface Props extends ReCAPTCHAProps {
  setGRecaptchaResponse: SetState<GRecaptchaResponse>;
  sitekey?: never;
  ref?: never;
  errors: FieldErrors;
}

type RecaptchaRef = ReCAPTCHA | null;

export { Props, RecaptchaRef };
