import { FunctionComponent } from 'react';
import {
  ButtonGroup,
  Checkbox,
  Flex,
  Td,
  Text,
  Tfoot,
  Tr,
} from '@chakra-ui/react';
import { v4 } from 'uuid';
import { chunk } from 'lodash';
import { Props } from './types';
import GlobalFilter from '../../GlobalFilter';
import Pagination from '../../Pagination';
import useColumnsAmount from '../../../../hooks/responsiveness/useColumnsAmount';

const TableFooterInstance: FunctionComponent<Props> = ({
  Actions,
  ...props
}) => {
  const checkboxHoverAndFocus = {
    '.chakra-checkbox__control': {
      transform: `scale(1.2)`,
      transition: `scale 240ms ease-in-out`,
      boxShadow: `none`,
    },
  };
  const columnsAmount = useColumnsAmount();

  return (
    <Tfoot>
      {props?.footerGroups?.map((group) => {
        const headersChunk = chunk(group?.headers, columnsAmount);
        const columns = headersChunk[props?.currentColumns];

        return (
          <Tr {...group?.getFooterGroupProps()} key={v4()}>
            {columns?.map((column) => (
              <Td {...column?.getFooterProps()} key={v4()}>
                {column?.render(`Footer`)}
              </Td>
            ))}
            {columns?.length === 1 && (
              <Td role={`presentation`} aria-label={`whitespace`} />
            )}
            {props?.users?.length > 1 && (
              <Td>
                <Checkbox
                  isChecked={props?.allCheckboxesChecked}
                  onChange={props?.checkAllCheckboxes}
                  colorScheme={props?.checkboxColor || `purple`}
                  _focusWithin={checkboxHoverAndFocus}
                  _hover={checkboxHoverAndFocus}
                >
                  <Text mt={0.5}>Select All</Text>
                </Checkbox>
              </Td>
            )}
          </Tr>
        );
      })}
      <Tr>
        <GlobalFilter
          globalFilter={props?.globalFilter}
          setGlobalFilter={props?.setGlobalFilter}
        />
        <Td
          borderLeft={`1px solid`}
          borderLeftColor={props?.borderColor}
          colSpan={props?.colSpan}
        >
          <Flex justifyContent={`flex-end`}>
            <ButtonGroup spacing={5}>{Actions}</ButtonGroup>
          </Flex>
        </Td>
      </Tr>
      <Pagination
        colSpan={props?.colSpan}
        pageIndex={props?.pageIndex}
        pageCount={props?.pageCount}
        pageSize={props?.pageSize}
        rowsLength={props?.rowsLength}
        gotoPage={props?.gotoPage}
        canPreviousPage={props?.canPreviousPage}
        canNextPage={props?.canNextPage}
        previousPage={props?.previousPage}
        nextPage={props?.nextPage}
        setPageSize={props?.setPageSize}
      />
    </Tfoot>
  );
};

export default TableFooterInstance;
