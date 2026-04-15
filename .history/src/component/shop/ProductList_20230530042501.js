import { useNavigate } from "react-router-dom";
import "./ProductList.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const ProductList = (props) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const show = () => {
    dispatch({
      type: "DETAIL",
      payload: { data: props.request, id: props.data.id.$oid },
    });
  };

  useEffect(() => {
    show();
  });
  return (
    <div
      key={props.key}
      className="product-detail"
      onClick={() => {
        dispatch({
          type: "FILTER-RELATED",
          payload: { data: props.request, category: props.data.category },
        });

        navigate(
          `/detail/${props.data.id.$oid}`
          // , {
          //   state: {
          //     listItem: props.request,
          //     category: props.data.category,
          //   },
          // }
        );
      }}
    >
      <img src={props.data.img1} alt="products" />
      <h4>{props.data.name}</h4>
      <p>{props.data.price.toLocaleString()} VND</p>
    </div>
  );
};

export default ProductList;
