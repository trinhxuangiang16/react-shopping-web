import "./Products.css";

const Products = ({ product }) => {
  return (
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
      <ul className="product">
        {product.request2.map((pro) => (
          <li key={pro.id} className="box-product">
            <img src={pro.img} alt="products" />
            <h6>{pro.name}</h6>
            <p>{pro.price.toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
