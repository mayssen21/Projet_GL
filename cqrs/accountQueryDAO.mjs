import { accountCommandDAO } from "./accountCommandDAO.mjs";
import { ACCOUNT_LIST } from "./database.mjs";
import { queryDatabase } from "./queryDatabase.mjs";

export const accountQueryDAO = {
    insertAccountQuery(accountQuery){
        queryDatabase.accountSummaryList.push(accountQuery);
    },
    retreiveAccountByID(id){
          const index = ACCOUNT_LIST.findIndex(acc => acc.id === id);
          return ACCOUNT_LIST[index];
    },
    
    retrieveAccount(id) {
        const account = accountQueryDAO.retreiveAccountByID(id);
        return {
          id: account.id,
          name: `${account.lastName} ${account.firstName}`, 
        };
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
