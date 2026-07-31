import { createSlice } from "@reduxjs/toolkit";

const ADMIN_ACCOUNT = {
  fullName: "Admin User",
  email: "admin@boutique.com",
  password: "admin@123",
  phone: "0123456789",
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
      dispatch(loginFail("Email hoặc mật khẩu không chính xác!"));
    }
  }, 500);
};

export const register = (formData) => (dispatch) => {
  dispatch(registerStart());

  if (!formData.fullName || !formData.email || !formData.password) {
    dispatch(registerFail("Vui lòng điền đầy đủ thông tin"));
    return;
  }

  if (formData.password.length < 8) {
    dispatch(registerFail("Mật khẩu phải ít nhất 8 ký tự"));
    return;
  }

  if (!formData.email.includes("@")) {
    dispatch(registerFail("Email không hợp lệ"));
    return;
  }

  setTimeout(() => {
    const existingUsers = JSON.parse(localStorage.getItem("usersList")) || [];
    const userExists = existingUsers.some((u) => u.email === formData.email);
    if (userExists) {
      dispatch(registerFail("Email đã được đăng ký!"));
      return;
    }
    existingUsers.push(formData);
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
