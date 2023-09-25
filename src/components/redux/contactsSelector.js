import { createSelector } from 'reselect';

export const getContacts = state => state.contacts.items;
export const getIsLoading = state => state.contacts.loading;
export const getError = state => state.contacts.error;
export const getFilter = state => state.filter;

export const getFiltered = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
