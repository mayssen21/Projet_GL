import { ACCOUNT_LIST } from "./database.mjs";
import { queryDatabase } from "./queryDatabase.mjs";

export const accountCommandDAO = {

  insertAccount(account) {
    ACCOUNT_LIST.push(account);
    return account;
  },

  updateAccount(account) {
    const index = ACCOUNT_LIST.findIndex(acc => acc.id === account.id);
    if (index !== -1) {
      ACCOUNT_LIST[index].lastName = account.lastName;
      ACCOUNT_LIST[index].firstName = account.firstName;

      
      return ACCOUNT_LIST[index];
    } else {
      console.log("Compte introuvable");
      return null;
    }
  },
};
