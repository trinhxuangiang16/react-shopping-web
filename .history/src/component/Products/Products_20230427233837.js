import { json } from "react-router-dom";
import ProductItem from "./ProductItem";

const Products = () => {
  return <ProductItem />;
};

export default Products;

async function loadProducts() {
  const response = await fetch(
    "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74"
  );

  if (!response.ok) {
    throw json({ message: "Could not fetch product." }, { status: 500 });
  } else {
    const resData = await response.json();
    return resData;
  }
}
