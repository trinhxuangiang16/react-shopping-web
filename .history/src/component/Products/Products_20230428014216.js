import "./Products.css";

const Products = ({ product1 }) => {
  return (
    <div className="wrap-product">
      <ul className="product">
        {product.map((pro) => (
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
