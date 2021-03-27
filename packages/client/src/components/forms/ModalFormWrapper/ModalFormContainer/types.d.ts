import { IconType } from 'react-icons';
import { Disclosure } from '../../../../utils/types';

interface Props {
  icons?: boolean;
  headerIcon?: IconType;
  toggleButtonIcon?: IconType;
  toggleButtonText: string;
  headerText: string;
  disclosure: Disclosure;
}

export { Props };
