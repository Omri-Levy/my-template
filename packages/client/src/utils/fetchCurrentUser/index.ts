import { fetch } from '@my-template/shared';
import { FetchCurrentUser } from './types';

const fetchCurrentUser: FetchCurrentUser = async () => {
   const { data } = await fetch(
      `GET`,
      undefined,
      `getUser`,
      undefined
    );

// @ts-ignore
   return data?.user;
};

export default fetchCurrentUser;
