import { useSelector } from "react-redux";
import "./CartPage.css";

const CartPage = () => {
  const cart = useSelector((state) => state.cart.cart.quantity);
  const dataCart = JSON.parse(localStorage.getItem("cart")) ?? [];
  console.log(dataCart, cart);

  return (
    <>
      <div className="wrap-cart">
        <div className="topic-cart">
          <h1>CART</h1>
          <p>CART</p>
        </div>
      </div>
      <div>
        <p>SHOPPING CART</p>
      </div>
      <div>
        <table>
          <tr>IMAGE</tr>
          <tr>PRODUCT</tr>
          <tr>PRICE</tr>
          <tr>QUANTITY</tr>
          <tr>TOTAL</tr>
          <tr>REMOVE</tr>
        </table>
      </div>
    </>
  );
};
export default CartPage;
