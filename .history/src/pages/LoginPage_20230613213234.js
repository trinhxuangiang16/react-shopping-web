import { Form } from "react-router-dom";
import "./Login.css";

const LoginPage = () => {
  return (
    <div className="wrap-login">
      <div
        className="login-page"
        style={{ backgroundImage: "url(./images/banner1.jpg)" }}
      >
        <Form className="">
          <h2>Sign Up</h2>
        </Form>
      </div>
    </div>
  );
};
export default LoginPage;
