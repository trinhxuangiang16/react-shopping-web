import { json, useLoaderData } from "react-router-dom";
import Banner from "../component/Banner/Banner";
import Collection from "../component/content/Collection";
import ProductHome from "../component/Products/ProductHome";
import "./HomePage.css";
import PopupChat from "../component/modal/PopupChat";
import store from "../store/index";

const HomePage = () => {
  const products = useLoaderData();

  return (
    <div className="home-content">
      <Banner />
      <Collection />
      <ProductHome product={products} />
      <PopupChat />
    </div>
  );
};
export default HomePage;

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

export const action = async ({ request }) => {
  //const inboxData = JSON.parse(localStorage.getItem("inboxData")) ?? [];
  const text = await request.formData();
  const textData = {
    content: text.get("text"),
  };
  console.log(textData);

  localStorage.setItem("inboxData", JSON.stringify(textData));

  const saveInbox = () => {
    store.dispatch({
      type: "SEND",
      payload: { data: textData[0].content },
    });
  };

  saveInbox();

  return textData;
};
