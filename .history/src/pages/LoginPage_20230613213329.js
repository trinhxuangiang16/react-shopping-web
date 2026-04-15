import { Form } from "react-router-dom";
import "./Login.css";

const LoginPage = () => {
  return (
    <div className="wrap-login">
      <div
        className="login-page"
        style={{ backgroundImage: "url(./images/banner1.jpg)" }}
      >
        <Form className="form-login">
          <h2>Sign Up</h2>
          <div>
            <label>Full Name</label>
            <input></input>
          </div>
        </Form>
      </div>
    </div>
  );
};
export default LoginPage;
