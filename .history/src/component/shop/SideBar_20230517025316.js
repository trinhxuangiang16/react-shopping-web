import { useDispatch, useSelector } from "react-redux";
import "./SideBar.css";

const SideBar = (props) => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.listItem);

  const showIphoneHandler = () => {
    dispatch({ type: "FILTER_IPHONE", payload: props.request });
  };

  const showIpodHandler = () => {
    dispatch({ type: "FILTER_IPOD", payload: props.request });
  };

  const showMacbookHandler = () => {
    dispatch({ type: "FILTER_MACBOOK", payload: props.request });
  };

  const showAirpodHandler = () => {
    dispatch({ type: "FILTER_AIRPOD", payload: props.request });
  };

  const showWatchHandler = () => {
    dispatch({ type: "FILTER_WATCH", payload: props.request });
  };

  const showMouseHandler = () => {
    dispatch({ type: "FILTER_MOUSE", payload: props.request });
  };

  const showKeyboardHandler = () => {
    dispatch({ type: "FILTER_KEYBOARD", payload: props.request });
  };
  return (
    <div className="side-shop">
      <h4>CATEGORIES</h4>
      <ul>
        <li className="brand">APPLE</li>
        <li className="type-product">ALL</li>
        <li className="title-product">IPHONE & MAC</li>
        <li className="type-product" onClick={showIphoneHandler}>
          Iphone
        </li>
        <li className="type-product" onClick={showIpodHandler}>
          Ipod
        </li>
        <li className="type-product">Macbook</li>
        <li className="title-product">WIRELESS</li>
        <li className="type-product">Airpod</li>
        <li className="type-product">Watch</li>
        <li className="title-product">OTHER</li>
        <li className="type-product">Mouse</li>
        <li className="type-product">Keyboard</li>
        <li className="type-product">Other</li>
      </ul>
    </div>
  );
};

export default SideBar;
