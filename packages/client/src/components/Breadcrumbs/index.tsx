import { FunctionComponent } from 'react';
import {
  Breadcrumb as ChakraBreadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Props } from './types';

const Breadcrumbs: FunctionComponent<Props> = ({ breadcrumbs, ...props }) => (
  <ChakraBreadcrumb fontWeight={`medium`} fontSize={`sm`} mb={5} {...props}>
    {breadcrumbs.map((breadcrumb, index) => {
      const { isCurrentPage, to, text } = breadcrumb;
      const isLastChild = index === breadcrumbs.length + 1;

      return (
        <BreadcrumbItem
          isCurrentPage={isCurrentPage}
          isLastChild={isLastChild}
          key={to}
        >
          <BreadcrumbLink as={Link} to={to}>
            {text}
          </BreadcrumbLink>
        </BreadcrumbItem>
      );
    })}
  </ChakraBreadcrumb>
);

export default Breadcrumbs;
