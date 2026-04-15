import { Form } from "react-router-dom";
import "./Login.css";

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
            <div>
              <label>Full Name</label>
              <input></input>
            </div>
            <div>
              <label>Email</label>
              <input></input>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
