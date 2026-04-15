import { useNavigate } from "react-router-dom";
import "./ProductList.css";
import { useDispatch } from "react-redux";

const ProductList = (props) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  return (
    <div
      key={props.key}
      className="product-detail"
      onClick={() => {
        console.log(props.data.id.$oid);

        dispatch({
          type: "DETAIL",
          payload: { data: props.request, id: props.request.id.$oid },
        });
        navigate(`/detail/${props.request.id.$oid}`);
      }}
    >
      <img src={props.data.img} alt="products" />
      <h4>{props.data.name}</h4>
      <p>{props.data.price.toLocaleString()} VND</p>
    </div>
  );
};

export default ProductList;
