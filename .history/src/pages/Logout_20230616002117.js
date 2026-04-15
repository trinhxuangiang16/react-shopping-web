import { redirect } from "react-router-dom";

export const action = () => {
  localStorage.removeItem("userCurrent");
  return redirect("/");
};
