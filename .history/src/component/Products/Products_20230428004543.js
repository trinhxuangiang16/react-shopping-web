import "./Products.css";

const Products = ({ product }) => {
  return (
    <div>
      <ul className="ul-product">
        {product.map((pro) => (
          <div>
            <li key={pro.id} className="box-product">
              <img src={pro.img} alt="product" width="24%" height="300px" />
              <h6>{pro.name}</h6>
              <p>{pro.price.toLocaleString()}</p>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Products;
