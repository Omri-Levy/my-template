import { FunctionComponent } from 'react';
import NavBox from '../../../NavBox';
import NavButton from '../../../NavBox/NavButton';

const TemporaryLinkExpired: FunctionComponent = () => {
  const navLinksProps = {
    px: 1,
    borderRadius: 5,
    width: 60,
    display: `grid`,
    placeContent: `center`,
    replace: true,
  };

  return (
    <NavBox borderRadius={5} height={`300px`} mt={`100px`}>
      <NavButton to={`/`} text={`Home`} {...navLinksProps} />
      <NavButton
        to={`/forgotPassword`}
        text={`Reset Password`}
        {...navLinksProps}
      />
    </NavBox>
  );
};

export default TemporaryLinkExpired;
