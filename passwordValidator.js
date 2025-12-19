function isPasswordValid(password, options) {
  const minLength = options.minLength;
  const minLetters = options.minLetters;
  const minNumbers = options.minNumbers;
  const newRules = options.newRules || [];

  const lettersCount = (password.match(/[a-zA-Z]/g) || []).length;
  const numbersCount = (password.match(/\d/g) || []).length;

  const lengthCheck = password.length >= minLength;
  const lettersCheck = lettersCount >= minLetters;
  const numbersCheck = numbersCount >= minNumbers;

  const newCheck = newRules.every(rule => rule(password));

  return lengthCheck && lettersCheck && numbersCheck && newCheck;
}

module.exports = isPasswordValid;
