import { HandleDisableLinks } from './types';

const handleDisableLinks: HandleDisableLinks = (breadcrumbs, disableSubmit) => {
  const disabledBreadcrumbs = [...breadcrumbs];
  let previousIndex = 0;

  disabledBreadcrumbs.forEach((_, index) => {
    const lastIndex = index === disabledBreadcrumbs.length - 1;

    if (previousIndex !== 0) {
      previousIndex = index - 1;
    }

    if (!lastIndex) {
      disabledBreadcrumbs[index + 1] = {
        ...disabledBreadcrumbs[index + 1],
        disabled: disableSubmit,
      };
    } else {
      disabledBreadcrumbs[index] = {
        ...disabledBreadcrumbs[index],
        disabled: disableSubmit,
      };
    }

    disabledBreadcrumbs[previousIndex] = {
      ...disabledBreadcrumbs[previousIndex],
      disabled: false,
    };
  });

  return disabledBreadcrumbs;
};

export default handleDisableLinks;
