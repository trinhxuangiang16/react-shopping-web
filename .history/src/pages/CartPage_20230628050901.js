import "./CartPage.css";

const CartPage = () => {
  const dataCart = JSON.parse(localStorage.getItem("cart")) ?? [];
  console.log(dataCart);

  return (
    <>
      <div className="wrap-cart">
        <div className="topic-cart">
          <h1>CART</h1>
          <p>CART</p>
        </div>
      </div>
      <div className="title-shoping-cart">
        <h2>SHOPPING CART</h2>
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
            {dataCart.map((product, index) => (
              <tr className="tr-map" key={index}>
                <td className="td-img">
                  <img
                    src={product.data.img1}
                    alt="san pham"
                    width="100%"
                    height="100%"
                  />
                </td>
                <td className="cart-name-product">{product.data.name}</td>
                <td className="table-opacity">
                  {Number(product.data.price).toLocaleString()} VND
                </td>
                <td className="td-button">
                  <button>◂</button>
                  {Number(product.quantity)}
                  <button>▸</button>
                </td>
                <td className="table-opacity">
                  {(
                    product.data.price * Number(product.quantity)
                  ).toLocaleString()}{" "}
                  VND
                </td>
                <td>
                  <i className="fa-solid fa-trash-can table-opacity" />
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
