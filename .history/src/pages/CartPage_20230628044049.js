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
        <h3>SHOPPING CART</h3>
      </div>
      <div className="wrap-invoice">
        <div className="wrap-table">
          <table className="table">
            <tr className="tr-title">
              <td>IMAGE</td>
              <td>PRODUCT</td>
              <td>PRICE</td>
              <td>QUANTITY</td>
              <td>TOTAL</td>
              <td>REMOVE</td>
            </tr>
            {dataCart.map((product) => (
              <tr className="tr-map">
                <td className="td-img">
                  <img
                    src={product.data.img1}
                    alt="san pham"
                    width="100%"
                    height="100%"
                  />
                </td>
                <td className="cart-name-product">{product.data.name}</td>
                <td>{Number(product.data.price).toLocaleString()} VND</td>
                <td>
                  <button>◂</button>
                  {Number(product.quantity)}
                  <button>▸</button>
                </td>
                <td>
                  {(
                    product.data.price * Number(product.quantity)
                  ).toLocaleString()}{" "}
                  VND
                </td>
                <td>
                  <i className="fa-solid fa-trash-can" />
                </td>
              </tr>
            ))}
          </table>
        </div>
        <div className="cart-total">
          <div>
            <h3>CART TOTAL</h3>
            <p>
              SUBTOTAL <span>gia tien</span>
            </p>
            <p>
              TOTAL <span>tong tien</span>
            </p>
          </div>
          <div>
            <input placeholder="Enter your coupon"></input>
            <button>
              <i className="fa-solid fa-gift" /> Apply coupon
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default CartPage;
