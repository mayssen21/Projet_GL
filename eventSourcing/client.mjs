import { accountCommand } from "./accountCommand.mjs";
import { accountQuery } from "./accountQuery.mjs";
import { eventList } from "./eventStore.mjs";


const acc = accountCommand.addAccount("xxx", "A");
console.log("Events :" ,eventList);
console.log("QueryDatabase :" , accountQuery.getAccountList());

accountCommand.saveAccount(acc.id, "xxxxx", "AAAA");

const accountRecup = accountQuery.getAccount(acc.id);
console.log("Compte : ", accountRecup);

console.log("QueryDatabase :" , accountQuery.getAccountList());

accountCommand.saveAccount(acc.id, "xxxxx", "B");
console.log("Events :" ,eventList);

