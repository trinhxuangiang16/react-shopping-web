import "./ProductList.css";

const ProductList = (props) => {
  return (
    <div key={props.key} className="prouct-detail">
      <img src={props.data.img} alt="products" />
      <h4>{props.data.name}</h4>
      <p>{props.data.price.toLocaleString()} VND</p>
    </div>
  );
};

export default ProductList;
