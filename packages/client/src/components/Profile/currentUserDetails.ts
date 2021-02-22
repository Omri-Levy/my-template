import { FaAt, FaIdCard, FaSignature, FaUserTag } from 'react-icons/fa';
import { CurrentUserDetails } from './types';

const currentUserDetails: CurrentUserDetails = [
  {
    key: `id`,
    text: `ID`,
    icon: FaIdCard,
  },
  {
    key: `fullName`,
    text: `Full Name`,
    icon: FaSignature,
  },
  {
    key: `email`,
    text: `Email`,
    icon: FaAt,
  },
  {
    key: `role`,
    text: `Role`,
    icon: FaUserTag,
  },
];

export default currentUserDetails;
