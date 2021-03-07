import { Data, Endpoint } from '@my-template/shared';
import { GRecaptchaResponse, SetError } from '../../utils/types';

type OnSubmit = (
  endpoint: Endpoint,
  setError: SetError,
  expectedErrorMessages?: string[],
  callback?: (args?: unknown) => unknown
) => (gRecaptchaResponse: GRecaptchaResponse) => (data: Data) => Promise<void>;

export { OnSubmit };
