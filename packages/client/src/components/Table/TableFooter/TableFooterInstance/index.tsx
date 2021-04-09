import { FunctionComponent, memo } from 'react';
import {
  ButtonGroup,
  Checkbox,
  Flex,
  Td,
  Text,
  Tfoot,
  Tr,
  useBreakpointValue,
} from '@chakra-ui/react';
import { v4 } from 'uuid';
import { chunk } from 'lodash';
import { Props } from './types';
import GlobalFilter from '../../GlobalFilter';
import Pagination from '../../Pagination';

const TableFooterInstance: FunctionComponent<Props> = ({
  Actions,
  ...props
}) => {
  const isMobile = useBreakpointValue({ base: true, sm: false });

  return (
    <Tfoot>
      {props.footerGroups?.map((group) => {
        const headersChunk = chunk(group?.headers, 2);
        const mobileChunk = isMobile
          ? headersChunk[props.currentColumns]
          : group?.headers;

        return (
          <Tr {...group?.getFooterGroupProps()} key={v4()}>
            {mobileChunk?.map((column) => (
              <Td {...column?.getFooterProps()} key={v4()}>
                {column?.render(`Footer`)}
              </Td>
            ))}
            {props.users?.length > 1 && (
              <Td>
                <Checkbox
                  mb={1}
                  isChecked={props.checkedItems.every(Boolean)}
                  onChange={props.checkAllCheckboxes}
                >
                  <Text mt={1}>Select All</Text>
                </Checkbox>
              </Td>
            )}
          </Tr>
        );
      })}
      <Tr>
        <GlobalFilter
          globalFilter={props.globalFilter}
          setGlobalFilter={props.setGlobalFilter}
        />
        <Td
          borderLeft={`1px solid`}
          borderLeftColor={props.borderColor}
          colSpan={props.colSpan}
        >
          <Flex justifyContent={`flex-end`}>
            <ButtonGroup spacing={5}>{Actions}</ButtonGroup>
          </Flex>
        </Td>
      </Tr>
      <Pagination
        colSpan={props.colSpan}
        pageIndex={props.pageIndex}
        pageCount={props.pageCount}
        rowsLength={props.rowsLength}
        gotoPage={props.gotoPage}
        canPreviousPage={props.canPreviousPage}
        canNextPage={props.canNextPage}
        previousPage={props.previousPage}
        nextPage={props.nextPage}
        setPageSize={props.setPageSize}
      />
    </Tfoot>
  );
};

export default memo(TableFooterInstance);
