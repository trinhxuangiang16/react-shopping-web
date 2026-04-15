import { Form, Link, json, useSearchParams } from "react-router-dom";
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
            <h2>{isLogin ? "Login" : "Sign Up"}</h2>
            <div className="wrap-row full-name">
              <label>Full Name</label>
              <input type="text" name="fullName" required></input>
            </div>
            <div className="wrap-row email">
              <label>Email</label>
              <input type="email" name="email" required></input>
            </div>
            <div className="wrap-row password">
              <label>Password</label>
              <input type="password" name="password" required></input>
            </div>
            <div className="wrap-row phone">
              <label>Phone</label>
              <input type="number" name="phone" required></input>
            </div>
            <div className="btn-signup">
              <button>{isLogin ? "LOGIN" : "SIGN UP"}</button>
            </div>
            <div className="btn-toggle">
              <p>
                {isLogin ? "Sign Up" : "Login"}?
                <Link to={`?mode=${isLogin ? "signup" : "login"}`}>Click</Link>
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

  if (mode === "signup") {
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
  }
};
