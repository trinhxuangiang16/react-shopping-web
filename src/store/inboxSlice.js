import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const inboxSlice = createSlice({
  name: "inbox",
  initialState,
  reducers: {
    sendMessage: (state, action) => {
      const inboxData = JSON.parse(localStorage.getItem("inboxData")) ?? [];
      inboxData.push(action.payload.data);
      localStorage.setItem("inboxData", JSON.stringify(inboxData));
      state.data = inboxData;
    },
  },
});

export const { sendMessage } = inboxSlice.actions;
export default inboxSlice.reducer;
