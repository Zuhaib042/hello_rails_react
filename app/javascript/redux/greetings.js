import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Actions
const FETCH_GREETINGS = 'FETCH_GREETINGS';

// state data
const initialState = [];

const baseUrl = 'http://127.0.0.1:3000/api/messages';

// Reducers

const greetingReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'FETCH_GREETINGS/fulfilled': {
      return action.payload;
    }
    default:
      return state;
  }
};

// action creators

export const fetchGreetings = createAsyncThunk(FETCH_GREETINGS, async () => {
  const response = await axios.get(baseUrl);
  const greetings = response.data;
  return greetings;
});

export default greetingReducer;
