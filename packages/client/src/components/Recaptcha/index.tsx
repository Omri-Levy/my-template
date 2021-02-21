import React, { useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { Props } from './types';
import { GRecaptchaResponse } from '../../utils/types';

const Recaptcha: React.FunctionComponent<Props> = ({setGRecaptchaResponse,
                                                     ...props}) => {
  const {REACT_APP_RECAPTCHA_SITE_KEY} = process.env;
  const recaptchaRef = useRef();
  const handleChange = (gRecaptchaResponse: GRecaptchaResponse) => (
    setGRecaptchaResponse(gRecaptchaResponse)
  );

  return (
    <ReCAPTCHA
      {...props}
      sitekey={REACT_APP_RECAPTCHA_SITE_KEY!}
      ref={recaptchaRef.current}
      onChange={handleChange}
    />
  );
};

export default Recaptcha;
