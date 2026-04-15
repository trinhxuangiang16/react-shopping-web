import { Fragment } from "react";

const Layout = (props) => {
  return (
    <Fragment>
      <NavBar />
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
};
