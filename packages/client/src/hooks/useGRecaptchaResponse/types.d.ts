import { GRecaptchaResponse, SetState } from '../../utils/types';

type HookReturns = () => (
  {
    gRecaptchaResponse: GRecaptchaResponse;
    setGRecaptchaResponse: SetState<GRecaptchaResponse>;
  }
  );

export {HookReturns};
