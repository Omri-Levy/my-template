import { FunctionComponent } from 'react';
import {
  Breadcrumb as ChakraBreadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Icon,
} from '@chakra-ui/react';
import { Link, useLocation } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';
import { Props } from './types';
import handleDisableLinks from './handleDisableLinks';

const Breadcrumbs: FunctionComponent<Props> = ({
  breadcrumbs,
  disableSubmit,
  ...props
}) => {
  const { pathname } = useLocation();
  const disabledBreadcrumbs = handleDisableLinks(breadcrumbs, disableSubmit);

  return (
    <ChakraBreadcrumb
      spacing={`8px`}
      separator={<Icon as={FaChevronRight} color={`gray.500`} fontSize={12} />}
      fontWeight={`medium`}
      fontSize={`sm`}
      mb={5}
      {...props}
    >
      {disabledBreadcrumbs?.map((breadcrumb, index) => {
        const { to, text } = breadcrumb;
        const isLastChild = index === breadcrumbs.length + 1;
        const isCurrentPage = pathname === to;
        const disableLink = !isCurrentPage && breadcrumb.disabled;
        let disabledLinkStyles;

        if (disableLink) {
          disabledLinkStyles = {
            color: `gray.300`,
            title:
              `Please fill the form and make sure its ` +
              `valid before moving to the next step.`,
            opacity: 0.4,
            'aria-disabled': true,
            cursor: `not-allowed`,
          };
        }

        return (
          <BreadcrumbItem
            isCurrentPage={isCurrentPage}
            isLastChild={isLastChild}
            key={to}
            {...disabledLinkStyles}
          >
            <BreadcrumbLink
              pointerEvents={disableLink || isCurrentPage ? `none` : undefined}
              _activeLink={{
                borderBottom: `1px solid white`,
                _hover: {
                  textDecoration: `none`,
                },
              }}
              as={Link}
              to={disableLink || isCurrentPage ? `` : to}
            >
              {text}
            </BreadcrumbLink>
          </BreadcrumbItem>
        );
      })}
    </ChakraBreadcrumb>
  );
};

export default Breadcrumbs;
