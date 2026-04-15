import { Outlet } from "react-router-dom";

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
