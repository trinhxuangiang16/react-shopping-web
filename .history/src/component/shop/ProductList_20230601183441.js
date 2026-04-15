import { useNavigate } from "react-router-dom";
import "./ProductList.css";

const ProductList = (props) => {
  const navigate = useNavigate();

  const getDetail = () => {
    localStorage.setItem(
      "detailPage",
      JSON.stringtify({ data: props.request, id: props.data.id.$oid })
    );
  };

  const getForCategory = () => {
    localStorage.setItem(
      "filterForDetail",
      JSON.stringtify({ data: props.request, category: props.data.category })
    );
  };

  return (
    <div
      key={props.key}
      className="product-detail"
      onClick={() => {
        getDetail();
        getForCategory();
        navigate(`/detail/${props.data.id.$oid}`);
      }}
    >
      <img src={props.data.img1} alt="products" />
      <h4>{props.data.name}</h4>
      <p>{props.data.price.toLocaleString()} VND</p>
    </div>
  );
};

export default ProductList;
// , {
//   state: {
//     listItem: props.request,
//     category: props.data.category,
//   },
// }

// dispatch({
//   type: "DETAIL",
//   payload: { data: props.request, id: props.data.id.$oid },
// });
