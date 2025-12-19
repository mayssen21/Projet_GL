const Account = require("./Account");

const bankDAO = {
  retrieveBalance(accountId) {
    console.log("Retrieve balance");

    
    const account = new Account(accountId, 500000); //créer un compte
    //console.log(account.balance);
    return account.balance;
  }
};

module.exports = bankDAO;
