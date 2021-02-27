import { FunctionComponent } from 'react';
import Page from '../Page';
import NavButton from '../NavBox/NavButton';
import NavBox from '../NavBox';

const UnauthenticatedHome: FunctionComponent = () => {
  const buttonWidth = 60;
  const navLinksProps = {
    px: 1,
    backgroundColor: `white`,
    color: `gray.900`,
    borderRadius: 5,
    width: buttonWidth,
    display: `grid`,
    placeContent: `center`,
  };

  return (
    <Page title={`Home`} display={`grid`}>
      <NavBox
        backgroundColor={`gray.900`}
        borderRadius={5}
        height={`300px`}
        mb={300}
      >
        <NavButton to={`/signUp`} text={`Sign Up`} {...navLinksProps} />
        <NavButton to={`/signIn`} text={`Sign In`} {...navLinksProps} />
      </NavBox>
    </Page>
  );
};

export default UnauthenticatedHome;