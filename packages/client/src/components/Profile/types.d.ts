import { FunctionComponent } from 'react';

interface CurrentUserDetail {
  key: string;
  text: string;
  icon: FunctionComponent;
}
type CurrentUserDetails = CurrentUserDetail[];

export {CurrentUserDetails};
