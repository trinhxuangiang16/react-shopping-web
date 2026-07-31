import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useRef, useEffect } from "react";
import { login } from "../store/authSlice";
import { Button } from "../component/ui/button";
import { FormInput } from "../component/ui/FormInput";

import { toast } from "react-hot-toast";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading, error } = useSelector((state) => state.auth);

  const emailRef = useRef();
  const passwordRef = useRef();

  useEffect(() => {
    if (user) {
      toast.success(`Welcome back, ${user.fullName || "User"}!`);
      navigate("/");
    }
  }, [user, navigate]);

  const submitForm = (e) => {
    e.preventDefault();
    if (!emailRef.current.value || !passwordRef.current.value) {
      toast.error("Please enter both email address and password!");
      return;
    }
    dispatch(login(emailRef.current.value, passwordRef.current.value));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  return (
    <div className="min-h-[85vh] flex items-center justify-center py-12 px-4 bg-slate-50">
      <div className="w-full max-w-md">
        <form
          onSubmit={submitForm}
          className="rounded-3xl bg-white border border-slate-200 p-8 shadow-sm flex flex-col gap-4"
        >
          <div className="mb-2">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600 mb-1">
              ACCOUNT SIGN IN
            </p>
            <h2 className="text-3xl font-extrabold text-slate-900">
              Sign In
            </h2>
          </div>

          <FormInput
            label="EMAIL ADDRESS"
            type="email"
            name="email"
            required
            ref={emailRef}
            placeholder="admin@boutique.com"
            disabled={isLoading}
          />

          <FormInput
            label="PASSWORD"
            type="password"
            name="password"
            required
            ref={passwordRef}
            placeholder="••••••••"
            disabled={isLoading}
          />

          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full mt-2 font-bold shadow-md"
            disabled={isLoading}
          >
            {isLoading ? "SIGNING IN..." : "SIGN IN NOW"}
          </Button>

          <div className="text-center pt-3 border-t border-slate-100">
            <p className="text-xs text-slate-500 leading-relaxed">
              Demo Admin Credentials: <strong className="text-slate-800 font-mono">admin@boutique.com / admin@123</strong>
              <br />
              <Link
                to="/register"
                className="text-blue-600 font-semibold hover:underline mt-2 inline-block"
              >
                Don't have an account? Sign Up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

