import { FunctionComponent } from 'react';
import { Props } from './types';
import ModalFormContainer from './ModalFormContainer';

const ModalFormWrapper: FunctionComponent<Props> = ({
  icons = true,
  headerIcon,
  toggleButtonIcon,
  toggleButtonText,
  headerText,
  disclosure,
  buttonProps,
  children,
  ...props
}) => (
  <ModalFormContainer
    icons={icons}
    headerIcon={headerIcon}
    toggleButtonIcon={toggleButtonIcon}
    toggleButtonText={toggleButtonText}
    headerText={headerText}
    disclosure={disclosure}
    buttonProps={buttonProps}
    {...props}
  >
    {children}
  </ModalFormContainer>
);

export default ModalFormWrapper;
