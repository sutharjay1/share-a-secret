import { createSlice } from '@reduxjs/toolkit';

const messageSlice = createSlice({
  name: 'message',
  initialState: {
    message: null,
    messageID: null,
    retrieveMessage: null,
    revealMessage: false,
    shareLink: null,
  },
  reducers: {
    addMessage: (state, action) => {
      if (!state.message) {
        state.message = [];
      }
      state.message.push(action.payload);
    },
    addMessageID: (state, action) => {
      state.messageID = action.payload;
    },
    getMessage: (state, action) => {
      state.retrieveMessage = action.payload;
    },
    revealMessage: (state, action) => {
      state.revealMessage = action.payload;
    },
    shareLink: (state, action) => {
      state.shareLink = action.payload;
    },
  },
});

export const {
  addMessage,
  addMessageID,
  getMessage,
  revealMessage,
  shareLink,
} = messageSlice.actions;

export default messageSlice.reducer;
