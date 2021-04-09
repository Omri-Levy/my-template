import { FunctionComponent } from 'react';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import { v4 } from 'uuid';
import { Props } from './types';

const DataTabs: FunctionComponent<Props> = ({
  color,
  data,
  setCurrentColumns,
}) => {
  return (
    <Tabs
      colorScheme={color || `purple`}
      onChange={(index) => setCurrentColumns(index)}
    >
      <TabList>
        {data?.map((tab) => (
          <Tab key={v4()}>{tab?.label}</Tab>
        ))}
      </TabList>
      <TabPanels>
        {data?.map((tab) => (
          <TabPanel p={4} key={v4()}>
            {tab?.content}
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};

export default DataTabs;
