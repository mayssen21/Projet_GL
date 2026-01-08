import { accountCommandDAO } from "./accountCommandDAO.mjs";
import { ACCOUNT_LIST } from "./database.mjs";
import { queryDatabase } from "./queryDatabase.mjs";
import { accountCache } from "./cache.mjs";

export const accountQueryDAO = {
    insertAccountQuery(accountQuery){
        queryDatabase.accountSummaryList.push(accountQuery);
    },
    retreiveAccountByID(id){
          const index = ACCOUNT_LIST.findIndex(acc => acc.id === id);
          return ACCOUNT_LIST[index];
    },
    
    retrieveAccount(id) {
        const account = accountCache[id];
        if (!account) {
            console.log("Introuvable");
            return null;
        }
        return account;
    },
    retrieveAccountList() { 
        return queryDatabase.accountSummaryList;
    },
    updateAccountQuery(accountFormat){
        const index = ACCOUNT_LIST.findIndex(acc => acc.id === accountFormat.id);
        const queryIndex = queryDatabase.accountSummaryList.findIndex(acc => acc.id === accountFormat.id);
        if (queryIndex !== -1) {
            queryDatabase.accountSummaryList[queryIndex].lastName = accountFormat.lastName;
            queryDatabase.accountSummaryList[queryIndex].firstName = accountFormat.firstName;
            return  queryDatabase.accountSummaryList;
        }else {
            console.log("Compte introuvable");
            return null;
        }

    }
};
