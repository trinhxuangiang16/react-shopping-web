export const getAuthToken = () => {
  const token = localStorage.getItem("token");

  if (!token) {
    return null;
  }

  return token;
};

export const tokenLoader = () => {
  const token = getAuthToken();
  return token;
};
export const getAuthUserArr = () => {
  const userArr = localStorage.getItem("userArr");

  if (!userArr) {
    return null;
  }

  return userArr;
};

export const userArrLoader = () => {
  const userArr = getAuthUserArr();
  return userArr;
};

export const getAuthUserCurrent = () => {
  const userCurrent = localStorage.getItem("userCurrent");

  if (!userCurrent) {
    return null;
  }

  return userCurrent;
};

export const userCurrentLoader = () => {
  const userCurrent = getAuthUserCurrent();
  return userCurrent;
};

export const getCart = () => {
  const cart = localStorage.getItem("cart");

  if (!cart) {
    return null;
  }

  return cart;
};

export const cartLoader = () => {
  const cart = getCart();
  return cart;
};
