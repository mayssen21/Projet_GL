import { ACCOUNT_LIST } from "./database.mjs";
import { queryDatabase } from "./queryDatabase.mjs";
import {eventList} from "./eventStore.mjs";
import {Account} from "./account.mjs"

export const accountCommandDAO = {

  insertAccount(account) {
    ACCOUNT_LIST.push(account);
    return account;
  },
  restoreAccount(accountId) {
    const events = eventList.filter(e => e.accountId === accountId);
    if (events.length === 0) return null;
    const finalPayload = events.reduce((acc, e) => e.payload, {});
    return new Account(
      finalPayload.id,
      finalPayload.lastName,
      finalPayload.firstName,
      new Date(finalPayload.creationDate)
    )
  },
  updateAccount(account) {
    const accountRestored = this.restoreAccount(account.id);
    if (!accountRestored) return null;
    return accountRestored;
  },
};
