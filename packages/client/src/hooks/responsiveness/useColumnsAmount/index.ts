import { useBreakpointValue } from '@chakra-ui/react';
import { HookReturns } from './types';

/**
 * TODO: Update description
 */
const useColumnsAmount: HookReturns = () =>
  useBreakpointValue({ base: 2, md: 3, lg: 6 });

export default useColumnsAmount;
