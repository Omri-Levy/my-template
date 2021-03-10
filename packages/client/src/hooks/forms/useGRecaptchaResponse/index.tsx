import { useState } from 'react';
import { GRecaptchaResponse } from '../../../utils/types';
import { HookReturns } from './types';

const useGRecaptchaResponse: HookReturns = () => {
  const [
    gRecaptchaResponse,
    setGRecaptchaResponse,
  ] = useState<GRecaptchaResponse>(``);

  return {
    gRecaptchaResponse,
    setGRecaptchaResponse,
  };
};

export default useGRecaptchaResponse;
