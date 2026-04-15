import "./Products.css";

const Products = ({ product }) => {
  return (
    <div>
      <div className="wrap-product">
        <ul className="product">
          {product.request1.map((pro) => (
            <li key={pro.id} className="box-product">
              <img src={pro.img} alt="products" />
              <h6>{pro.name}</h6>
              <p>{pro.price.toLocaleString()}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="wrap-product">
        <ul className="product">
          {product.request1.map((pro) => (
            <li key={pro.id} className="box-product">
              <img src={pro.img} alt="products" />
              <h6>{pro.name}</h6>
              <p>{pro.price.toLocaleString()}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Products;
