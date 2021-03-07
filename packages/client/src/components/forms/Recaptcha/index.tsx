import { FunctionComponent, useEffect, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { Props, RecaptchaRef } from './types';
import { GRecaptchaResponse } from '../../../utils/types';

/**
 * @description a component built on top of react-google-recaptcha ReCAPTCHA
 * component with the addition of error handling, challenge reset on
 * error and the sitekey, ref and onChange handler pre-added for re-usability.
 */
const Recaptcha: FunctionComponent<Props> = ({
  setGRecaptchaResponse,
  errors,
  ...props
}) => {
  const { REACT_APP_RECAPTCHA_SITE_KEY } = process.env;
  const recaptchaRef = useRef<RecaptchaRef>();
  const handleChange = (gRecaptchaResponse: GRecaptchaResponse) =>
    setGRecaptchaResponse(gRecaptchaResponse);

  useEffect(() => {
    if (errors?.responseError) {
      recaptchaRef.current?.reset();
      setGRecaptchaResponse(``);
    }
  }, [errors?.responseError, setGRecaptchaResponse]);

  return (
    <ReCAPTCHA
      {...props}
      sitekey={REACT_APP_RECAPTCHA_SITE_KEY || ``}
      ref={(element) => {
        recaptchaRef.current = element;
      }}
      onChange={handleChange}
    />
  );
};

export default Recaptcha;
