import { ConditionalText } from './types';

const conditionalText: ConditionalText = (currentUser, text, objectKey) => {
  if (currentUser && currentUser !== `unauthenticated`) {
    return `${text}: ${currentUser[objectKey]}`;
  }

  return `${text}: `;
};

export default conditionalText;
