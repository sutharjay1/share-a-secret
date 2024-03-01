import { configureStore } from '@reduxjs/toolkit';
import messageReducer from './messageSlice.js';

const appStore = configureStore({
  reducer: {
    message: messageReducer,
  },
});

export default appStore;
