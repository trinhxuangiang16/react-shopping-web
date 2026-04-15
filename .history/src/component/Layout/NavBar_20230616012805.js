import { Form, useNavigate, useRouteLoaderData } from "react-router-dom";
import "./NavBar.css";
import { NavItem } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { useEffect, useState } from "react";

const NavBar = () => {
  const [user, setUser] = useState();

  const navigate = useNavigate();

  const handlerToHome = () => {
    console.log("redirecting...");
    navigate("/");
  };

  const handlerToShop = () => {
    navigate("/shop");
  };

  const handlerToCart = () => {
    navigate("/cart");
  };

  const handlerToLogin = () => {
    navigate("/auth?mode=login");
  };
  const token = useRouteLoaderData("root");
  const userCurrent = JSON.parse(localStorage.getItem("userCurrent")) ?? [];

  useEffect(() => {
    const userOut = `${userCurrent.fullName.slice(0, 6)} ▼`;
    setUser(userOut);
    console.log(userOut);
  }, []);

  console.log(userCurrent.fullName);

  return (
    <div className="nav-header">
      <Nav vertical className="header">
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
            <button onClick={handlerToLogin}>
              <i className="fa fa-user" />
              {/* {token !== null ?  : " Login"} */}
            </button>
          </NavItem>
          {token && (
            <Form className="logout-header" action="/logout" method="post">
              <button>{"(Logout)"}</button>
            </Form>
          )}
        </div>
      </Nav>
    </div>
  );
};
export default NavBar;
//onClick={handlerToLogout}
// <header className="header">
//       <div className="left-header">
//         <button onClick={handlerToHome}>
//           <div className="home-header">Home</div>
//         </button>
//         <button onClick={handlerToShop}>
//           <div className="shop-header">Shop</div>
//         </button>
//       </div>
//       <div className="center-header">
//         <h2>BOUTIQUE</h2>
//       </div>
//       <div className="right-header">
//         <button onClick={handlerToCart}>
//           <div className="cart-header">
//             <i className="fa-solid fa-cart-shopping"></i>Cart
//           </div>
//         </button>
//         <button onClick={handlerToLogin}>
//           <div className="login-header">
//             <i className="fa fa-user"></i>
//             Login
//           </div>
//         </button>
//       </div>
//     </header>
