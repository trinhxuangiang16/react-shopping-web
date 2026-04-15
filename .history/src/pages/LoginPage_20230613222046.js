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
        <div className="wrap-form"></div>
      </div>
    </div>
  );
};
export default LoginPage;
