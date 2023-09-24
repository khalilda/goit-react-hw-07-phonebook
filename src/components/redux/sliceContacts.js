import { createSlice } from '@reduxjs/toolkit';
import { availableContacts } from './availableContacts';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: [...availableContacts], filtered: '' },
  reducers: {
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },
    filterContacts: (state, action) => {
      state.filtered = action.payload;
    },
    removeContacts: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const contactsReducer = contactsSlice.reducer;

export const { addContact, filterContacts, removeContacts } =
  contactsSlice.actions;
