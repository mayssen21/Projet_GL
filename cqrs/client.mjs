import { accountCommand } from "./accountCommand.mjs";
import { accountQuery } from "./accountQuery.mjs";


const acc = accountCommand.addAccount("xxx", "A");

console.log("QueryDatabase :" , accountQuery.getAccountList());

accountCommand.saveAccount(acc.id, "xxxxx", "AAAA");

const accountRecup = accountQuery.getAccount(acc.id);
console.log("Compte : ", accountRecup);

console.log("QueryDatabase :" , accountQuery.getAccountList());
