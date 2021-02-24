import ReCAPTCHA, { ReCAPTCHAProps } from 'react-google-recaptcha';
import { GRecaptchaResponse, SetState } from '../../utils/types';
import { FieldErrors } from 'react-hook-form';

interface Props extends ReCAPTCHAProps {
  setGRecaptchaResponse: SetState<GRecaptchaResponse>;
  sitekey?: never;
  ref?: never;
  errors: FieldErrors;
}
type RecaptchaRef = ReCAPTCHA | null;

export {Props, RecaptchaRef};
