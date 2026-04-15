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
              <tr>
                <td>
                  <img
                    src={product.data.img1}
                    alt="san pham"
                    width="10px"
                    height="10px"
                  />
                </td>
                <td>{product.data.name}</td>
                <td>{Number(product.data.price)} VND</td>
                <td>
                  <button>◂</button>
                  {Number(product.quantity)}
                  <button>▸</button>
                </td>
                <td>{product.data.price * Number(product.quantity)}</td>
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
          <form>
            <input placeholder="Enter your coupon"></input>
            <button>
              <i className="fa-solid fa-gift" /> Apply coupon
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default CartPage;
