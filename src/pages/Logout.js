import { redirect } from "react-router-dom";
import store from "../store/index";
import { logout } from "../store/authSlice";

//Action logout
export const action = () => {
  //Hàm đăng xuất
  const saveStateStore = () => {
    store.dispatch(logout());
  };
  //Gọi hàm và chuyển hướng về trang login
  saveStateStore();

  return redirect("/login");
};
