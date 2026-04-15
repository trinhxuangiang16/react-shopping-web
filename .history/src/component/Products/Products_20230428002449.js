const Products = ({ product }) => {
  return (
    <div>
      <ul>
        {product.map((pro) => (
          <li>
            <img src={pro.img} alt="product" />
            <h6>{pro.name}</h6>
            <p>{pro.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
