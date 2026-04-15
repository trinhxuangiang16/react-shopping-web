import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  chat: false,
};

const toggleSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    showPopup: (state, action) => {
      state.data = action.payload;
    },
    hidePopup: (state) => {
      state.data = null;
    },
    toggleChat: (state, action) => {
      state.chat = action.payload;
    },
  },
});

export const { showPopup, hidePopup, toggleChat } = toggleSlice.actions;
export default toggleSlice.reducer;
