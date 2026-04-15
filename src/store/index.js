import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import toggleReducer from "./toggleSlice";
import inboxReducer from "./inboxSlice";
import authReducer from "./authSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    toggle: toggleReducer,
    inbox: inboxReducer,
    auth: authReducer,
  },
  devTools: import.meta.env.DEV,
});

export default store;
