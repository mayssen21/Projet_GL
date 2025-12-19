const isPasswordValid = require("./passwordValidator");

test("le mot de passe doit contenir au moins 8 caractères", () => {
  expect(isPasswordValid("12345678")).toBe(true);
  expect(isPasswordValid("1234567")).toBe(false);
});
