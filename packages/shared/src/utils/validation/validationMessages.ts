const invalidNameMessage =
  `name must include a minimum of 2 characters and` +
  `, a maximum of 35 alphabetic characters and can include spaces and dashes.`;
const invalidFirstNameMessage = `First ${invalidNameMessage}`;
const invalidLastNameMessage = `Last ${invalidNameMessage}`;
const invalidEmailMessage =
  `Email must include '@', a minimum of ` +
  `1 characters before '@', a minimum of 1 characters after '@,` +
  ` and end with a valid domain i.e '.com'.`;
const invalidPasswordPolicyMessage =
  `Password must include a minimum of ` +
  `eight characters, one uppercase character, one lowercase ` +
  `character, one number and one special character.`;
const invalidPasswordMessage = `Password must match password policy.`;
const passwordConfirmationIsRequiredMessage =
  `Password confirmation ` + `is a required field.`;
const invalidPasswordConfirmationMessage =
  `Password confirmation must ` + `match the inserted password.`;
const invalidIsRobotMessage =
  `Please verify you are not a robot and ` + `try again.`;
const wrongCredentialsMessage = `Wrong credentials - please try again.`;
const emailAlreadyInUseMessage = `Email already in use.`;
const serverErrorMessage = `Something went wrong - please try again.`;

export {
  invalidFirstNameMessage,
  invalidLastNameMessage,
  invalidEmailMessage,
  invalidPasswordPolicyMessage,
  passwordConfirmationIsRequiredMessage,
  invalidPasswordConfirmationMessage,
  invalidPasswordMessage,
  invalidIsRobotMessage,
  wrongCredentialsMessage,
  emailAlreadyInUseMessage,
  serverErrorMessage,
};
