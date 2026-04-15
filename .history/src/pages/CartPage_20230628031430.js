import { useSelector } from "react-redux";

const CartPage = () => {
  const cart = useSelector((state) => state.cart.cart.quantity);
  const dataCart = JSON.parse(localStorage.getItem("cart")) ?? [];
  console.log(dataCart, cart);

  return (
    <div className="wrap-shop">
      <div className="topic-shop">
        <h1>SHOP</h1>
        <p>SHOP</p>
      </div>
    </div>
  );
};
export default CartPage;
