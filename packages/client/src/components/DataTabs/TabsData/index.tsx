import { FunctionComponent } from 'react';
import { Tab, useMediaQuery, Wrap, WrapItem } from '@chakra-ui/react';
import { v4 } from 'uuid';
import useColorModeShade from '../../../hooks/ui/useColorModeShade';
import { Props } from './types';

const TabsData: FunctionComponent<Props> = ({ color, data }) => {
  const { colorModeShadeInverted } = useColorModeShade(color || `purple`);
  const [isTooSmallForFour] = useMediaQuery(`(max-width: 26em)`);
  const isTooManyTabs = data?.length > 3 && isTooSmallForFour;

  if (isTooManyTabs) {
    return (
      <Wrap>
        {data?.map((tab) => (
          <WrapItem key={v4()}>
            <Tab
              _hover={{
                color: colorModeShadeInverted,
              }}
            >
              {tab?.label}
            </Tab>
          </WrapItem>
        ))}
      </Wrap>
    );
  }

  return (
    <>
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
    </>
  );
};

export default TabsData;
