import { FunctionComponent } from 'react';

interface CurrentUserDetail {
  objectKey: string;
  text: string;
  icon: FunctionComponent;
}

type CurrentUserDetails = CurrentUserDetail[];

export { CurrentUserDetails };
