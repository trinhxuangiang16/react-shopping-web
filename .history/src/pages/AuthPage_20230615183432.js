import { Form, Link, json, redirect, useSearchParams } from "react-router-dom";
import "./AuthPage.css";

const AuthPage = () => {
  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") === "login";
  return (
    <div className="wrap-login">
      <div
        className="login-page"
        style={{ backgroundImage: "url(./images/banner1.jpg)" }}
      >
        <div className="wrap-form">
          <Form method="post" className="form-login">
            <h2>{isLogin ? "Sign In" : "Sign Up"}</h2>
            {isLogin ? (
              ""
            ) : (
              <div className="wrap-row full-name">
                <label>Full Name</label>
                <input type="text" name="fullName" required></input>
              </div>
            )}
            <div className="wrap-row email">
              <label>Email</label>
              <input type="email" name="email" required></input>
            </div>
            <div className="wrap-row password">
              <label>Password</label>
              <input type="password" name="password" required></input>
            </div>
            {isLogin ? (
              ""
            ) : (
              <div className="wrap-row phone">
                <label>Phone</label>
                <input type="number" name="phone" required></input>
              </div>
            )}
            <div className="btn-signup">
              <button>{isLogin ? "SIGN IN" : "SIGN UP"}</button>
            </div>
            <div className="btn-toggle">
              <p>
                {isLogin ? "Create an account" : "Login"}?
                <Link to={`?mode=${isLogin ? "signup" : "login"}`}>
                  {isLogin ? " Sign up" : " Click"}
                </Link>
              </p>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};
export default AuthPage;

export const action = async ({ request }) => {
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get("mode") || "login";

  if (mode !== "login" && mode !== "signup") {
    throw json({ message: "Unsupported mode" }, { status: 422 });
  }

  const data = await request.formData();
  const authData = {
    fullName: data.get("fullName"),
    email: data.get("email"),
    password: data.get("password"),
    phone: data.get("phone"),
    returnSecureToken: true,
  };

  //SIGN UP
  if (mode === "signup") {
    const userArr = JSON.parse(localStorage.getItem("userArr"));
    const validateHandler = () => {
      if (authData.fullName.trim().length === 0) {
        alert("Vui lòng điền Họ và tên đầy đủ!");
        return false;
      }

      if (!authData.email.includes("@")) {
        alert("Vui lòng điền email hợp lệ!");
      }
      if (userArr) {
        console.log(userArr);
        const userLogin = userArr.find((user) => user.email === authData.email);

        if (userLogin) {
          console.log(userLogin);
          alert("Email đã đăng ký!");
          return false;
        }
      }

      if (authData.password.length < 8) {
        alert("Vui lòng điền mật khẩu dài hơn 8 ký tự!");
        return false;
      }
      return true;
    };

    const isPassData = validateHandler();
    console.log(isPassData);

    if (!isPassData) {
      return null;
    }
    console.log(userArr);

    userArr.push(authData);
    localStorage.setItem("userArr", JSON.stringify(userArr));

    //Lay du lieu tu local
    //localStorage.setItem("userArr", JSON.stringify(userArr));
    // console.log(userData);
    // console.log(userData);

    //Kiem tra xem co bi trung tai khoan email
    // const userLogin = userData.find((user) => user.email === authData.email);
    // console.log(userLogin);

    // const saveToLocalstorage = [userData, authData];
    // localStorage.setItem("userArr", JSON.stringify(saveToLocalstorage));
    // if (userData.length === 1) {
    //   localStorage.setItem("userArr", JSON.stringify(userArr));
    // }

    // if (userData.length > 1) {
    //   const checkEmail = () => {
    //     const userLogin = userData.find(
    //       (user) => user.email === authData.email
    //     );
    //     if (userLogin) {
    //       alert("Vui lòng điền email mới");
    //       return false;
    //     }
    //     return true;
    //   };

    //   const isPassCheck = checkEmail();
    //   console.log(isPassCheck);
    //   if (!isPassCheck) {
    //     return null;
    //   }

    //   const saveToLocalstorage = [...userData, authData];
    //   localStorage.setItem("userArr", JSON.stringify(saveToLocalstorage));
    // }

    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCBc9d8QNkXKPnFa8UrTEVFFbCiGDwGcAM",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(authData),
      }
    );

    if (response.status === 422 || request.status === 401) {
      return response;
    }

    if (!response.ok) {
      throw json({ message: "Could not authenticate user." }, { status: 500 });
    }
    console.log(authData);

    const resData = await response.json();
    const token = resData.idToken;
    localStorage.setItem("token", token);

    return redirect("/auth?mode=login");
  }

  //LOGIN
  if (mode === "login") {
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCBc9d8QNkXKPnFa8UrTEVFFbCiGDwGcAM",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(authData),
      }
    );

    if (response.status === 422 || request.status === 401) {
      return response;
    }

    if (!response.ok) {
      throw json({ message: "Could not authenticate user." }, { status: 500 });
    }
    console.log(authData);

    const resData = await response.json();
    const token = resData.idToken;
    localStorage.setItem("token", token);
    console.log(resData);
    return redirect("/");
  }
};
