function isPasswordValid(password, options = {}) {
  const minLength = options.minLength; 
  const minLetters = options.minLetters;
  const minNumbers = options.minNumbers; 

  const lettersCount = (password.match(/[a-zA-Z]/g) || []).length;
  const numbersCount = (password.match(/\d/g) || []).length;

  return password.length >= minLength &&
         lettersCount >= minLetters &&
         numbersCount >= minNumbers;
}

module.exports = isPasswordValid;
