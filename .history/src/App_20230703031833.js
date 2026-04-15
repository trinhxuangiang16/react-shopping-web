import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/Root";
//import ErrorPage from "./pages/Error";
import HomePage, {
  loader as productsLoader,
  action as chatAction,
} from "./pages/HomePage";
import ShopPage, { loader as shopLoader } from "./pages/ShopPage";
import DetailPage, { loader as detailLoader } from "./pages/DetailPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import RegisterPage from "./pages/RegisterPage";
import AuthPage, { action as authAction } from "./pages/AuthPage";
import { action as logoutAction } from "./pages/Logout";
import { tokenLoader } from "./component/util/auth";
import { cartLoader } from "./component/util/auth";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    // errorElement: <ErrorPage />,
    id: "root",
    loader: tokenLoader,

    children: [
      {
        index: true,
        element: <HomePage />,
        loader: productsLoader,
        action: chatAction,
      },
      { path: "shop", element: <ShopPage />, loader: shopLoader },
      {
        path: "detail/:productId",
        element: <DetailPage />,
        loader: detailLoader,
      },
      { path: "cart", element: <CartPage />, loader: cartLoader },
      { path: "checkout", element: <CheckoutPage /> },
      { path: "auth", element: <AuthPage />, action: authAction },

      { path: "register", element: <RegisterPage /> },
      { path: "logout", action: logoutAction },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
