import { IterableUser } from '@my-template/shared';
import { FunctionComponent } from 'react';

interface Props {
  objectKey: string;
  icon: FunctionComponent;
  text: string;
  currentUser: IterableUser;
}
