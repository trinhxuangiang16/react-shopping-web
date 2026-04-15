import { Fragment } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <Fragment>
      <NavBar />
      <main style={{ height: "1200px" }}>{props.children}</main>
      <Footer />
    </Fragment>
  );
};
export default Layout;
