const isPasswordValid = require("./passwordValidator");

// tests existants
test("le mot de passe doit contenir au moins 8 caractères", () => {
  expect(isPasswordValid("12345678", { minLength: 8, minLetters: 1, minNumbers: 1 })).toBe(false); // pas de lettre
  expect(isPasswordValid("1234567", { minLength: 8, minLetters: 1, minNumbers: 1 })).toBe(false);  // trop court
  expect(isPasswordValid("password1", { minLength: 8, minLetters: 1, minNumbers: 1 })).toBe(true); // ok
});

test("le mot de passe doit contenir au moins un chiffre", () => {
  expect(isPasswordValid("password1", { minLength: 8, minLetters: 1, minNumbers: 1 })).toBe(true);
  expect(isPasswordValid("password", { minLength: 8, minLetters: 1, minNumbers: 1 })).toBe(false);
});

test("le mot de passe doit contenir au moins une lettre", () => {
  expect(isPasswordValid("12345678", { minLength: 8, minLetters: 1, minNumbers: 1 })).toBe(false);
  expect(isPasswordValid("1234a678", { minLength: 8, minLetters: 1, minNumbers: 1 })).toBe(true);
});

// nouveaux tests paramétrables
test("mot de passe avec longueur paramétrable", () => {
  expect(isPasswordValid("password12", { minLength: 10, minLetters: 1, minNumbers: 1 })).toBe(true);
  expect(isPasswordValid("pass12", { minLength: 10, minLetters: 1, minNumbers: 1 })).toBe(false);
});

test("mot de passe avec nombre minimum de lettres paramétrable", () => {
  expect(isPasswordValid("abc123", { minLength: 6, minLetters: 3, minNumbers: 1 })).toBe(true);
  expect(isPasswordValid("ab1", { minLength: 3, minLetters: 3, minNumbers: 1 })).toBe(false);
});

test("mot de passe avec nombre minimum de chiffres paramétrable", () => {
  expect(isPasswordValid("ab12cd", { minLength: 6, minLetters: 1, minNumbers: 2 })).toBe(true);
  expect(isPasswordValid("a1b2c", { minLength: 5, minLetters: 1, minNumbers: 3 })).toBe(false);
});
