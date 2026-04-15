import { useSelector } from "react-redux";

const CartPage = () => {
  const cart = useSelector((state) => state.cart.cart.quantity);
  const dataCart = JSON.parse(localStorage.getItem("cart")) ?? [];
  console.log(dataCart, cart);
  return <h1>This is CartPage</h1>;
};
export default CartPage;
