import { FunctionComponent, memo } from 'react';
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
import { Props } from './types';
import GlobalFilter from '../../GlobalFilter';
import Pagination from '../../Pagination';

const TableFooterInstance: FunctionComponent<Props> = ({
  Actions,
  ...props
}) => (
  <Tfoot>
    {props.footerGroups?.map((group) => (
      <Tr {...group?.getFooterGroupProps()} key={v4()}>
        {group?.headers?.map((column) => (
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
    ))}
    <Tr>
      <GlobalFilter
        globalFilter={props.globalFilter}
        setGlobalFilter={props.setGlobalFilter}
      />
      <Td borderLeft={`1px solid ${props.borderColor}`} colSpan={props.colSpan}>
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

export default memo(TableFooterInstance);
