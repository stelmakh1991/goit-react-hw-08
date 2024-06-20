import { createSelector } from "@reduxjs/toolkit";
import { filterSelector } from "../filters/selectors";

export const contactsSelector = (state) => {
  return state.contacts.items;
};

export const selectFilteredContacts = createSelector(
  [contactsSelector, filterSelector],
  (items, name) => {
    return items.filter((item) => {
      return item.name?.toLowerCase().includes(name.toLowerCase());
    });
  }
);