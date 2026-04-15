import "./Products.css";

const Products = ({ product }) => {
  return (
    <div className="wrap-product">
      {product.map((pro) => (
        <div key={pro.id} className="box-product">
          <img src={pro.img} alt="product" width="24%" height="300px" />
          <h6>{pro.name}</h6>
          <p>{pro.price.toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;
