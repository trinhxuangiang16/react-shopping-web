import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import PopupChat from "../modal/PopupChat";

const Layout = () => {
  return (
    <div>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <PopupChat />
      <Footer />
    </div>
  );
};

export default Layout;
