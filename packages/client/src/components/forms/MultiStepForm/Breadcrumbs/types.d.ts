import { BreadcrumbsProps } from '@chakra-ui/react';

interface Breadcrumb {
  to: string;
  text: string;
  disabled: boolean;
}

type Breadcrumbs = Breadcrumb[];

interface Props extends BreadcrumbsProps {
  breadcrumbs: Breadcrumbs;
  disableSubmit: boolean;
}

type HandleDisableLinks = (
  breadcrumbs: Breadcrumbs,
  disableSubmit: boolean
) => Breadcrumb[];

export { Props, Breadcrumb, Breadcrumbs, HandleDisableLinks };
