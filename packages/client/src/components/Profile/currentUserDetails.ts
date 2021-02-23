import { FaAt, FaIdCard, FaUser, FaUserTag } from 'react-icons/fa';
import { CurrentUserDetails } from './types';

const currentUserDetails: CurrentUserDetails = [
  {
    objectKey: `id`,
    text: `ID`,
    icon: FaIdCard,
  },
  {
    objectKey: `firstName`,
    text: `First Name`,
    icon: FaUser,
  },
  {
    objectKey: `lastName`,
    text: `Last Name`,
    icon: FaUser,
  },
  {
    objectKey: `email`,
    text: `Email`,
    icon: FaAt,
  },
  {
    objectKey: `role`,
    text: `Role`,
    icon: FaUserTag,
  },
];

export default currentUserDetails;
