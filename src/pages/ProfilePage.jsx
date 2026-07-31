import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateUserProfile } from "../store/authSlice";
import { Button } from "../component/ui/button";
import { FormInput } from "../component/ui/FormInput";
import { toast } from "react-hot-toast";

const ProfilePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
  });

  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }
    setFormData({
      fullName: user.fullName || "",
      email: user.email || "",
      phone: user.phone || "",
      address: user.address || "",
    });
  }, [user, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.email.trim()) {
      toast.error("Full Name and Email address are required!");
      return;
    }

    setIsSaving(true);
    setTimeout(() => {
      dispatch(updateUserProfile(formData));
      setIsSaving(false);
      toast.success("Profile updated successfully!");
    }, 600);
  };

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 mb-6">
        <nav className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
          <span className="cursor-pointer hover:text-blue-600" onClick={() => navigate("/")}>
            Home
          </span>
          <span>/</span>
          <span className="text-slate-900 font-bold">Profile</span>
        </nav>
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        <div className="flex flex-col md:flex-row gap-8 items-start">

          <div className="w-full md:w-80 bg-white border border-slate-200 p-6 shadow-xs rounded-none text-center">
            <div className="size-20 bg-slate-100 mx-auto flex items-center justify-center border border-slate-200 text-slate-400 rounded-none mb-4">
              <svg className="size-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>

            <h3 className="text-base font-bold text-slate-950 truncate mb-1">
              {user.fullName}
            </h3>
            <p className="text-xs text-slate-400 font-medium font-mono mb-4">
              {user.email}
            </p>

            <div className="border-t border-slate-100 pt-4 text-left text-xs space-y-2 text-slate-600">
              <p>
                <strong className="text-slate-950 font-bold block mb-0.5 uppercase tracking-wider text-[10px]">Primary Phone:</strong>
                {user.phone || "No phone added"}
              </p>
              <p>
                <strong className="text-slate-950 font-bold block mb-0.5 uppercase tracking-wider text-[10px]">Delivery Address:</strong>
                {user.address || "No address added"}
              </p>
            </div>
          </div>

          <div className="flex-1 w-full bg-white border border-slate-200 p-6 sm:p-8 shadow-xs rounded-none">
            <h2 className="text-xl font-bold text-slate-900 mb-6">
              Personal Information Settings
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <FormInput
                label="FULL NAME:"
                name="fullName"
                placeholder="Enter your full name..."
                value={formData.fullName}
                onChange={handleChange}
                required
                className="rounded-none"
              />

              <FormInput
                label="EMAIL ADDRESS:"
                type="email"
                name="email"
                placeholder="example@domain.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="rounded-none"
              />

              <FormInput
                label="PHONE NUMBER:"
                type="tel"
                name="phone"
                placeholder="Enter phone number..."
                value={formData.phone}
                onChange={handleChange}
                className="rounded-none"
              />

              <FormInput
                label="DEFAULT DELIVERY ADDRESS:"
                name="address"
                placeholder="House No, Street, District, City..."
                value={formData.address}
                onChange={handleChange}
                className="rounded-none"
              />

              <div className="pt-4 border-t border-slate-100 flex justify-end">
                <Button
                  type="submit"
                  variant="primary"
                  disabled={isSaving}
                  className="px-6 font-bold shadow-md rounded-none gap-2 h-11"
                >
                  {isSaving ? "Saving details..." : "Save Changes"}
                </Button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
