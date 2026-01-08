import { Account } from "./account.mjs";
import { accountCommandDAO } from "./accountCommandDAO.mjs";
import { accountQueryDAO } from "./accountQueryDAO.mjs";
import { accountCache } from "./cache.mjs";
import { Event } from "./event.mjs";
import { eventStore } from "./eventStore.mjs";

export const accountCommand = {
    addAccount(lastName, firstName) {
        const account = new Account(null, lastName, firstName);
        const creationDate = new Date();
        const event = new Event(
            "accountAdded",
            account.id,
            account,
            creationDate ,
        );
        eventStore.addEvent(event);
    
        accountCommandDAO.insertAccount(account);
        const accountFormat = {
            id: account.id,
            lastName: account.lastName,
            firstName: account.firstName,
        }

        accountQueryDAO.insertAccountQuery(accountFormat);

        accountCache[account.id] = {
            id: account.id,
            name: `${account.lastName} ${account.firstName}`,
        };

      
        return account ;
    },
    saveAccount(id, lastName, firstName) {
        const creationDate = new Date()
        const accountModif = { id, lastName, firstName };
        const event = new Event(
            "accountUpdated",
            accountModif.id,
            accountModif,
            creationDate ,
        );
        eventStore.addEvent(event);
        accountCommandDAO.updateAccount(accountModif);
        const accountFormat = {
            id: accountModif.id,
            lastName: accountModif.lastName,
            firstName: accountModif.firstName,
        }
        accountQueryDAO.updateAccountQuery(accountFormat);

        accountCache[id] = {
        id: id,
        name: `${lastName} ${firstName}`,
    };
    },
};
