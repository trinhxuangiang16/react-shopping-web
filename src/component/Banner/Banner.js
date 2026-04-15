import { useNavigate } from "react-router-dom";
import "./Banner.css";
import { useDispatch } from "react-redux";

//Banner nằm bên dưới thanh NavBar
const Banner = (props) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  //chuyển hướng đến ShopPage khi click vào Browse collections
  const handlerToCollection = () => {
    navigate("/shop");

    //Khi chuyển hướng thì lấy dữ liệu để thực hiện action hiển thị hết ác sản phẩm
    dispatch({
      type: "ALL",
      payload: { data: props.product, category: "all" },
    });
  };

  return (
    <div className="wrap-banner">
      <div
        className="banner"
        style={{ backgroundImage: "url(./images/banner1.jpg)" }}
      >
        <p>NEW INSPIRATION 2026</p>
        <h2>20% OFF ON NEW</h2>
        <h2>SEASON</h2>
        <button className="btn-collection" onClick={handlerToCollection}>
          Browse collections
        </button>
      </div>
    </div>
  );
};
export default Banner;
