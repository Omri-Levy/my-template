import { useBreakpointValue, useMediaQuery } from '@chakra-ui/react';
import { HookReturns } from './types';

/**
 * TODO: Update description
 */
const useColumnsAmount: HookReturns = () => {
  const [isTooSmallForTwo] = useMediaQuery(`(max-width: 26em)`);

  return (
    useBreakpointValue({
      base: isTooSmallForTwo ? 1 : 2,
      sm: 2,
      md: 3,
      xl: 5,
    }) || 5
  );
};

export default useColumnsAmount;
