const bank = require("./bank");
const bankDAO = require("./bankDAO");
const bankTransfer = require("./bankTransfer");

describe("Bank balance", () => {
  test("getBalance appelle retrieveBalance sans l'exécuter", () => {
    bankDAO.retrieveBalance = jest.fn();

    bank.getBalance("ACC1");

    expect(bankDAO.retrieveBalance).toHaveBeenCalled();
  });

  test("getBalance transmet accountId à retrieveBalance", () => {
    bankDAO.retrieveBalance = jest.fn();

    bank.getBalance("ACC1");

    expect(bankDAO.retrieveBalance).toHaveBeenCalledWith("ACC1");
  });

  test("getBalance retourne le solde récupéré", () => {
    bankDAO.retrieveBalance = jest.fn().mockReturnValue(500000);

    const balance = bank.getBalance("ACC1");

    expect(balance).toBe(500000);
  });

});

describe("Bank transferMoney", () => {

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("transferMoney appelle transfer avec les bons paramètres", async () => {
    // Mock de transfer
    bankTransfer.transfer = jest.fn().mockResolvedValue(true);

    await bank.transferMoney("ACC1", "ACC2", 1000);

    expect(bankTransfer.transfer).toHaveBeenCalledWith("ACC1", "ACC2", 1000);
  });

  test("transferMoney appelle debitAccount si transfer réussit", async () => {
    bankTransfer.transfer = jest.fn().mockResolvedValue(true);
    bankDAO.debitAccount = jest.fn();

    await bank.transferMoney("ACC1", "ACC2", 1000);

    expect(bankDAO.debitAccount).toHaveBeenCalledWith("ACC1", 1000);
  });

  test("transferMoney ne doit pas appeler debitAccount si transfer échoue", async () => {
    bankTransfer.transfer = jest.fn().mockRejectedValue(new Error("Transfert impossible"));
    bankDAO.debitAccount = jest.fn();
    await bank.transferMoney("ACC1", "ACC2", 1000).catch(() => {});
    expect(bankDAO.debitAccount).not.toHaveBeenCalled();
  });

});
