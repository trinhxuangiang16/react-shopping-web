import { useNavigate } from "react-router-dom";
import "./NavBar.css";
import { NavItem } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";

const NavBar = () => {
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
              <i className="fa fa-user" /> Login
            </button>
          </NavItem>
          <NavItem className="logout-header">
            <button onClick={handlerToLogout}>Login</button>
          </NavItem>
        </div>
      </Nav>
    </div>
  );
};
export default NavBar;

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
