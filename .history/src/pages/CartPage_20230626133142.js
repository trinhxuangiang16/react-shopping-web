import { useSelector } from "react-redux";

const CartPage = () => {
  const cart = useSelector((state) => state.cart.cart.quantity);
  console.log(cart);
  return <h1>This is CartPage</h1>;
};
export default CartPage;
