import { BoxProps } from '@chakra-ui/react';
import { ObjectType } from '@my-template/shared';
import { Icon } from '../../../../../utils/types';

interface Props extends BoxProps {
  text: string;
  icon?: Icon;
  iconProps?: ObjectType;
}

export { Props };
