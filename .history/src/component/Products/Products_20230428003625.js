const Products = ({ product }) => {
  return (
    <div>
      <ul>
        {product.map((pro) => (
          <li key={pro.id}>
            <img src={pro.img} alt="product" width="24%" height="300px" />
            <h6>{pro.name}</h6>
            <p>{pro.price.toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
