import { json, useLoaderData } from "react-router-dom";
import ProductList from "../component/shop/ProductList";
import SideBar from "../component/shop/SideBar";
import "./ShopPage.css";

import { useSelector } from "react-redux";
import { Pagination } from "react-bootstrap";
import { PaginationItem, PaginationLink } from "reactstrap";
// import { Pagination } from "react-bootstrap";
// import { PaginationItem, PaginationLink } from "reactstrap";

const ShopPage = () => {
  const request = useLoaderData();
  const count = useSelector((state) => state.cart.listItem);
  console.log(count);

  return (
    <div className="shop-page">
      <div className="wrap-shop">
        <div className="topic-shop">
          <h1>SHOP</h1>
          <p>SHOP</p>
        </div>
      </div>
      <div className="wrap-shop">
        <SideBar data={request} />
        <div className="wrap-all-product">
          <div className="list-shop">
            <div>
              <input
                className="input-shop"
                placeholder="Enter Search Here!"
              ></input>
            </div>
            <div className="sort-product">
              <select name="sort-product">
                <option value="default-sort">Default sorting</option>
                <option value="name-sort">Name</option>
                <option value="low-price">Price low to high</option>
                <option value="high-price">Price high to low</option>
              </select>
            </div>
          </div>

          <div className="grid-container wrap-produst-list">
            {!count
              ? ""
              : count.map((list, index) => (
                  <ProductList key={index} data={list} request={request} />
                ))}
            <div className="page-change">
              <Pagination
                aria-label="Page navigation example"
                size="sm"
                className="page-ul"
              >
                <PaginationItem className="page-li">
                  <PaginationLink first href="#" className="page-a" />
                </PaginationItem>
                <PaginationItem active>
                  <PaginationLink href="#" className="page-a">
                    1
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" last className="page-a" />
                </PaginationItem>
              </Pagination>
            </div>
          </div>
        </div>
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
        img1: product.img1,
        img2: product.img2,
        img3: product.img3,
        img4: product.img4,
      };
    });

    return request;
  }
}
