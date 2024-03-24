// contactsOps.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://65feb897b2a18489b386770d.mockapi.io/';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('contacts');
      console.log(response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk('contacts/addContacts', async (contactData) => {
  const postContacts = await axios.post('/contacts', contactData);
  return postContacts
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (contactId) => {
  axios.delete(`/contacts/${contactId}`)
  return contactId;
});
