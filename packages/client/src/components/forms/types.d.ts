import { Data, Endpoint } from '@my-template/shared';
import { GRecaptchaResponse, SetError } from '../../utils/types';

type OnSubmit = (
  endpoint: Endpoint,
  setError: SetError,
  expectedErrorMessages?: string[]
) => (gRecaptchaResponse: GRecaptchaResponse) => (data: Data) => Promise<void>;

export { OnSubmit };
