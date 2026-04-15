import { Form } from "react-router-dom";
import "./CheckoutPage.css";

const CheckoutPage = () => {
  const dataRomCart = JSON.parse(localStorage.getItem("cart")) ?? [];
  console.log(dataRomCart);

  const sum = JSON.parse(localStorage.getItem("total")) ?? [];
  console.log(sum);
  return (
    <>
      <div className="wrap-checkout">
        <div className="topic-checkout">
          <h1>CHECKOUT</h1>
          <span className="btn-back">
            <button>HOME</button>/<button>CART</button>/
            <button className="btn-active">CHECKOUT</button>
          </span>
        </div>
      </div>
      <div className="wrap-checkout">
        <div className="wrap-form">
          <h2 className="billing">BILLING DETAIL</h2>
          <Form className="form-checkout">
            <p>FULL NAME:</p>
            <input placeholder="Enter Your Name Here!"></input>
            <p>EMAIL:</p>
            <input placeholder="Enter Your Email Here!"></input>
            <p>PHONE NUMBER:</p>
            <input placeholder="Enter Your Phone Number Here!"></input>
            <p>ADDRESS:</p>
            <input placeholder="Enter Your Address Here!"></input>
            <button>Place order</button>
          </Form>
        </div>
        <div className="checkout-box">
          <h3>YOUR ORDER</h3>
          {dataRomCart.map((product) => (
            <p>
              <span></span>
              <span></span>
              <span></span>
            </p>
          ))}
          <p>
            <span>TOTAL</span>
            <span>PRICE</span>
          </p>
        </div>
      </div>
    </>
  );
};
export default CheckoutPage;
