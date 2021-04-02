const isName = /^[a-z]{2,35}$/i;
const validPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,128}$/;
const isUuidV4 = /^[a-z0-9-]{36}$/;

export { isName, validPassword, isUuidV4 };
