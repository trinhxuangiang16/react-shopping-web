import { redirect } from "react-router-dom";
import store from "../store/index";

export const action = () => {
  const saveStateStore = () => {
    store.dispatch({
      type: "ON_LOGOUT",
    });
  };

  saveStateStore();
  return redirect("/");
};
