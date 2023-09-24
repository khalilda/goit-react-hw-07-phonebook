import { createSelector } from 'reselect';

export const getContacts = state => state.contacts;
export const getFilter = state => state.filtered;
// export const getFilter = state => state.contacts.filtered;

export const getFiltered = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
