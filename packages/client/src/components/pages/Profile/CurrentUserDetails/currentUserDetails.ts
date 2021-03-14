import { FaAt, FaSignature, FaUserTag } from 'react-icons/fa';
import { CurrentUserDetails } from './types';

const currentUserDetails: CurrentUserDetails = [
  {
    objectKey: `firstName`,
    text: `First Name`,
    icon: FaSignature,
  },
  {
    objectKey: `lastName`,
    text: `Last Name`,
    icon: FaSignature,
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
