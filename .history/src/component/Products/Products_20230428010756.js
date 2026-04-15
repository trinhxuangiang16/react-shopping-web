import "./Products.css";

const Products = ({ product }) => {
  return (
    <div className="wrap-product">
      <div className="product">
        {product.map((pro) => (
          <div key={pro.id} className="box-product">
            <img src={pro.img} alt="products" />
            <h6>{pro.name}</h6>
            <p>{pro.price.toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
