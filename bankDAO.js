const Account = require("./Account");

const accounts = {
  "ACC1": new Account("ACC1", 5000),
  "ACC2": new Account("ACC2", 2000),
};

const bankDAO = {
  retrieveBalance(accountId) {
    const account = accounts[accountId];
    return account.balance;
  },

  getAccount(accountId) {
    return accounts[accountId];
  },

  debitAccount(accountId, amount) {
    const account = accounts[accountId];
    account.withdraw(amount);
  }
};

module.exports = bankDAO;
