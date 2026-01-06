import { accountService } from "./accountService.mjs";

accountService.addAccount("xxx", "Alex");
const accounts = accountService.getAccountList();
console.log("Comptes :", accounts);