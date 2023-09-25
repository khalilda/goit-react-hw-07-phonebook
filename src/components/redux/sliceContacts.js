import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './backendAPI';
// import { availableContacts } from './availableContacts';

// export const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: { contacts: [...availableContacts], filtered: '' },
//   reducers: {
//     addContact: (state, action) => {
//       state.contacts.push(action.payload);
//     },
//     filterContacts: (state, action) => {
//       state.filtered = action.payload;
//     },
//     removeContacts: (state, action) => {
//       state.contacts = state.contacts.filter(
//         contact => contact.id !== action.payload
//       );
//     },
//   },
// });

// export const contactsReducer = contactsSlice.reducer;

// export const { addContact, filterContacts, removeContacts } =
//   contactsSlice.actions;

export const sliceContacts = createSlice({
  name: 'contacts',
  initialState: { items: [], isLoading: false, error: null },
  extraReducers: builder => {
    builder
      // fetchContacts.pending
      .addCase(fetchContacts.pending, state => {
        state.isLoading = true;
      })
      // fetchContacts.fulfilled
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      // fetchContacts.rejected
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // addContact.pending
      .addCase(addContact.pending, state => {
        state.isLoading = true;
      })
      // addContact.fulfilled
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = [action.payload, ...state.items];
      })
      // addContact.rejected
      .addCase(addContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // deleteContact.pending
      .addCase(deleteContact.pending, state => {
        state.isLoading = true;
      })
      // deleteContact.fulfilled
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      // deleteContact.rejected
      .addCase(deleteContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { reducer } = sliceContacts;
export default reducer;
