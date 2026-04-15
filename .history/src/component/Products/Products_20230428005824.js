import "./Products.css";

const Products = ({ product }) => {
  return (
    <div className="product">
      {product.map((pro) => (
        <div key={pro.id} className="box-product">
          <img src={pro.img} alt="product" />
          <h6>{pro.name}</h6>
          <p>{pro.price.toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;
