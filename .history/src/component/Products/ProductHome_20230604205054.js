// import { useState } from "react";
import MoreInfo from "./MoreInfo";
import "./Products.css";
//import Popup from "../modal/Popup";
//import Wrapper from "../modal/Wrapper";
import Popup from "../modal/Popup";
import { useSelector, useDispatch } from "react-redux";

const Products = (props) => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.toggle.data);
  console.log(count);

  const deletePopuphandler = () => {
    dispatch({ type: "HIDE_POPUP" });
  };

  //const windowSize = useRef([window.innerWidth, window.innerHeight]);
  return (
    <div>
      {count && <Popup delete={deletePopuphandler} data={count} />}
      <div className="wrap-product">
        <div className="title-product">
          <p>MADE THE HARD WAY</p>
          <h5>TOP TRENDING PRODUCTS</h5>
        </div>
      </div>
      <div className="wrap-product">
        <div className="grid-container product">
          {props.product.map((pro, index) => (
            <div key={index.toString()} className="box-product">
              <img
                src={pro.img}
                alt="products"
                onClick={() => {
                  dispatch({ type: "SHOW_POPUP", data: pro });
                  console.log(pro);
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
    </div>
  );
};

export default Products;

//<Popup onConfirm={deletePopuphandler} popupData={popupData} />
