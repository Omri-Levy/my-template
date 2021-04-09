import { FunctionComponent } from 'react';
import { Heading } from '@chakra-ui/react';
import DataTabs from '../../DataTabs';
import { Props } from './types';

const ColumnsTabs: FunctionComponent<Props> = ({
  color,
  data,
  setCurrentColumns,
}) => (
  <>
    <Heading as={`h3`} fontSize={`0.9rem`}>
      Navigate Columns
    </Heading>
    <DataTabs color={color} setCurrentColumns={setCurrentColumns} data={data} />
  </>
);

export default ColumnsTabs;
