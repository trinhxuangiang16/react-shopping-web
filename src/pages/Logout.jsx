import { redirect } from "react-router-dom";
import store from "../store/index";
import { logout } from "../store/authSlice";

export const action = () => {
  const saveStateStore = () => {
    store.dispatch(logout());
  };
  saveStateStore();

  return redirect("/login");
};
