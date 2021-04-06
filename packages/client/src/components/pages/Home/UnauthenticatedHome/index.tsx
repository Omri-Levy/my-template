import { FunctionComponent, memo, useRef } from 'react';
import { FaHome, FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import Page from '../../Page';
import NavButton from '../../../NavBox/NavButton';
import NavBox from '../../../NavBox';
import useRenderToast from '../../../../hooks/ui/useRenderToast';

const UnauthenticatedHome: FunctionComponent = () => {
  const toastRef = useRef();
  toastRef.current = useRenderToast(toastRef);
  const navLinksProps = {
    px: 1,
    borderRadius: 5,
    width: 60,
    display: `grid`,
    placeContent: `center`,
  };

  return (
    <Page title={`Home`} icon={FaHome} display={`grid`}>
      {toastRef.current}
      <NavBox height={`300px`}>
        <NavButton
          to={`/signUp`}
          text={`Sign Up`}
          {...navLinksProps}
          icon={FaUserPlus}
          colorScheme={`purple`}
        />
        <NavButton
          to={`/signIn`}
          text={`Sign In`}
          {...navLinksProps}
          icon={FaSignInAlt}
          colorScheme={`purple`}
        />
      </NavBox>
    </Page>
  );
};

export default memo(UnauthenticatedHome);
