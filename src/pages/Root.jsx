import { Outlet, ScrollRestoration } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Layout from "../component/Layout/Layout";

const RootLayout = () => {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Layout>
        <main>
          <Outlet />
        </main>
      </Layout>
      <ScrollRestoration />
    </>
  );
};
export default RootLayout;
