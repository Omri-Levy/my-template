import { Data, Endpoint } from '@my-template/shared';
import { useForm } from 'react-hook-form';
import { GRecaptchaResponse } from '../../utils/types';

type OnSubmit = (
  endpoint: Endpoint,
  setError: useForm.setError,
  expectedErrorMessages?: string[]
) => (gRecaptchaResponse: GRecaptchaResponse) => (data: Data) => Promise<void>;

export { OnSubmit };
