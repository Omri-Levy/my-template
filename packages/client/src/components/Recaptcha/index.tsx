import { useRef, FunctionComponent, useEffect } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { Props, RecaptchaRef } from './types';
import { GRecaptchaResponse } from '../../utils/types';

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
    if (errors.responseError) {
      recaptchaRef.current?.reset();
      setGRecaptchaResponse(``);
    }
  }, [errors.responseError, setGRecaptchaResponse]);

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
