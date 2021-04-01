import {
  firstNameMax,
  firstNameMin,
  lastNameMax,
  lastNameMin,
  passwordLowercaseCharacters,
  passwordMax,
  passwordMin,
  passwordNumbers,
  passwordSpecialCharacters,
  passwordUppercaseCharacters,
  securityAnswerMax,
  securityAnswerMin,
} from './validationConstants';

// field names
const name = `name`;
const firstName = `First ${name}`;
const lastName = `Last ${name}`;
const email = `Email`;
const security = `Security`;
const securityQuestion = `${security} question`;
const securityAnswer = `${security} answer`;
const password = `Password`;
const oldPassword = `Old ${password.toLowerCase()}`;
const newPassword = `New ${password.toLowerCase()}`;
const passwordConfirmation = `${password} confirmation`;
const newPasswordConfirmation = `${newPassword} confirmation`;
const deleteAdmins = `Delete admins`;

const requiredFieldMessage = `is a required field.`;
const invalidNameMessage = (type: `firstName` | `lastName`) => {
  let min = 0;
  let max = 0;

  if (type === `firstName`) {
    min = firstNameMin;
    max = firstNameMax;
  }

  if (type === `lastName`) {
    min = lastNameMin;
    max = lastNameMax;
  }

  return (
    ` must include a minimum of ${min} alphabetic characters and` +
    `, a maximum of ${max} alphabetic characters and may not include ` +
    `spaces or dashes.`
  );
};
// sign up
const invalidFirstNameMessage = `${firstName} ${invalidNameMessage(
  `firstName`
)}`;
const invalidLastNameMessage = `${lastName} ${invalidNameMessage(`lastName`)}`;
const invalidPasswordPolicyMessage =
  `${password} must include a minimum of ` +
  `${passwordMin} characters, a maximum of ${passwordMax} characters, ` +
  `${passwordUppercaseCharacters} uppercase characters, ` +
  `${passwordLowercaseCharacters} lowercase ` +
  `characters, ${passwordNumbers} number ` +
  `and ${passwordSpecialCharacters} special characters.`;
const invalidPasswordMessage = `${password} must match password policy.`;
const invalidSecurityAnswerMessage =
  `${securityAnswer} must ` +
  `include a minimum of ${securityAnswerMin} characters and a maximum of ` +
  `${securityAnswerMax} characters.`;
const invalidPasswordConfirmationMessage =
  `${passwordConfirmation} must ` +
  `match the inserted ${password.toLowerCase()}.`;

const passwordConfirmationIsRequiredMessage =
  `${passwordConfirmation} ` + `${requiredFieldMessage}`;
const firstNameIsRequiredMessage = `${firstName} ${requiredFieldMessage}`;
const lastNameIsRequiredMessage = `${lastName} ${requiredFieldMessage}`;
const emailAlreadyInUseMessage = `${email} already in use.`;
const securityAnswerIsRequiredMessage =
  `${securityAnswer} ` + `${requiredFieldMessage}`;

// sign in
const wrongCredentialsMessage = (attemptsLeft: string): string =>
  `Wrong credentials - please try again. ${attemptsLeft}`;
const lockoutMessage =
  `You've made too many failed sign in attempts - ` + `please try again`;

// shared
const invalidEmailMessage =
  `${email} must include '@', a minimum of ` +
  `1 character before '@', a minimum of 1 character after '@,` +
  ` and end with a valid domain i.e '.com'.`;
const invalidIsRobotMessage =
  `Please verify you are not a robot and ` + `try again.`;

const passwordIsRequiredMessage = `${password} ` + `${requiredFieldMessage}`;
const oldPasswordIsRequiredMessage =
  `${oldPassword} ` + `${requiredFieldMessage}`;
const emailIsRequiredMessage = `${email} ` + `${requiredFieldMessage}`;
const securityQuestionIsRequiredMessage =
  `${securityQuestion} ` + `${requiredFieldMessage}`;

const serverErrorMessage = `Something went wrong - please try again.`;
const securityQuestionOneOfMessage =
  `Please select a ` + `${securityQuestion.toLowerCase()}.`;
const noUserWasFoundMessage = `No user was found.`;
const invalidUserIdMessage = `Invalid user id.`;

// forgot password
const invalidSecurityInformationMessage =
  `Wrong ${securityQuestion.toLowerCase()} or ` +
  `${securityAnswer.toLowerCase()} - please try again.`;
const invalidTokenMessage = `Invalid token.`;

const forgotPasswordMessage =
  `If the email belongs to an existing account ` +
  `- you will receive an email with the next steps in order to ` +
  `reset your password shortly.`;
const terminateUserAccountMessage =
  `Please make sure there is at least ` +
  `one more admin user in existence before trying again.`;
const deleteSelectedUsersMessage = `Please select one or more users to delete.`;

// admins.ts actions
const deleteAdminsIsRequiredMessage = `${deleteAdmins} ${requiredFieldMessage}`;

const noChangesWereMadeMessage = `No changes were made.`;
const invalidOldPasswordMessage =
  `Wrong ${oldPassword.toLowerCase()}` + ` - please try again.`;
const invalidNewPasswordMessage =
  `${newPassword} cannot ` + `match ${oldPassword.toLowerCase()}.`;
const invalidNewPasswordPolicyMessage =
  `${newPassword} must ` + `match ${password.toLowerCase()} policy.`;
const newPasswordIsRequiredMessage =
  `${newPassword} ` + `${requiredFieldMessage}`;
const newPasswordConfirmationIsRequiredMessage =
  `${newPasswordConfirmation} ` + `${requiredFieldMessage}`;
const invalidNewPasswordConfirmationMessage =
  `${newPasswordConfirmation} must ` +
  `match the inserted ${newPassword.toLowerCase()}.`;
const unauthorizedMessage = `Unauthorized.`;

export {
  invalidFirstNameMessage,
  invalidLastNameMessage,
  invalidEmailMessage,
  invalidPasswordPolicyMessage,
  passwordIsRequiredMessage,
  passwordConfirmationIsRequiredMessage,
  invalidPasswordConfirmationMessage,
  invalidPasswordMessage,
  invalidIsRobotMessage,
  wrongCredentialsMessage,
  emailAlreadyInUseMessage,
  serverErrorMessage,
  securityQuestionOneOfMessage,
  invalidSecurityAnswerMessage,
  securityAnswerIsRequiredMessage,
  forgotPasswordMessage,
  invalidTokenMessage,
  invalidSecurityInformationMessage,
  emailIsRequiredMessage,
  securityQuestionIsRequiredMessage,
  firstNameIsRequiredMessage,
  lastNameIsRequiredMessage,
  lockoutMessage,
  terminateUserAccountMessage,
  deleteSelectedUsersMessage,
  deleteAdminsIsRequiredMessage,
  oldPasswordIsRequiredMessage,
  noChangesWereMadeMessage,
  noUserWasFoundMessage,
  invalidOldPasswordMessage,
  invalidNewPasswordMessage,
  invalidNewPasswordPolicyMessage,
  newPasswordIsRequiredMessage,
  newPasswordConfirmationIsRequiredMessage,
  invalidNewPasswordConfirmationMessage,
  invalidUserIdMessage,
  unauthorizedMessage,
};
