import { useBreakpointValue } from '@chakra-ui/react';
import { HookReturns } from './types';

/**
 * TODO: Update description
 */
const useIsMobile: HookReturns = () =>
  useBreakpointValue({ base: true, md: false });

export default useIsMobile;
