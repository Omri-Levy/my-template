import { FunctionComponent } from 'react';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import { v4 } from 'uuid';
import { Props } from './types';
import useColorModeShade from '../../hooks/ui/useColorModeShade';

const DataTabs: FunctionComponent<Props> = ({
  color,
  data,
  setCurrentColumns,
}) => {
  const { colorModeShadeInverted } = useColorModeShade(color || `purple`);

  return (
    <Tabs
      colorScheme={color || `purple`}
      onChange={(index) => setCurrentColumns(index)}
    >
      <TabList>
        {data?.map((tab) => (
          <Tab
            _hover={{
              color: colorModeShadeInverted,
            }}
            key={v4()}
          >
            {tab?.label}
          </Tab>
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
