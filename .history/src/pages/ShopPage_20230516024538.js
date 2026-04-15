import ProductList from "../component/shop/ProductList";
import SideBar from "../component/shop/SideBar";
import "./ShopPage.css";
const ShopPage = () => {
  return (
    <div>
      <div className="wrap-shop">
        <div className="topic-shop">
          <h1>SHOP</h1>
          <p>SHOP</p>
        </div>
      </div>
      <div className="wrap-shop">
        <SideBar />
        <ProductList />
      </div>
    </div>
  );
};
export default ShopPage;
