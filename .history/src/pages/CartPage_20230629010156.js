import { useDispatch } from "react-redux";
import "./CartPage.css";
import { useState } from "react";

const CartPage = () => {
  const dataCart = JSON.parse(localStorage.getItem("cart")) ?? [];
  console.log(dataCart);

  const sum = JSON.parse(localStorage.getItem("total")) ?? [];

  const [cartUpdate, setCartUpdate] = useState(dataCart);
  console.log(cartUpdate);
  const updateHandler = () => {
    const update = JSON.parse(localStorage.getItem("cart")) ?? [];
    setCartUpdate(update);
  };

  const dispatch = useDispatch();

  // useEffect(() => {
  //   updateHandler();
  // }, [dataCart]);

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
      {sum ? (
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
                    <button
                      onClick={() => {
                        var updateQuantity = product.quantity;
                        if (updateQuantity > 1) {
                          updateQuantity = product.quantity - 1;
                        } else {
                          updateQuantity = 1;
                        }

                        dispatch({
                          type: "UPDATE_CART",
                          payload: {
                            data: product.data,
                            quantity: updateQuantity,
                          },
                        });
                        console.log("clicked");
                        updateHandler();
                      }}
                    >
                      ◂
                    </button>
                    <span>{Number(product.quantity)}</span>
                    <button
                      onClick={() => {
                        dispatch({
                          type: "UPDATE_CART",
                          payload: {
                            data: product.data,
                            quantity: product.quantity + 1,
                          },
                        });
                        console.log("click");
                        updateHandler();
                      }}
                    >
                      ▸
                    </button>
                  </td>
                  <td className="table-opacity">
                    {(
                      product.data.price * Number(product.quantity)
                    ).toLocaleString()}
                    VND
                  </td>
                  <td>
                    <i
                      className="fa-solid fa-trash-can table-opacity"
                      onClick={() => {
                        dispatch({
                          type: "DELETE_CART",
                          payload: {
                            data: product.data,
                            quantity: product.quantity,
                          },
                        });
                        updateHandler();
                      }}
                    />
                  </td>
                </tr>
              ))}
            </table>
          </div>
          <div className="cart-total">
            <div>
              <h3>CART TOTAL</h3>
              <p>
                <span> SUBTOTAL {sum.toLocaleString()} VND</span>
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
      ) : (
        "Bạn chưa chọn sản phẩm nào!"
      )}
    </>
  );
};
export default CartPage;
