const bank = require("./bank");
const bankDAO = require("./bankDAO");

describe("Bank balance", () => {

  test("getBalance appelle retrieveBalance sans l'exécuter", () => {
    bankDAO.retrieveBalance = jest.fn();

    bank.getBalance("ACC123");

    expect(bankDAO.retrieveBalance).toHaveBeenCalled();
  });

  test("getBalance transmet accountId à retrieveBalance", () => {
    bankDAO.retrieveBalance = jest.fn();

    bank.getBalance("ACC123");

    expect(bankDAO.retrieveBalance).toHaveBeenCalledWith("ACC123");
  });

  test("getBalance retourne le solde récupéré", () => {
    bankDAO.retrieveBalance = jest.fn().mockReturnValue(500000);

    const balance = bank.getBalance("ACC123");

    expect(balance).toBe(500000);
  });
  
});
