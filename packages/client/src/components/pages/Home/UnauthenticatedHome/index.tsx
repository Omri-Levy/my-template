import { FunctionComponent } from 'react';
import { FaHome, FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import Page from '../../Page';
import NavButton from '../../../NavBox/NavButton';
import NavBox from '../../../NavBox';

const UnauthenticatedHome: FunctionComponent = () => {
  const navLinksProps = {
    px: 1,
    borderRadius: 5,
    width: 60,
    display: `grid`,
    placeContent: `center`,
  };

  return (
    <Page title={`Home`} icon={FaHome} display={`grid`}>
      <NavBox borderRadius={5} height={`300px`} mt={`100px`}>
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
