const isFullName = /^[a-z]{2,34}(\s|-)[a-z]{2,34}$/i;
const validPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,128}$/;

export { isFullName, validPassword };
