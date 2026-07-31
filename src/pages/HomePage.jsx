import { json, useLoaderData } from "react-router-dom";
import Banner from "../component/Banner/Banner";
import Collection from "../component/content/Collection";
import ProductHome from "../component/Products/ProductHome";
import PopupChat from "../component/modal/PopupChat";

const HomePage = () => {
  const products = useLoaderData();

  return (
    <div>
      <Banner product={products} />
      <Collection product={products} />
      <ProductHome product={products} />
      <PopupChat />
    </div>
  );
};
export default HomePage;

export async function loader() {
  const response = await fetch("/data_en.json");

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
