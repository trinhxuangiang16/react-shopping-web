import { Form, json, useLoaderData, useNavigate } from "react-router-dom";
import { NavItem } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showAll } from "../../store/cartSlice";
import { ShoppingCart, User, ChevronDown, Package } from "lucide-react";
import { Button } from "../ui/button";

const NavBar = () => {
  const products = useLoaderData();
  const [user, setUser] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const listCart = useSelector((state) => state.cart.listCart);
  const cartFromStorage = JSON.parse(localStorage.getItem("cart")) || [];
  const totalCartCount = (listCart.length > 0 ? listCart : cartFromStorage).reduce(
    (acc, item) => acc + (item.quantity || 1),
    0
  );

  const handlerToHome = () => {
    navigate("/");
  };

  const handlerToShop = () => {
    navigate("/shop");
    dispatch(showAll({ data: products, category: "all" }));
  };

  const handlerToCart = () => {
    navigate("/cart");
  };

  const handlerToOrders = () => {
    navigate("/orders");
  };

  const handlerToLogin = () => {
    navigate("/login");
  };

  const userCurrent = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (userCurrent) {
      if (userCurrent.fullName && userCurrent.fullName.length > 1) {
        var a = userCurrent.fullName;
        var b = a.indexOf(" ");
        var c = b !== -1 ? a.slice(0, b) : a;
        var d = a.split(" ");
        d.shift();
        var e = d.map((e) => e.charAt(0));
        var f = e.join("");
        var name = c + f;
        name = name
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .replace(/đ/g, "d")
          .replace(/Đ/g, "D");
        setUser(name);
      } else {
        setUser(userCurrent.fullName || "User");
      }
    }
    if (!userCurrent) {
      setUser(null);
    }
  }, [userCurrent]);

  return (
    <div className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-xs transition-all">
      <Nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <NavItem>
            <Button variant="ghost" size="sm" onClick={handlerToHome} className="font-semibold text-slate-700 hover:text-blue-600">
              Home
            </Button>
          </NavItem>
          <NavItem>
            <Button variant="ghost" size="sm" onClick={handlerToShop} className="font-semibold text-slate-700 hover:text-blue-600">
              Shop
            </Button>
          </NavItem>
        </div>
        <NavItem>
          <h2
            onClick={handlerToHome}
            className="text-[20px] font-extrabold tracking-[0.2em] text-slate-900 cursor-pointer hover:text-blue-600 transition-colors"
          >
            BOUTIQUE
          </h2>
        </NavItem>
        <div className="flex items-center gap-2 sm:gap-3">
          <NavItem>
            <Button variant="ghost" size="sm" onClick={handlerToOrders} className="font-semibold text-slate-700 hover:text-blue-600">
              <Package className="size-4 text-blue-600" /> Orders
            </Button>
          </NavItem>
          <NavItem>
            <Button variant="outline" size="sm" onClick={handlerToCart} className="relative font-semibold">
              <ShoppingCart className="size-4 text-slate-700" /> Cart
              {totalCartCount > 0 && (
                <span className="ml-1 rounded-full bg-blue-600 text-white text-[11px] font-bold px-1.5 py-0.2">
                  {totalCartCount}
                </span>
              )}
            </Button>
          </NavItem>
          <NavItem className="relative">
            {user ? (
              <div className="relative inline-block text-left" onMouseLeave={() => setIsDropdownOpen(false)}>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="font-semibold text-slate-800 flex items-center gap-1"
                >
                  <User className="size-4 text-blue-600" />
                  {user}
                  <ChevronDown className="size-3.5 transition-transform duration-200" style={{ transform: isDropdownOpen ? 'rotate(180deg)' : 'none' }} />
                </Button>

                {isDropdownOpen && (
                  <div className="absolute right-0 mt-1 w-48 bg-white border border-slate-200 shadow-md rounded-none py-1 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                    <button
                      type="button"
                      onClick={() => {
                        setIsDropdownOpen(false);
                        navigate("/profile");
                      }}
                      className="w-full text-left px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors flex items-center gap-2 border-0 bg-transparent cursor-pointer"
                    >
                      <User className="size-3.5 text-slate-400" /> User Profile
                    </button>
                    <div className="border-t border-slate-100 my-1"></div>
                    <Form action="/logout" method="post" onSubmit={() => setIsDropdownOpen(false)}>
                      <button
                        type="submit"
                        className="w-full text-left px-4 py-2 text-xs font-semibold text-red-600 hover:bg-red-50 transition-colors flex items-center gap-2 border-0 bg-transparent cursor-pointer"
                      >
                        <svg className="size-3.5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013-3h4" />
                        </svg>
                        Logout
                      </button>
                    </Form>
                  </div>
                )}
              </div>
            ) : (
              <Button variant="primary" size="sm" onClick={handlerToLogin} className="rounded-none">
                Login
              </Button>
            )}
          </NavItem>
        </div>
      </Nav>
    </div>
  );
};
export default NavBar;

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
