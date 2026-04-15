import { Link, useNavigate } from "react-router-dom";
import "./LoginPage.css";
import { useDispatch, useSelector } from "react-redux";
import { useRef, useEffect } from "react";
import { login } from "../store/authSlice";

//Trang Login/Sign in
const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading, error } = useSelector((state) => state.auth);

  //Theo dõi email và password
  const emailRef = useRef();
  const passwordRef = useRef();

  // Redirect nếu đã đăng nhập
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const submitForm = (e) => {
    e.preventDefault();

    if (!emailRef.current.value || !passwordRef.current.value) {
      alert("Vui lòng điền email và mật khẩu!");
      return;
    }

    dispatch(login(emailRef.current.value, passwordRef.current.value));
  };

  useEffect(() => {
    if (error) {
      alert(error);
    }
  }, [error]);

  return (
    <div className="wrap-login">
      <div
        className="login-page"
        style={{ backgroundImage: "url(./images/banner1.jpg)" }}
      >
        <div className="wrap-form">
          <form onSubmit={submitForm} className="form-login">
            <h2>Sign In</h2>
            <div className="wrap-row email">
              <label>Email</label>
              <input
                type="email"
                name="email"
                required
                ref={emailRef}
                placeholder="admin@boutique.com"
                disabled={isLoading}
              ></input>
            </div>
            <div className="wrap-row password">
              <label>Password</label>
              <input
                type="password"
                name="password"
                required
                ref={passwordRef}
                placeholder="admin@123"
                disabled={isLoading}
              ></input>
            </div>
            <div className="btn-signup">
              <button type="submit" disabled={isLoading}>
                {isLoading ? "ĐANG ĐĂNG NHẬP..." : "SIGN IN"}
              </button>
            </div>
            <div className="btn-toggle">
              <p>
                Tài khoản admin: admin@boutique.com / admin@123
                <br />
                <Link to="/register"> Đăng ký tài khoản khác</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
