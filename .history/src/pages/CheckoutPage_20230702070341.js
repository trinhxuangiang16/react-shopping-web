import { Form } from "react-router-dom";
import "./CheckoutPage.css";

const CheckoutPage = () => {
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
          <h3>BILLING DETAIL</h3>
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
          {}
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
