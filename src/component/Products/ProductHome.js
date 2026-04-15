import MoreInfo from "./MoreInfo";
import "./ProductHome.css";
import Popup from "../modal/Popup";
import { useSelector, useDispatch } from "react-redux";
import { showPopup, hidePopup } from "../../store/toggleSlice";

const Products = (props) => {
  const dispatch = useDispatch();
  const listOne = useSelector((state) => state.toggle.data);

  const deletePopuphandler = () => {
    dispatch(hidePopup());
  };

  return (
    <div>
      {listOne && <Popup delete={deletePopuphandler} data={listOne} />}
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
                src={pro.img1}
                alt="products"
                onClick={() => {
                  dispatch(showPopup(pro));
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
