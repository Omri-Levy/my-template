import { FunctionComponent } from 'react';
import { Heading } from '@chakra-ui/react';
import DataTabs from '../../DataTabs';
import { Props } from './types';

const ColumnsTabs: FunctionComponent<Props> = ({
  color,
  data,
  setCurrentColumns,
  currentColumns,
}) => (
  <>
    <Heading as={`h3`} fontSize={`0.9rem`} mb={5}>
      Navigate Columns
    </Heading>
    <DataTabs
      isLazy
      color={color}
      setCurrentColumns={setCurrentColumns}
      currentColumns={currentColumns}
      data={data}
    />
  </>
);

export default ColumnsTabs;
