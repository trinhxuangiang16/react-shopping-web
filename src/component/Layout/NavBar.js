import { Form, json, useLoaderData, useNavigate } from "react-router-dom";
import "./NavBar.css";
import { NavItem } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showAll } from "../../store/cartSlice";

const NavBar = () => {
  const products = useLoaderData();

  console.log(products);
  //user để lưu thông tin người đang đăng nhập. Ở đây em chỉ lấy tên để hiển thị
  const [user, setUser] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  //Chuyển hướng đến HomePage
  const handlerToHome = () => {
    console.log("redirecting...");
    navigate("/");
  };

  //Chuyển hướng đến ShopPage
  const handlerToShop = () => {
    navigate("/shop");
    dispatch(showAll({ data: products, category: "all" }));
  };

  //Chuyển hướng đến CartPage
  const handlerToCart = () => {
    navigate("/cart");
  };

  //Chuyển đến AuthPage để đăng nhập
  const handlerToLogin = () => {
    navigate("/login");
  };

  //Lấy thông tin user đang đăng nhập
  const userCurrent = useSelector((state) => state.auth.user);

  //Thay đổi thanh NavBar theo trạng thái đăng nhập phụ thuộc theo userCurrent
  useEffect(() => {
    if (userCurrent) {
      if (userCurrent.fullName.length > 1) {
        var a = userCurrent.fullName;

        //Lấy vị trí cách đầu tiên
        var b = a.indexOf(" ");

        //Lấy họ ra
        var c = a.slice(0, b);

        // chuyển thành array
        var d = a.split(" ");

        //xóa đầu array lấy các chữ cuối
        d.shift();

        //Lấy chữ cái đầu của tên còn lại
        var e = d.map((e) => e.charAt(0));

        //Xóa bỏ mảng chuyển thành string cho dính nhau
        var f = e.join("");

        //Ghép họ và 2 chữ cái còn lại
        var name = c + f;

        //Xóa dấu Tiếng việt
        name = name
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .replace(/đ/g, "d")
          .replace(/Đ/g, "D");

        setUser(name);
        console.log(name);
      } else {
        setUser(userCurrent.fullName);
      }
    }
    if (!userCurrent) {
      setUser(null);
    }
  }, [userCurrent]);

  return (
    <div className="nav-header">
      <Nav className="header">
        <div className="left-header">
          <NavItem className="home-header">
            <button onClick={handlerToHome}>Home</button>
          </NavItem>
          <NavItem className="shop-header">
            <button onClick={handlerToShop}>Shop</button>
          </NavItem>
        </div>
        <NavItem>
          <h2 className="center-header">BOUTIQUE</h2>
        </NavItem>
        <div className="right-header">
          <NavItem className="cart-header">
            <button onClick={handlerToCart}>
              <i className="fa-solid fa-cart-shopping"></i> Cart
            </button>
          </NavItem>
          <NavItem className="login-header">
            {user ? (
              <button>
                <i className="fa fa-user" />
                {user} ▼
              </button>
            ) : (
              <button onClick={handlerToLogin}>Login</button>
            )}
          </NavItem>
          {user && (
            <Form className="logout-header" action="/logout" method="post">
              <button>{"( Logout )"}</button>
            </Form>
          )}
        </div>
      </Nav>
    </div>
  );
};
export default NavBar;

//Hàm loader lấy thogn6 tin sản phẩm tương tự trang Home
export async function loader() {
  const response = await fetch(
    "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74",
  );

  if (!response.ok) {
    throw json({ message: "Could not fetch product." }, { status: 500 });
  } else {
    const data = await response.json();
    console.log(data);

    const request = data.map((product) => {
      return {
        id: product._id,
        name: product.name,
        price: parseInt(product.price),
        category: product.category,
        shortDesc: product.short_desc,
        longDesc: product.long_desc,
        img1: product.img1,
        img2: product.img2,
        img3: product.img3,
        img4: product.img4,
      };
    });

    return request;
  }
}
