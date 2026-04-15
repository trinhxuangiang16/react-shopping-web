import { useDispatch, useSelector } from "react-redux";
import "./SideBar.css";

const SideBar = (props) => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.listItem);
  console.log(count);

  const showAllHandler = () => {
    dispatch({ type: "ALL_PRODUCT", payload: props.data });
  };

  const showIphoneHandler = () => {
    dispatch({
      type: "FILTER",
      payload: { data: props.data, category: "iphone" },
    });
  };

  const showIpadHandler = () => {
    dispatch({ type: "FILTER", payload: props.data });
  };

  const showMacbookHandler = () => {
    dispatch({ type: "FILTER", payload: props.data });
  };

  const showAirpodHandler = () => {
    dispatch({ type: "FILTER", payload: props.data });
  };

  const showWatchHandler = () => {
    dispatch({ type: "FILTER", payload: props.data });
  };

  const showMouseHandler = () => {
    dispatch({ type: "FILTER", payload: props.data });
  };

  const showKeyboardHandler = () => {
    dispatch({ type: "FILTER", payload: props.data });
  };

  return (
    <div className="side-shop">
      <h4>CATEGORIES</h4>
      <ul>
        <li className="brand">APPLE</li>
        <li className="type-product" onClick={showAllHandler}>
          ALL
        </li>
        <li className="title-product">IPHONE & MAC</li>
        <li className="type-product" onClick={showIphoneHandler}>
          Iphone
        </li>
        <li className="type-product" onClick={showIpadHandler}>
          Ipad
        </li>
        <li className="type-product" onClick={showMacbookHandler}>
          Macbook
        </li>
        <li className="title-product">WIRELESS</li>
        <li className="type-product" onClick={showAirpodHandler}>
          Airpod
        </li>
        <li className="type-product" onClick={showWatchHandler}>
          Watch
        </li>
        <li className="title-product">OTHER</li>
        <li className="type-product" onClick={showMouseHandler}>
          Mouse
        </li>
        <li className="type-product" onClick={showKeyboardHandler}>
          Keyboard
        </li>
        <li className="type-product">Other</li>
      </ul>
    </div>
  );
};

export default SideBar;
