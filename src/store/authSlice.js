import { createSlice } from "@reduxjs/toolkit";

const ADMIN_ACCOUNT = {
  fullName: "Admin User",
  email: "admin@boutique.com",
  password: "admin@123",
  phone: "0123456789",
  role: "admin",
};

const initialState = {
  user: JSON.parse(localStorage.getItem("userCurrent")) ?? null,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    registerStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    registerSuccess: (state) => {
      state.isLoading = false;
      state.error = null;
    },
    registerFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    loginStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      localStorage.setItem("userCurrent", JSON.stringify(action.payload));
      state.error = null;
    },
    loginFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.error = null;
      localStorage.removeItem("userCurrent");
      localStorage.removeItem("token");
    },
    updateUserProfile: (state, action) => {
      if (state.user) {
        state.user = {
          ...state.user,
          ...action.payload,
        };
        localStorage.setItem("userCurrent", JSON.stringify(state.user));
      }
    },
  },
});

export const login = (email, password) => (dispatch) => {
  dispatch(loginStart());

  setTimeout(() => {
    if (email === ADMIN_ACCOUNT.email && password === ADMIN_ACCOUNT.password) {
      dispatch(
        loginSuccess({
          fullName: ADMIN_ACCOUNT.fullName,
          email: ADMIN_ACCOUNT.email,
          phone: ADMIN_ACCOUNT.phone,
          role: "admin",
        }),
      );
      return;
    }

    const existingUsers = JSON.parse(localStorage.getItem("usersList")) || [];
    const matchedUser = existingUsers.find(
      (u) => u.email === email && u.password === password
    );

    if (matchedUser) {
      dispatch(
        loginSuccess({
          fullName: matchedUser.fullName,
          email: matchedUser.email,
          phone: matchedUser.phone,
          role: "user",
        }),
      );
    } else {
      dispatch(loginFail("Incorrect email address or password!"));
    }
  }, 500);
};

export const register = (formData) => (dispatch) => {
  dispatch(registerStart());

  if (!formData.fullName || !formData.email || !formData.password) {
    dispatch(registerFail("Please fill out all required fields."));
    return;
  }

  if (formData.password.length < 8) {
    dispatch(registerFail("Password must be at least 8 characters long."));
    return;
  }

  if (!formData.email.includes("@")) {
    dispatch(registerFail("Invalid email address."));
    return;
  }

  setTimeout(() => {
    const existingUsers = JSON.parse(localStorage.getItem("usersList")) || [];
    const userExists = existingUsers.some((u) => u.email === formData.email);
    if (userExists) {
      dispatch(registerFail("This email address is already registered!"));
      return;
    }
    const newUser = { ...formData, role: "user" };
    existingUsers.push(newUser);
    localStorage.setItem("usersList", JSON.stringify(existingUsers));
    dispatch(registerSuccess());
  }, 500);
};

export const {
  registerStart,
  registerSuccess,
  registerFail,
  loginStart,
  loginSuccess,
  loginFail,
  logout,
  updateUserProfile,
} = authSlice.actions;

export default authSlice.reducer;
