import { json, useLoaderData } from "react-router-dom";
import ProductList from "../component/shop/ProductList";
import SideBar from "../component/shop/SideBar";
import "./ShopPage.css";

import { useSelector } from "react-redux";
import { Pagination } from "react-bootstrap";
import { PaginationItem, PaginationLink } from "reactstrap";
import { useState, useMemo } from "react";

const ShopPage = () => {
  //Lấy dữ liệu từ loader
  const request = useLoaderData();

  //Dữ liệu sản phẩm hiển thị theo dispatch của store action.type = "FILTER". VÀ dùng nó để hiển thị component ProductList
  const dataShop = useSelector((state) => state.cart.listItem);

  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("default-sort");

  // Filter và sort products
  const filteredAndSortedProducts = useMemo(() => {
    let result = [...dataShop];

    // Search filter
    if (searchTerm.trim()) {
      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.shortDesc.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }

    // Sort
    switch (sortOption) {
      case "name-sort":
        result.sort((a, b) => a.name.localeCompare(b.name, "vi"));
        break;
      case "low-price":
        result.sort((a, b) => a.price - b.price);
        break;
      case "high-price":
        result.sort((a, b) => b.price - a.price);
        break;
      case "default-sort":
      default:
        // Keep original order
        break;
    }

    return result;
  }, [dataShop, searchTerm, sortOption]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  return (
    <div className="shop-page">
      <div className="wrap-title-shop">
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
                value={searchTerm}
                onChange={handleSearchChange}
              ></input>
            </div>
            <div className="sort-product">
              <select
                name="sort-product"
                value={sortOption}
                onChange={handleSortChange}
              >
                <option value="default-sort">Default sorting</option>
                <option value="name-sort">Name</option>
                <option value="low-price">Price low to high</option>
                <option value="high-price">Price high to low</option>
              </select>
            </div>
          </div>
          <div className="grid-container wrap-produst-list">
            {filteredAndSortedProducts.length === 0 ? (
              <p style={{ gridColumn: "1 / -1", textAlign: "center" }}>
                {searchTerm
                  ? "Không tìm thấy sản phẩm phù hợp với tìm kiếm"
                  : "Không có sản phẩm nào"}
              </p>
            ) : (
              filteredAndSortedProducts.map((list, index) => (
                <ProductList key={index} data={list} request={request} />
              ))
            )}
          </div>
          <div className="whole-pan">
            <Pagination
              aria-label="Page navigation example"
              size="sm"
              className="page-ul"
            >
              <PaginationItem className="page-li">
                <PaginationLink first href="#" className="page-a" />
              </PaginationItem>
              {filteredAndSortedProducts.length === 0 ? (
                ""
              ) : (
                <PaginationItem active>
                  <PaginationLink href="#" className="page-a">
                    1
                  </PaginationLink>
                </PaginationItem>
              )}
              <PaginationItem>
                <PaginationLink
                  href="#"
                  last
                  className={
                    filteredAndSortedProducts.length !== 0
                      ? "page-a"
                      : "page-a page-a-plus"
                  }
                />
              </PaginationItem>
            </Pagination>
            <p className="text-pan">
              Showing 1-
              {filteredAndSortedProducts.length > 9
                ? 9
                : filteredAndSortedProducts.length}{" "}
              of{" "}
              {filteredAndSortedProducts.length === 0
                ? "0"
                : filteredAndSortedProducts.length}{" "}
              results
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ShopPage;

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
