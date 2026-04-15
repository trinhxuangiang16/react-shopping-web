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
          <tr>
            <td>IMAGE</td>
            <td>PRODUCT</td>
            <td>PRICE</td>
            <td>QUANTITY</td>
            <td>TOTAL</td>
            <td>REMOVE</td>
          </tr>
          {dataCart.map((product) => (
            <tr>
              <td>Hinh Anh</td>
              <td>{product.data.name}</td>
              <td>{product.data.price} VND</td>
              <td>
                <button>◂</button>
                {product.quantity}
                <button>▸</button>
              </td>
              <td>{product.data.price * product.quantity}</td>
              <td></td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
};
export default CartPage;
