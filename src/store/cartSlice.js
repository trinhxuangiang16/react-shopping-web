import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listItem: [],
  allItem: [],
  listCart: [],
  category: "",
  total: JSON.parse(localStorage.getItem("total")) ?? 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    filterCategory: (state, action) => {
      localStorage.setItem("array", JSON.stringify(action.payload.data));
      state.listItem = action.payload.data.filter(
        (product) => product.category === action.payload.category,
      );
      state.category = action.payload.category;
    },
    showAll: (state, action) => {
      localStorage.setItem("array", JSON.stringify(action.payload.data));
      state.listItem = action.payload.data;
      state.category = action.payload.category;
    },
    addCart: (state, action) => {
      const dataCart = JSON.parse(localStorage.getItem("cart")) ?? [];
      const findData = dataCart.find(
        (product) => product.data.id.$oid === action.payload.data.id.$oid,
      );

      if (findData) {
        findData.quantity += action.payload.quantity;
      } else {
        dataCart.push(action.payload);
      }

      localStorage.setItem("cart", JSON.stringify(dataCart));
      const newCart = JSON.parse(localStorage.getItem("cart"));
      const newTotal = newCart.reduce(
        (sum, item) => sum + item.data.price * item.quantity,
        0,
      );
      localStorage.setItem("total", JSON.stringify(newTotal));

      state.listCart = newCart;
      state.total = newTotal;
    },
    updateCart: (state, action) => {
      const dataCart = JSON.parse(localStorage.getItem("cart")) ?? [];
      const findData = dataCart.find(
        (product) => product.data.id.$oid === action.payload.data.id.$oid,
      );

      if (findData) {
        findData.quantity = action.payload.quantity;
      }

      localStorage.setItem("cart", JSON.stringify(dataCart));
      const newCart = JSON.parse(localStorage.getItem("cart"));
      const newTotal = newCart.reduce(
        (sum, item) => sum + item.data.price * item.quantity,
        0,
      );
      localStorage.setItem("total", JSON.stringify(newTotal));

      state.listCart = newCart;
      state.total = newTotal;
    },
    deleteCart: (state, action) => {
      const dataCart = JSON.parse(localStorage.getItem("cart")) ?? [];
      const filterData = dataCart.filter(
        (product) => product.data.id.$oid !== action.payload.data.id.$oid,
      );

      localStorage.setItem("cart", JSON.stringify(filterData));
      const newTotal =
        filterData.length > 0
          ? filterData.reduce(
              (sum, item) => sum + item.data.price * item.quantity,
              0,
            )
          : 0;
      localStorage.setItem("total", JSON.stringify(newTotal));

      state.listCart = filterData;
      state.total = newTotal;
    },
  },
});

export const { filterCategory, showAll, addCart, updateCart, deleteCart } =
  cartSlice.actions;
export default cartSlice.reducer;
