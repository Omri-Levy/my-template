import { serverErrorMessage } from '@my-template/shared';
import { SetResponseError } from './types';

const setResponseError: SetResponseError = (
  error,
  setError,
  expectedErrorMessages
) => {
  let errorMessage = error.response?.data.message;
  const isExpectedErrorMessage = expectedErrorMessages?.includes(errorMessage);
  const isExpectingErrorMessage =
    expectedErrorMessages && expectedErrorMessages?.length > 0;
  const isStatus429 = error.response?.status === 429;

  if (
    (isExpectingErrorMessage && !isExpectedErrorMessage && !isStatus429) ||
    !errorMessage
  ) {
    errorMessage = serverErrorMessage;
  }

  if (setError) {
    setError(`responseError`, {
      message: errorMessage,
    });
  }
};

export default setResponseError;
