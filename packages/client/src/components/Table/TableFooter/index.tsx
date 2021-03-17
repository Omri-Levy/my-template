import { FunctionComponent, memo } from 'react';
import { Tfoot, Th, Tr } from '@chakra-ui/react';
import { v4 } from 'uuid';
import { Props } from './types';
import FilterInput from '../FilterInput';

const TableFooter: FunctionComponent<Props> = ({
                                                 footerGroups,
                                                 setFilter
                                               }) => (
  <Tfoot>
    {footerGroups?.map((group) => (
      <Tr {...group?.getFooterGroupProps()} key={v4()}>
        {group?.headers?.map((column) => (
          <Th {...column?.getFooterProps()} key={v4()}>
            {column?.render(`Footer`)}
          </Th>
        ))}
      </Tr>
    ))}
    <FilterInput setFilter={setFilter} />
  </Tfoot>
);

export default memo(TableFooter);



