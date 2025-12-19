class Account {
  constructor(id, balance = 0) {
    this.id = id;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    if (amount > this.balance) {
      throw new Error("Solde insuffisant");
    }
    this.balance -= amount;
  }
}

module.exports = Account;
