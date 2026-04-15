import { Outlet } from "react-router-dom";
import Layout from "../component/Layout/Layout";

const RootLayout = () => {
  return (
    <>
      <Layout>
        <main>
          <Outlet />
        </main>
      </Layout>
    </>
  );
};
export default RootLayout;
