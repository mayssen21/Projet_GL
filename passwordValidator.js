function isPasswordValid(password) {
  const hasMinLength = password.length >= 8;
  const hasNumber = /\d/.test(password);
  const hasLetter = /[a-zA-Z]/.test(password);

  return hasMinLength && hasNumber && hasLetter;
}

module.exports = isPasswordValid;
