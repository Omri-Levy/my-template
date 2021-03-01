import { ConditionalText } from './types';

/**
 * the function decides on a string based on the authentication status of the
 * user - if the user is authenticated, returns a field from the current map
 * iteration and returns an empty string if the user is not authenticated.
 */
const conditionalText: ConditionalText = (currentUser, text, objectKey) => {
  if (currentUser && currentUser !== `unauthenticated`) {
    return `${text}: ${currentUser[objectKey]}`;
  }

  return `${text}: `;
};

export default conditionalText;
