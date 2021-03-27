import { FunctionComponent } from 'react';
import { Props } from './types';
import Modal from './ModalFormContainer';

const ModalFormWrapper: FunctionComponent<Props> = ({
  icons = true,
  headerIcon,
  toggleButtonIcon,
  toggleButtonText,
  headerText,
  disclosure,
  children,
  ...props
}) => (
  <Modal
    icons={icons}
    headerIcon={headerIcon}
    toggleButtonIcon={toggleButtonIcon}
    toggleButtonText={toggleButtonText}
    headerText={headerText}
    disclosure={disclosure}
    {...props}
  >
    {children}
  </Modal>
);

export default ModalFormWrapper;
