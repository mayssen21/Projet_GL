import { ACCOUNT_LIST } from "./database.mjs";

export const accountDAO = {
  
  insertAccount(account) {
    ACCOUNT_LIST.push(account);
    console.log("BDD :", ACCOUNT_LIST);
    return account;
  },
  retrieveAccountList() {
   
    return ACCOUNT_LIST.map(account => ({
      id: account.id,
      lastName: account.lastName,
      firstName: account.firstName,

    }));
  },
  updateAccount(account) {
    const index = ACCOUNT_LIST.findIndex(acc => acc.id === account.id);
    if (index !== -1) {
      ACCOUNT_LIST[index].lastName = account.lastName;
      ACCOUNT_LIST[index].firstName = account.firstName;
    }
    return ACCOUNT_LIST[index];
  },
  retrieveAccount(id) {},
};
