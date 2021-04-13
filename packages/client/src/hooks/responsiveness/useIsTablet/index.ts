import { useBreakpointValue } from '@chakra-ui/react';
import { HookReturns } from './types';

/**
 * TODO: Update description
 */
const useIsTablet: HookReturns = () =>
  useBreakpointValue({ base: false, md: true });

export default useIsTablet;
