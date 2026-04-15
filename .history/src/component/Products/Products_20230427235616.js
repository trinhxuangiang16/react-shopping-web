import { defer, json } from "react-router-dom";
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
    const data = await response.json();
    console.log(data);

    const top8 = data.slice(0, 8);
    const request = top8.map((product) => {
      return {
        id: product._id,
        name: product.name,
        price: product.price.toLocaleString(),
        category: product.category,
        shortDesc: product.short_desc,
        longDesc: product.long_desc,
        img: product.img1,
      };
    });

    console.log(request);

    return request;
  }
}

export function loader() {
  return defer({
    products: loadProducts(),
  });
}
