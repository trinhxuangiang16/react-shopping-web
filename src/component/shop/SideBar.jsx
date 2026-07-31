import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { filterCategory, showAll } from "../../store/cartSlice";
import { cn } from "../../lib/cn";

const SideBar = (props) => {
  const dispatch = useDispatch();

  const dataFilter = JSON.parse(localStorage.getItem("array")) ?? [];
  const storeCategory = useSelector((state) => state.cart.category);

  const showAllHandler = () => {
    dispatch(showAll({ data: dataFilter, category: "all" }));
  };

  useEffect(() => {
    if (!storeCategory) {
      showAllHandler();
    }
  }, []);

  const showIphoneHandler = () => {
    dispatch(filterCategory({ data: props.data, category: "iphone" }));
  };

  const showIpadHandler = () => {
    dispatch(filterCategory({ data: props.data, category: "ipad" }));
  };

  const showMacbookHandler = () => {
    dispatch(filterCategory({ data: props.data, category: "macbook" }));
  };

  const showAirpodHandler = () => {
    dispatch(filterCategory({ data: props.data, category: "airpod" }));
  };

  const showWatchHandler = () => {
    dispatch(filterCategory({ data: props.data, category: "watch" }));
  };

  const showMouseHandler = () => {
    dispatch(filterCategory({ data: props.data, category: "mouse" }));
  };

  const showKeyboardHandler = () => {
    dispatch(filterCategory({ data: props.data, category: "keyboard" }));
  };

  const showOtherHandler = () => {
    dispatch(filterCategory({ data: props.data, category: "other" }));
  };

  const itemBtnClass = (active) =>
    cn(
      "w-full text-left justify-start flex items-center rounded-none px-4 py-1.5 text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer border",
      active
        ? "bg-blue-600 border-blue-600 text-white shadow-xs"
        : "bg-transparent border-transparent text-slate-700 hover:bg-slate-50 hover:text-blue-600",
    );

  const groupHeaderClass = "text-[10px] font-bold uppercase tracking-wider text-slate-400 mt-4 mb-1.5 px-4 text-left block first:mt-0";

  return (
    <div className="w-full lg:w-64 lg:shrink-0 self-start rounded-none bg-white border border-slate-200 p-4 sm:p-5 shadow-xs text-left">
      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3 pb-2.5 border-b border-slate-100 text-left">
        CATEGORIES
      </h4>
      
      <div className="flex flex-col gap-0.5 text-left">
        <button onClick={showAllHandler} className={itemBtnClass(storeCategory === "all")}>
          ALL PRODUCTS
        </button>

        <span className={groupHeaderClass}>MAIN DEVICES</span>
        <button onClick={showIphoneHandler} className={itemBtnClass(storeCategory === "iphone")}>
          IPHONE
        </button>
        <button onClick={showIpadHandler} className={itemBtnClass(storeCategory === "ipad")}>
          IPAD
        </button>
        <button onClick={showMacbookHandler} className={itemBtnClass(storeCategory === "macbook")}>
          MACBOOK / MAC
        </button>

        <span className={groupHeaderClass}>AUDIO & WEARABLES</span>
        <button onClick={showAirpodHandler} className={itemBtnClass(storeCategory === "airpod")}>
          AIRPODS
        </button>
        <button onClick={showWatchHandler} className={itemBtnClass(storeCategory === "watch")}>
          APPLE WATCH
        </button>

        <span className={groupHeaderClass}>ACCESSORIES</span>
        <button onClick={showMouseHandler} className={itemBtnClass(storeCategory === "mouse")}>
          MOUSE
        </button>
        <button onClick={showKeyboardHandler} className={itemBtnClass(storeCategory === "keyboard")}>
          KEYBOARD
        </button>
        <button onClick={showOtherHandler} className={itemBtnClass(storeCategory === "other")}>
          OTHER
        </button>
      </div>
    </div>
  );
};
export default SideBar;

