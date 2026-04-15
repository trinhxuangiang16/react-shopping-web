//import { useNavigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Collection.css";
import { useDispatch } from "react-redux";

//Danh mục sản phẩm nằm bên dưới Banner
const Collection = (props) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  //Hàm hiện sản phẩm có category iphone khi click vào button tương ứng
  const showIphoneHandler = () => {
    navigate("/shop");

    //Hiện sản phẩm theo category
    dispatch({
      type: "FILTER",
      payload: { data: props.product, category: "iphone" },
    });
  };

  //Hàm hiện sản phẩm có category ipad khi click vào button tương ứng
  const showIpadHandler = () => {
    navigate("/shop");

    //Hiện sản phẩm theo category
    dispatch({
      type: "FILTER",
      payload: { data: props.product, category: "ipad" },
    });
  };

  //Hàm hiện sản phẩm có category macbook khi click vào button tương ứng
  const showMacbookHandler = () => {
    navigate("/shop");

    //Hiện sản phẩm theo category
    dispatch({
      type: "FILTER",
      payload: { data: props.product, category: "macbook" },
    });
  };

  //Hàm hiện sản phẩm có category airpod khi click vào button tương ứng
  const showAirpodHandler = () => {
    navigate("/shop");

    //Hiện sản phẩm theo category
    dispatch({
      type: "FILTER",
      payload: { data: props.product, category: "airpod" },
    });
  };

  //Hàm hiện sản phẩm có category watch khi click vào button tương ứng
  const showWatchHandler = () => {
    navigate("/shop");

    //Hiện sản phẩm theo category
    dispatch({
      type: "FILTER",
      payload: { data: props.product, category: "watch" },
    });
  };

  return (
    <div className="wrap-collec">
      <div className="collection">
        <div className="text-collec">
          <p>CAREFULLY CREATED COLLECTION</p>
          <h5>BROWSE OUR CATEGORIES</h5>
        </div>
        <div className="list-1">
          <img
            onClick={showIphoneHandler}
            src="./images/product_1.png"
            alt="cell phone"
            width="48.5%"
          />
          <img
            onClick={showMacbookHandler}
            src="./images/product_2.png"
            alt="cell phone"
            width="48.5%"
          />
        </div>
        <div className="list-2">
          <img
            onClick={showIpadHandler}
            src="./images/product_3.png"
            alt="cell phone"
            width="32%"
          />
          <img
            onClick={showWatchHandler}
            src="./images/product_4.png"
            alt="cell phone"
            width="32%"
          />
          <img
            onClick={showAirpodHandler}
            src="./images/product_5.png"
            alt="cell phone"
            width="32%"
          />
        </div>
      </div>
    </div>
  );
};

export default Collection;
