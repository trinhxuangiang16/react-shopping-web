import ProductList from "../component/shop/ProductList";
import SideBar from "../component/shop/SideBar";
import "./ShopPage.css";
const ShopPage = () => {
  return (
    <div className="wrap-shop">
      <SideBar />
      <ProductList />
    </div>
  );
};
export default ShopPage;
