import { FunctionComponent } from 'react';
import { FaSignInAlt, FaUserPlus } from 'react-icons/all';
import { FaHome } from 'react-icons/fa';
import Page from '../../Page';
import NavButton from '../../../NavBox/NavButton';
import NavBox from '../../../NavBox';

const UnauthenticatedHome: FunctionComponent = () => {
  const buttonWidth = 60;
  const navLinksProps = {
    px: 1,
    borderRadius: 5,
    width: buttonWidth,
    display: `grid`,
    placeContent: `center`,
  };

  return (
    <Page title={`Home`} icon={FaHome} display={`grid`}>
      <NavBox borderRadius={5} height={`300px`} mb={300}>
        <NavButton
          to={`/signUp`}
          text={`Sign Up`}
          {...navLinksProps}
          icon={FaUserPlus}
        />
        <NavButton
          to={`/signIn`}
          text={`Sign In`}
          {...navLinksProps}
          icon={FaSignInAlt}
        />
      </NavBox>
    </Page>
  );
};

export default UnauthenticatedHome;
