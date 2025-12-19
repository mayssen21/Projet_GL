const isPasswordValid = require("./passwordValidator");

test("le mot de passe doit contenir au moins 8 caractères", () => {
  expect(isPasswordValid("12345678")).toBe(false); // ne contient pas de lettre
  expect(isPasswordValid("1234567")).toBe(false);
  expect(isPasswordValid("password1")).toBe(true);
});

test("le mot de passe doit contenir au moins un chiffre", () => {
  expect(isPasswordValid("password1")).toBe(true);
  expect(isPasswordValid("password")).toBe(false);
});

test("le mot de passe doit contenir au moins une lettre", () => {
  expect(isPasswordValid("12345678")).toBe(false);
  expect(isPasswordValid("1234a678")).toBe(true);
});
