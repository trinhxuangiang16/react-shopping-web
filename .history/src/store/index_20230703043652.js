import { createStore } from "redux";
import { combineReducers } from "redux";
//import { action } from "../pages/HomePage";

const toggleReducer = (state = { data: null, chat: false }, action) => {
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

  if (action.type === "LIVE_CHAT") {
    return {
      chat: action.payload.toggle,
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
    console.log(dataCart);
    const filterData = dataCart.filter(
      (product) => product.data.id.$oid !== action.payload.data.id.$oid
    );
    console.log(filterData);

    localStorage.setItem("cart", JSON.stringify(filterData));

    const newCart = JSON.parse(localStorage.getItem("cart")) ?? [];

    const takeTotal = newCart.map((e) => e.data.price * e.quantity);
    console.log(takeTotal);
    if (takeTotal.length > 1) {
      const newTotal = takeTotal.reduce((num, index) => {
        return num + index;
      });
      localStorage.setItem("total", JSON.stringify(newTotal));
    }

    if (takeTotal.length === 1) {
      const newTotal = takeTotal[0];
      localStorage.setItem("total", JSON.stringify(newTotal));
    }

    if (takeTotal.length === 0) {
      const newTotal = 0;
      localStorage.setItem("total", JSON.stringify(newTotal));
    }

    const newTotal = JSON.parse(localStorage.getItem("total")) ?? [];
    return {
      ...state,
      listCart: action.payload,
      total: newTotal,
    };
  }

  return state;
};

const inboxReducer = (state = { data: null }, action) => {
  if (action.type === "SEND") {
    const inboxData = JSON.parse(localStorage.getItem("inboxData")) ?? [];

    inboxData.push(action.payload.data);

    localStorage.setItem("inboxData", JSON.stringify(inboxData));

    return {
      ...state,
      data: action.payload,
    };
  }

  if (action.type === "CLOSE") {
    localStorage.setItem("inboxData", JSON.stringify(null));
    return {
      ...state,
      data: null,
    };
  }
  return state;
};

const rootReducer = combineReducers({
  toggle: toggleReducer,
  cart: cartReducer,
  inbox: inboxReducer,
});

const store = createStore(rootReducer);

export default store;
