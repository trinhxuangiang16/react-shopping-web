import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/Root";
//import ErrorPage from "./pages/Error";
import HomePage, { loader as productsLoader } from "./pages/HomePage";
import ShopPage, { loader as shopLoader } from "./pages/ShopPage";
import DetailPage, { loader as detailLoader } from "./pages/DetailPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import RegisterPage from "./pages/RegisterPage";
import AuthPage, { action as authAction } from "./pages/AuthPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    // errorElement: <ErrorPage />,
    id: "root",
    children: [
      { index: true, element: <HomePage />, loader: productsLoader },
      { path: "shop", element: <ShopPage />, loader: shopLoader },
      {
        path: "detail/:productId",
        element: <DetailPage />,
        loader: detailLoader,
      },
      { path: "cart", element: <CartPage /> },
      { path: "checkout", element: <CheckoutPage /> },
      { path: "auth", element: <AuthPage />, action: authAction },

      { path: "register", element: <RegisterPage /> },
      { path: "logout" },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
