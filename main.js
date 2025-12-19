const bank = require("./bank");

const balance = bank.getBalance("ACC1");
console.log("Balance:", balance);

bank.transferMoney("ACC1", "ACC2", 1000);