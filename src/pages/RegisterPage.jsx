import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../store/authSlice";
import { Button } from "../component/ui/button";
import { FormInput } from "../component/ui/FormInput";
import { toast } from "react-hot-toast";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, error } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
  });

  const [localError, setLocalError] = useState("");
  const [success, setSuccess] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setLocalError("");
  };

  const validateForm = () => {
    if (!formData.fullName.trim()) {
      const msg = "Please enter your full name!";
      setLocalError(msg);
      toast.error(msg);
      return false;
    }

    if (!formData.email.includes("@")) {
      const msg = "Please enter a valid email address!";
      setLocalError(msg);
      toast.error(msg);
      return false;
    }

    if (formData.password.length < 8) {
      const msg = "Password must be at least 8 characters!";
      setLocalError(msg);
      toast.error(msg);
      return false;
    }

    if (!formData.phone.trim()) {
      const msg = "Please enter your phone number!";
      setLocalError(msg);
      toast.error(msg);
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitted(true);
    dispatch(register(formData));
  };

  useEffect(() => {
    if (error) {
      setLocalError(error);
      toast.error(error);
      setIsSubmitted(false);
    }
  }, [error]);

  useEffect(() => {
    if (isSubmitted && !isLoading && !error) {
      setSuccess(true);
      setTimeout(() => {
        toast.success("Registration successful! Please sign in.");
        navigate("/login");
      }, 500);
    }
  }, [isLoading, error, isSubmitted, navigate]);

  return (
    <div className="min-h-[85vh] flex items-center justify-center py-12 px-4 bg-slate-50">
      <div className="w-full max-w-md">
        <form
          onSubmit={handleSubmit}
          className="rounded-3xl bg-white border border-slate-200 p-8 shadow-sm flex flex-col gap-4"
        >
          <div className="mb-2">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600 mb-1">
              CREATE NEW ACCOUNT
            </p>
            <h2 className="text-3xl font-extrabold text-slate-900">
              Sign Up
            </h2>
          </div>

          {localError && (
            <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs font-semibold text-red-600">
              ⚠ {localError}
            </div>
          )}
          {success && (
            <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-600">
              ✓ Registration successful!
            </div>
          )}

          <FormInput
            label="FULL NAME"
            type="text"
            name="fullName"
            required
            value={formData.fullName}
            onChange={handleChange}
            disabled={isLoading}
            placeholder="Enter your full name..."
          />

          <FormInput
            label="EMAIL ADDRESS"
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            disabled={isLoading}
            placeholder="example@domain.com"
          />

          <FormInput
            label="PASSWORD"
            type="password"
            name="password"
            required
            value={formData.password}
            onChange={handleChange}
            disabled={isLoading}
            placeholder="Min. 8 characters..."
          />

          <FormInput
            label="PHONE NUMBER"
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            disabled={isLoading}
            placeholder="Enter phone number..."
          />

          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full mt-2 font-bold shadow-md"
            disabled={isLoading}
          >
            {isLoading ? "REGISTERING..." : "SIGN UP NOW"}
          </Button>

          <div className="text-center pt-3 border-t border-slate-100">
            <p className="text-xs text-slate-500">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-blue-600 font-semibold hover:underline"
              >
                Sign in here
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
export default RegisterPage;

