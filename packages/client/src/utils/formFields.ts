/**
 * meant for mapping forms fields.
 */
const formFields = [
  {
    name: `fname`,
    text: `First Name`,
    type: `text`,
    maxLength: 35,
  },
  {
    name: `lname`,
    text: `Last Name`,
    type: `text`,
    maxLength: 35,
  },
  {
    name: `email`,
    text: `Email`,
    type: `email`,
    maxLength: 320,
  },
  {
    name: `password`,
    text: `Password`,
    type: `password`,
    maxLength: 128,
  },
  {
    name: `passwordConfirmation`,
    text: `Password Confirmation`,
    type: `password`,
    maxLength: 128,
  },
  {
    name: `responseError`,
  },
];

export default formFields;
