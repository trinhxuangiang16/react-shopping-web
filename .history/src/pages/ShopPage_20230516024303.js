import ProductList from "../component/shop/ProductList";
import SideBar from "../component/shop/SideBar";
import "./ShopPage.css";
const ShopPage = () => {
  return (
    <div className="wrap-shop">
      <div className="topic-shop">
        <h1>SHOP</h1>
        <p>SHOP</p>
      </div>
      <SideBar />
      <ProductList />
    </div>
  );
};
export default ShopPage;
