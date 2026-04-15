import { useEffect, useRef, useState } from "react";
import { Form, Link, useNavigate, useActionData } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../store/authSlice";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, error } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
  });

  const [localError, setLocalError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setLocalError("");
  };

  const validateForm = () => {
    if (!formData.fullName.trim()) {
      setLocalError("Vui lòng điền Họ và tên!");
      return false;
    }

    if (!formData.email.includes("@")) {
      setLocalError("Vui lòng điền email hợp lệ!");
      return false;
    }

    if (formData.password.length < 8) {
      setLocalError("Mật khẩu phải ít nhất 8 ký tự!");
      return false;
    }

    if (!formData.phone.trim()) {
      setLocalError("Vui lòng điền số điện thoại!");
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Dispatch register action
    dispatch(register(formData));
  };

  useEffect(() => {
    if (error) {
      setLocalError(error);
    }
  }, [error]);

  useEffect(() => {
    if (!isLoading && !error && formData.fullName) {
      // Show fake success message
      setSuccess(true);
      setTimeout(() => {
        alert("✓ Đăng ký thành công! Vui lòng đăng nhập bằng tài khoản admin");
        navigate("/login");
      }, 500);
    }
  }, [isLoading, error, navigate, formData.fullName]);

  return (
    <div className="wrap-login">
      <div
        className="login-page"
        style={{ backgroundImage: "url(./images/banner1.jpg)" }}
      >
        <div className="wrap-form">
          <form onSubmit={handleSubmit} className="form-login">
            <h2>Sign Up</h2>

            {localError && (
              <div style={{ color: "red", marginBottom: "10px" }}>
                ⚠ {localError}
              </div>
            )}
            {success && (
              <div style={{ color: "green", marginBottom: "10px" }}>
                ✓ Đăng ký thành công!
              </div>
            )}

            <div className="wrap-row full-name">
              <label>Full Name</label>
              <input
                type="text"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                disabled={isLoading}
                placeholder="Nhập họ và tên"
              ></input>
            </div>

            <div className="wrap-row email">
              <label>Email</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                disabled={isLoading}
                placeholder="Nhập email"
              ></input>
            </div>
            <div className="wrap-row password">
              <label>Password</label>
              <input
                type="password"
                name="password"
                required
                value={formData.password}
                onChange={handleChange}
                disabled={isLoading}
                placeholder="Nhập mật khẩu (tối thiểu 8 ký tự)"
              ></input>
            </div>

            <div className="wrap-row phone">
              <label>Phone</label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                disabled={isLoading}
                placeholder="Nhập số điện thoại"
              ></input>
            </div>

            <div className="btn-signup">
              <button type="submit" disabled={isLoading}>
                {isLoading ? "ĐANG ĐĂNG KÝ..." : "SIGN UP"}
              </button>
            </div>
            <div className="btn-toggle">
              <p>
                Có tài khoản rồi?
                <Link to="/login"> Đăng nhập</Link>
              </p>
            </div>
          </form>
          <div style={{ marginTop: "20px", fontSize: "12px", color: "#666" }}>
            <p style={{ textAlign: "center" }}>
              Lưu ý: Đây là ứng dụng DEMO. <br />
              Tài khoản admin: admin@boutique.com / admin@123
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RegisterPage;
