import { useNavigate } from "react-router-dom";
import "./ProductList.css";

const ProductList = (props) => {
  const navigate = useNavigate();
  return (
    <div
      key={props.key}
      className="product-detail"
      onClick={() => {
        console.log(props.data.id.$oid);
        console.log(props.data);
        navigate(`/detail/${props.data.id.$oid}`);
      }}
    >
      <img src={props.data.img} alt="products" />
      <h4>{props.data.name}</h4>
      <p>{props.data.price.toLocaleString()} VND</p>
    </div>
  );
};

export default ProductList;
