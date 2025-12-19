const bankDAO = require("./bankDAO");
const bankTransfer = require("./bankTransfer");

const bank = {
  getBalance(accountId) {
    return bankDAO.retrieveBalance(accountId);
  },

  async transferMoney(fromId, toId, amount) {
    try {
      await bankTransfer.transfer(fromId, toId, amount);
      bankDAO.debitAccount(fromId, amount); // appelé uniquement si transfer réussit
    } catch (err) {
      console.log("Transfert échoué :", err.message);
    }
  }
};

module.exports = bank;
