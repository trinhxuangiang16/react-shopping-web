import { createStore } from "redux";
import { combineReducers } from "redux";

const toggleReducer = (state = { data: null }, action) => {
  if (action.type === "SHOW_POPUP") {
    return {
      ...state,
      data: action.data,
    };
  }

  if (action.type === "HIDE_POPUP") {
    return {
      ...state,
      data: null,
    };
  }

  return state;
};

const cartReducer = (
  state = {
    listItem: null,
    allItem: null,
    auth: JSON.parse(localStorage.getItem("userCurrent")) ?? null,
    cart: null,
    high: null,
    down: null,
  },
  action
) => {
  if (action.type === "FILTER") {
    return {
      ...state,
      listItem: action.payload.data.filter(
        (product) => product.category === action.payload.category
      ),
    };
  }

  if (action.type === "ALL") {
    return {
      ...state,
      listItem: action.payload,
    };
  }

  if (action.type === "ON_LOGIN") {
    localStorage.setItem("userCurrent", JSON.stringify(action.payload.current));
    return {
      auth: action.payload.current,
    };
  }

  if (action.type === "ON_LOGOUT") {
    localStorage.removeItem("userCurrent");
    localStorage.removeItem("token");
    return {
      auth: null,
    };
  }

  if (action.type === "ADD_CART") {
    const dataCart = JSON.parse(localStorage.getItem("cart")) ?? [];

    const findData = dataCart.find(
      (product) => product.data.id.$oid === action.payload.data.id.$oid
    );
    console.log(findData);

    if (findData) {
      findData.quantity = action.payload.quantity;
    }

    if (!findData) {
      dataCart.push(action.payload);
    }

    localStorage.setItem("cart", JSON.stringify(dataCart));

    return {
      ...state,
      cart: action.payload,
    };
  }

  return state;
};

const rootReducer = combineReducers({
  toggle: toggleReducer,
  cart: cartReducer,
});

const store = createStore(rootReducer);

export default store;
