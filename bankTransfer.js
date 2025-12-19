const bankDAO = require("./bankDAO");

const bankTransfer = {
  async transfer(fromId, toId, amount) {
    const fromAccount = bankDAO.getAccount(fromId);
    const toAccount = bankDAO.getAccount(toId);

    console.log("Avant transfert");
    console.log(`De : ${fromId}, solde : ${fromAccount.balance}`);
    console.log(`À  : ${toId}, solde : ${toAccount.balance}`);
    console.log(`Montant à transférer : ${amount}`);

    if (amount > fromAccount.balance) {
      return Promise.reject(new Error("Solde insuffisant"));
    }

    fromAccount.withdraw(amount);
    toAccount.deposit(amount);

    console.log("Après transfert");
    console.log(`Pour ${fromId} => solde : ${fromAccount.balance}`);
    console.log(`Pour ${toId} => solde : ${toAccount.balance}`);

    return Promise.resolve(true);
  }
};

module.exports = bankTransfer;
