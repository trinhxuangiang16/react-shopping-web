import { useNavigate } from "react-router-dom";
import "./ProductList.css";
import { useDispatch, useSelector } from "react-redux";

const ProductList = (props) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const getDetail = () => {
    dispatch({
      type: "DETAIL",
      payload: { data: props.request, id: props.data.id.$oid },
    });
  };

  const getForCategory = () => {
    dispatch({
      type: "FILTER",
      payload: { data: props.request, category: props.data.category },
    });
  };

  // const getDetail = () => {
  //   const valueDetail = JSON.stringtify({
  //     data: props.request,
  //     id: props.data.id.$oid,
  //   });

  //   localStorage.setItem("detailPage", valueDetail);
  // };

  // const getForCategory = () => {
  //   const valueFilter = JSON.stringtify({
  //     data: props.request,
  //     category: props.data.category,
  //   });
  //   localStorage.setItem("filterForDetail", valueFilter);
  // };

  // detail noi dung hien thi trong DetailPage
  const dataDetail = useSelector((state) => state.cart.detail);
  console.log(dataDetail);

  //Cac san pham cung chung Category
  const list = useSelector((state) => state.cart.listItem);
  console.log(list);

  const getRelatedProduct = () => {
    dispatch({
      type: "RELATED",
      payload: { data: list, id: dataDetail.id.$oid },
    });
  };

  return (
    <div
      key={props.key}
      className="product-detail"
      onClick={() => {
        getDetail();
        getForCategory();
        getRelatedProduct();
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
