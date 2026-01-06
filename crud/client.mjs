import { accountService } from "./accountService.mjs";

const account = accountService.addAccount("xxx", "Alex");
const accounts = accountService.getAccountList();
console.log("Comptes :", accounts);
console.log("ID :", account.id);
accountService.saveAccount(account.id, "Smith", "A");
const accounts2 = accountService.getAccountList();
console.log("Comptes :", accounts2);
const recupAccount = accountService.getAccount(account.id);
console.log("Compte: ", recupAccount);