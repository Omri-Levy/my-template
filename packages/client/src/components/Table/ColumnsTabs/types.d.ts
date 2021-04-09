import { ObjectKey } from '@my-template/shared';
import { ChakraColorScheme, SetState } from '../../../utils/types';

interface Props {
  data: Record<ObjectKey, string>[];
  setCurrentColumns: SetState<number>;
  color?: ChakraColorScheme;
}

export { Props };
