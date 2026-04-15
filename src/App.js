import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/Root";
import HomePage, { loader as productsLoader } from "./pages/HomePage";
import ShopPage, { loader as shopLoader } from "./pages/ShopPage";
import DetailPage, { loader as detailLoader } from "./pages/DetailPage";
import CartPage, { loader as cartLoader } from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import { action as logoutAction } from "./pages/Logout";
import { loader as navbarLoader } from "./component/Layout/NavBar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    id: "root",
    loader: navbarLoader,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: productsLoader,
      },
      { path: "shop", element: <ShopPage />, loader: shopLoader },
      {
        path: "detail/:productId",
        element: <DetailPage />,
        loader: detailLoader,
      },
      { path: "cart", element: <CartPage />, loader: cartLoader },
      { path: "checkout", element: <CheckoutPage /> },
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },
      { path: "logout", action: logoutAction },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
