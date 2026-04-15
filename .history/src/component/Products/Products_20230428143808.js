import MoreInfo from "./MoreInfo";
import "./Products.css";

const Products = ({ product }) => {
  return (
    <div>
      <div className="wrap-product">
        <ul className="product">
          {product.request1.map((pro) => (
            <li key={pro.id} className="box-product">
              <img src={pro.img} alt="products" />
              <h4>{pro.name}</h4>
              <p>{pro.price.toLocaleString()} VND</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="wrap-product">
        <ul className="product">
          {product.request2.map((pro) => (
            <li key={pro.id} className="box-product">
              <img src={pro.img} alt="products" />
              <h4>{pro.name}</h4>
              <p>{pro.price.toLocaleString()} VND</p>
            </li>
          ))}
        </ul>
      </div>
      <MoreInfo />
    </div>
  );
};

export default Products;
