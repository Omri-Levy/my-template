import { Box, forwardRef } from '@chakra-ui/react';
import { capitalize } from '@my-template/shared';
import { Props } from './types';

/**
 * TODO: update description
 */
const Option = forwardRef<Props, `option`>(
  ({ option, optionsProps, ...props }, ref) => (
    <Box as={`option`} value={option} ref={ref} {...optionsProps} {...props}>
      {optionsProps?.textTransform === `capitalize`
        ? capitalize(option)
        : option}
    </Box>
  )
);

export default Option;
