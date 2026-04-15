import { Form } from "react-router-dom";
import "./Login.css";
import { Button } from "react-bootstrap";

const LoginPage = () => {
  return (
    <div className="wrap-login">
      <div
        className="login-page"
        style={{ backgroundImage: "url(./images/banner1.jpg)" }}
      >
        <div className="wrap-form">
          <Form className="form-login">
            <h2>Sign Up</h2>
            <div className="wrap-row full-name">
              <label>Full Name</label>
              <input></input>
            </div>
            <div className="wrap-row email">
              <label>Email</label>
              <input></input>
            </div>

            <div className="wrap-row phone">
              <label>Phone</label>
              <input></input>
            </div>
            <div className="btn-signup">
              <button>SIGN UP</button>
            </div>
            <div>
              <button>Login?</button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
