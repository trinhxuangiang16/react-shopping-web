import { Form, useNavigate } from "react-router-dom";
import "./CheckoutPage.css";
import { useState } from "react";
import { useSelector } from "react-redux";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  //Lấy thông tin giỏ hàng từ localStorage
  const dataRomCart = JSON.parse(localStorage.getItem("cart")) ?? [];
  console.log(dataRomCart);

  //Tổng số tiền của đơn hàng
  const sum = JSON.parse(localStorage.getItem("total")) ?? [];
  console.log(sum);

  const [formData, setFormData] = useState({
    fullName: user?.fullName || "",
    email: user?.email || "",
    phone: user?.phone || "",
    address: "",
  });

  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError("");
  };

  const validateForm = () => {
    if (!formData.fullName.trim()) {
      setError("Vui lòng nhập họ và tên!");
      return false;
    }

    if (!formData.email.includes("@")) {
      setError("Vui lòng nhập email hợp lệ!");
      return false;
    }

    if (!formData.phone.trim()) {
      setError("Vui lòng nhập số điện thoại!");
      return false;
    }

    if (!formData.address.trim()) {
      setError("Vui lòng nhập địa chỉ!");
      return false;
    }

    if (dataRomCart.length === 0) {
      setError("Giỏ hàng trống! Vui lòng thêm sản phẩm.");
      return false;
    }

    return true;
  };

  const handleSubmitOrder = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsProcessing(true);

    // Fake order processing (simulate API call)
    setTimeout(() => {
      try {
        // Tạo đơn hàng
        const order = {
          orderId: `ORD-${Date.now()}`,
          customer: formData,
          items: dataRomCart,
          total: sum,
          date: new Date().toLocaleString("vi-VN"),
          status: "Completed",
        };

        // Lưu đơn hàng vào localStorage
        const orders = JSON.parse(localStorage.getItem("orders")) || [];
        orders.push(order);
        localStorage.setItem("orders", JSON.stringify(orders));

        // Clear giỏ hàng sau khi đặt hàng
        localStorage.removeItem("cart");
        localStorage.removeItem("total");

        setIsProcessing(false);

        // Hiển thị thông báo thành công
        alert(
          `✓ Đặt hàng thành công!\nMã đơn: ${order.orderId}\nTổng tiền: ${sum.toLocaleString()} VND`,
        );

        // Redirect về trang chủ
        navigate("/");
      } catch (err) {
        setError("Có lỗi xảy ra! Vui lòng thử lại.");
        setIsProcessing(false);
      }
    }, 1000);
  };

  return (
    <>
      <div className="wrap-checkout">
        <div className="topic-checkout">
          <h1>CHECKOUT</h1>
          <span className="btn-back">
            <button onClick={() => navigate("/")}> HOME</button>/
            <button onClick={() => navigate("/cart")}>CART</button>/
            <button className="btn-active">CHECKOUT</button>
          </span>
        </div>
      </div>
      <div className="checkout-all">
        <div className="wrap-form-out">
          <h2 className="billing">BILLING DETAIL</h2>
          {error && (
            <div style={{ color: "red", marginBottom: "10px" }}>⚠ {error}</div>
          )}
          <Form className="form-checkout" onSubmit={handleSubmitOrder}>
            <p>FULL NAME:</p>
            <input
              name="fullName"
              placeholder="Enter Your Name Here!"
              value={formData.fullName}
              onChange={handleChange}
              disabled={isProcessing}
              required
            ></input>

            <p>EMAIL:</p>
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email Here!"
              value={formData.email}
              onChange={handleChange}
              disabled={isProcessing}
              required
            ></input>

            <p>PHONE NUMBER:</p>
            <input
              type="tel"
              name="phone"
              placeholder="Enter Your Phone Number Here!"
              value={formData.phone}
              onChange={handleChange}
              disabled={isProcessing}
              required
            ></input>

            <p>ADDRESS:</p>
            <input
              name="address"
              placeholder="Enter Your Address Here!"
              value={formData.address}
              onChange={handleChange}
              disabled={isProcessing}
              required
            ></input>

            <button type="submit" disabled={isProcessing}>
              {isProcessing ? "PROCESSING..." : "Place order"}
            </button>
          </Form>
        </div>

        <div className="checkout-box">
          <h3>YOUR ORDER</h3>
          {dataRomCart.length > 0 ? (
            <>
              {dataRomCart.map((product, index) => (
                <div key={index} className="line-out">
                  <p className="name-out">{product.data.name}</p>
                  <p className="down-out">
                    {product.data.price.toLocaleString()} VND
                  </p>
                  <p className="down-out">x {product.quantity}</p>
                </div>
              ))}
              <p>
                <span className="title-out">TOTAL</span>
                <span className="total-out">{sum.toLocaleString()} VND</span>
              </p>
            </>
          ) : (
            <p style={{ color: "red", textAlign: "center" }}>Giỏ hàng trống!</p>
          )}
        </div>
      </div>
    </>
  );
};
export default CheckoutPage;
