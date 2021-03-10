import { ConditionalText } from './types';

/**
 * the function decides on a string based on the authentication status of the
 * user - if the user is authenticated, returns a field from the current map
 * iteration and returns an empty string if the user is not authenticated.
 */
const conditionalText: ConditionalText = (currentUser, text, objectKey) => {
  const emptyField = `${text}: `;

  if (currentUser && currentUser !== `unauthenticated`) {
    const userDetail = currentUser[objectKey];

    return userDetail ? `${emptyField}${userDetail}` : emptyField;
  }

  return emptyField;
};

export default conditionalText;
