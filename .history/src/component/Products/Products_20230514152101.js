import { useState } from "react";
import MoreInfo from "./MoreInfo";
import "./Products.css";
//import Popup from "../modal/Popup";
import Wrapper from "../modal/Wrapper";
import Popup from "../modal/Popup";
import { useSelector, useDispatch } from "react-redux";

const Products = ({ product }) => {
  //const [isPopup, setIsPopup] = useState(false);
  console.log(product);
  const [popupData, setPopupData] = useState();

  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);

  const openPopupHandler = () => {
    dispatch({ type: "SHOW_POPUP" });
  };

  const deletePopuphandler = () => {
    dispatch({ type: "HIDE_POPUP" });
    setPopupData(null);
  };

  //const windowSize = useRef([window.innerWidth, window.innerHeight]);
  return (
    <Wrapper>
      {popupData && <Popup delete={deletePopuphandler} data={popupData} />}
      <div className="wrap-product">
        <div className="title-product">
          <p>MADE THE HARD WAY</p>
          <h5>TOP TRENDING PRODUCTS</h5>
        </div>
      </div>
      <div className="wrap-product">
        <div className="grid-container product">
          {product.request.map((pro, index) => (
            <div key={index.toString()} className="box-product">
              <img
                src={pro.img}
                alt="products"
                onClick={() => {
                  setPopupData(pro);
                }}
                style={{ width: "100%" }}
                className="img-product"
              />
              <h4>{pro.name}</h4>
              <p>{pro.price.toLocaleString()} VND</p>
            </div>
          ))}
        </div>
      </div>

      <MoreInfo />
    </Wrapper>
  );
};

export default Products;

//<Popup onConfirm={deletePopuphandler} popupData={popupData} />
