import { useBreakpointValue } from '@chakra-ui/react';
import { HookReturns } from './types';

/**
 * TODO: Update description
 */
const useIsTablet: HookReturns = () =>
  useBreakpointValue({ base: true, sm: true, md: true, lg: true, xl: false });

export default useIsTablet;
