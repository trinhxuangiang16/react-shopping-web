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
    auth: null,
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

  if (action.type === "ON_LOGOUT") {
    return {
      login: true,
    };
  }

  if (action.type === "ON_LOGOUT") {
    return {
      logout: false,
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
