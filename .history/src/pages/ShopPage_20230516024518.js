import ProductList from "../component/shop/ProductList";
import SideBar from "../component/shop/SideBar";
import "./ShopPage.css";
const ShopPage = () => {
  return (
    <div>
      <div className="wrap-shop"></div>
      <div className="wrap-shop">
        <SideBar />
        <ProductList />
      </div>
    </div>
  );
};
export default ShopPage;
