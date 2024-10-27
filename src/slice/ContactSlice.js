import { createSlice } from "@reduxjs/toolkit";

const contactSlice = createSlice({
  name: "contact",
  initialState: {
    ContactList: [],
    editContactId : "",
  },
  reducers: {
    addContact(state, action) {
      state.ContactList.push(action.payload);
    },

    deleteContact(state, action) {
      const index = state.ContactList.findIndex(
        (contact) => contact.mobile === action.payload
      );
      if (index !== -1) {
        state.ContactList.splice(index, 1);
      }
      // state.ContactList = state.ContactList.filter(contact => contact.mobile !== action.payload);
    },
    editContactId(state, action){
        state.editContactId = action.payload
    },
    editContact(state, action) {

    },
  },
});

// console.log(contactSlice)

export const { addContact, deleteContact, editContact, editContactId } = contactSlice.actions;
export default contactSlice.reducer;
