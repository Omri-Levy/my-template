import linksBlacklist from './linksBlacklist';
import { ShouldSkipLink } from './types';

const shouldSkipLink: ShouldSkipLink = (to, currentUser) => {
  if (!currentUser || !to) {
    return true;
  }

  return linksBlacklist.some((link) => {
    if (typeof link !== `string`) {
      return link.test(to);
    }

    return linksBlacklist.includes(to);
  });
};

export default shouldSkipLink;
