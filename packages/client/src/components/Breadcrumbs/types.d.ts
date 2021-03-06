import { BreadcrumbsProps } from '@chakra-ui/react';

interface Breadcrumb {
  isCurrentPage?: boolean;
  to: string;
  text: string;
}

type Breadcrumbs = Breadcrumb[];

interface Props extends BreadcrumbsProps {
  breadcrumbs: Breadcrumbs;
}

export { Props, Breadcrumb, Breadcrumbs };
