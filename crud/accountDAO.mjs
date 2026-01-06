import { ACCOUNT_LIST } from "./database.mjs";

export const accountDAO = {
  
  insertAccount(account) {
    ACCOUNT_LIST.push(account);
    console.log("BDD :", ACCOUNT_LIST);
    return account;
  },
  retrieveAccountList() {},
  updateAccount(account) {},
  retrieveAccount(id) {},
};
