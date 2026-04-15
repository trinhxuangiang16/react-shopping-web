import { json, useLoaderData } from "react-router-dom";
import ProductList from "../component/shop/ProductList";
import SideBar from "../component/shop/SideBar";
import "./ShopPage.css";

const ShopPage = () => {
  const request = useLoaderData();

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

export async function loader() {
  const response = await fetch(
    "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74"
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
        img: product.img1,
      };
    });

    return request;
  }
}
