import "./ProductList.css";

const ProductList = (props) => {
  return (
    <div>
      <div key={props.key.toString()}>
        <img src={props.data.img} alt="products" />
        <h4>{props.data.name}</h4>
        <p>{props.data.price.toLocaleString()} VND</p>
      </div>
    </div>
  );
};

export default ProductList;
