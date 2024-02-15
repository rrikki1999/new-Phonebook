import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const api = axios.create({
  baseURL: 'https://65c6a348e5b94dfca2e1b72e.mockapi.io/contacts',
  
});

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await api.get('/contacts');
      const { data } = response;
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contactData, thunkAPI) => {
    try {
      const response = await api.post('/contacts', contactData);
      const { data } = response;
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await api.delete(`/contacts/${contactId}`);
      const { data } = response;
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
