import { Outlet } from "react-router-dom";
import Layout from "../component/Layout/Layout";

//Đây là layout của trang
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
