const ProductItem = ({ products }) => {
  return (
    <div>
      <ul>
        {products.map((pro) => (
          <li>
            <img src={pro.img} alt="product" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductItem;
