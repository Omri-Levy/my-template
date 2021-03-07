import { BreadcrumbsProps } from '@chakra-ui/react';
import { IconType } from 'react-icons';

interface Breadcrumb {
  to: string;
  text: string;
  disabled: boolean;
  icon?: IconType;
}

type Breadcrumbs = Breadcrumb[];

interface Props extends BreadcrumbsProps {
  breadcrumbs: Breadcrumbs;
  disableSubmit: boolean;
  icons?: boolean;
}

type HandleDisableLinks = (
  breadcrumbs: Breadcrumbs,
  disableSubmit: boolean
) => Breadcrumb[];

export { Props, Breadcrumb, Breadcrumbs, HandleDisableLinks };
