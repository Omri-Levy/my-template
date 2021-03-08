import { fetch } from '@my-template/shared';
import { OnSubmit } from './types';
import setResponseError from './FormResponseError/setResponseError';

const onSubmit: OnSubmit = (
  endpoint,
  setError,
  expectedErrorMessages,
  callback,
  params
) => (gRecaptchaResponse) => async (data) => {
  try {
    await fetch(
      `POST`,
      undefined,
      endpoint,
      {
        ...data,
        gRecaptchaResponse,
      },
      params
    );

    if (callback) {
      callback();
    }
  } catch (error) {
    console.error(error);

    setResponseError(error, setError, expectedErrorMessages);
  }
};

export default onSubmit;
