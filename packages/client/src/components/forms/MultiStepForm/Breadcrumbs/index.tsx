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
import useDarkMode from '../../../../hooks/ui/useDarkMode';

const Breadcrumbs: FunctionComponent<Props> = ({
  breadcrumbs,
  disableSubmit,
  icons = true,
  ...props
}) => {
  const { pathname } = useLocation();
  const disabledBreadcrumbs = handleDisableLinks(breadcrumbs, disableSubmit);
  const { darkModeColor } = useDarkMode();

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
        const isLastChild = index === breadcrumbs?.length + 1;
        const isCurrentPage = pathname === to;
        const disableLink = !isCurrentPage && breadcrumb.disabled;
        let disabledLinkStyles;

        if (disableLink) {
          disabledLinkStyles = {
            color: `gray.500`,
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
            {icons && <Icon as={breadcrumb.icon} mr={2} mb={0.5} />}
            <BreadcrumbLink
              pointerEvents={disableLink || isCurrentPage ? `none` : undefined}
              _activeLink={{
                borderBottom: `1px solid`,
                borderColor: darkModeColor,
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
