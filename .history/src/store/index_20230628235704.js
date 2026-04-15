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
    listCart: null,
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

    const newCart = JSON.parse(localStorage.getItem("cart")) ?? [];

    const takeTotal = newCart.map((e) => e.data.price * e.quantity);
    console.log(takeTotal);
    const newTotal = takeTotal.reduce((num, index) => {
      return num + index;
    });
    localStorage.setItem("total", JSON.stringify(newTotal));
    return {
      ...state,
      listCart: action.payload,
      total: newTotal,
    };
  }

  if (action.type === "UPDATE_CART") {
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

    const newCart = JSON.parse(localStorage.getItem("cart")) ?? [];

    const takeTotal = newCart.map((e) => e.data.price * e.quantity);
    console.log(takeTotal);
    const newTotal = takeTotal.reduce((num, index) => {
      return num + index;
    });
    localStorage.setItem("total", JSON.stringify(newTotal));
    return {
      ...state,
      listCart: action.payload,
      total: newTotal,
    };
  }

  if (action.type === "DELETE_CART") {
    const dataCart = JSON.parse(localStorage.getItem("cart")) ?? [];

    const filterData = dataCart.filter(
      (product) => product.data.id.$oid !== action.payload.data.id.$oid
    );
    console.log(filterData);

    localStorage.setItem("cart", JSON.stringify(filterData));

    const newCart = JSON.parse(localStorage.getItem("cart")) ?? [];

    const takeTotal = newCart.map((e) => e.data.price * e.quantity);
    console.log(takeTotal);
    const newTotal = takeTotal.reduce((num, index) => {
      return num + index;
    });
    localStorage.setItem("total", JSON.stringify(newTotal));

    return {
      ...state,
      listCart: action.payload,
      total: newTotal,
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
