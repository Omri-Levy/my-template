import { FunctionComponent } from 'react';
import { TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import { v4 } from 'uuid';
import { Props } from './types';
import TabsData from './TabsData';

const DataTabs: FunctionComponent<Props> = ({
  color,
  data,
  setCurrentColumns,
  currentColumns,
  isLazy,
}) => {
  return (
    <Tabs
      maxWidth={{ base: `29ch`, sm: `unset` }}
      align={`start`}
      variant={`enclosed-colored`}
      colorScheme={color || `purple`}
      defaultIndex={currentColumns}
      onChange={(index) => {
        setCurrentColumns(index);
      }}
      isLazy={isLazy}
    >
      <TabList>
        <TabsData data={data} color={color} />
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
