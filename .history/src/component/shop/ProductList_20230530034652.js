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
        dispatch({
          type: "DETAIL",
          payload: { data: props.request, id: props.data.id.$oid },
        });
        navigate(`/detail/${props.data.id.$oid}`, {
          state: {
            listItem: props.request,
            category: props.data.category,
          },
        });
      }}
    >
      <img src={props.data.img1} alt="products" />
      <h4>{props.data.name}</h4>
      <p>{props.data.price.toLocaleString()} VND</p>
    </div>
  );
};

export default ProductList;
