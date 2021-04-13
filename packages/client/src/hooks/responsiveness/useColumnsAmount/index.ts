import { useBreakpointValue } from '@chakra-ui/react';
import { HookReturns } from './types';

/**
 * TODO: Update description
 */
const useColumnsAmount: HookReturns = () =>
  useBreakpointValue({ base: 2, md: 3, xl: 5 }) || 5;

export default useColumnsAmount;
