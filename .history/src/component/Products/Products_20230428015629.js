import "./Products.css";

const Products = ({ product }) => {
  return (
    <div>
      <div className="wrap-product">
        <ul className="product">
          {product.request1.map((pro) => (
            <li key={pro.id} className="box-product">
              <img src={pro.img} alt="products" />
              <h5>{pro.name}</h5>
              <p>{pro.price.toLocaleString()}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="wrap-product">
        <ul className="product">
          {product.request2.map((pro) => (
            <li key={pro.id} className="box-product">
              <img src={pro.img} alt="products" />
              <h2>{pro.name}</h2>
              <p>{pro.price.toLocaleString()}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Products;
