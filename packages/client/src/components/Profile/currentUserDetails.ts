import { FaAt, FaIdCard, FaSignature, FaUserTag } from 'react-icons/fa';
import { CurrentUserDetails } from './types';

const currentUserDetails: CurrentUserDetails = [
  {
    objectKey: `id`,
    text: `ID`,
    icon: FaIdCard,
  },
  {
    objectKey: `fullName`,
    text: `Full Name`,
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
