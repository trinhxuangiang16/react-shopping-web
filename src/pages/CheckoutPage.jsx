import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../store/cartSlice";
import { Button } from "../component/ui/button";
import { FormInput } from "../component/ui/FormInput";
import { formatPrice } from "../lib/formatPrice";
import { CreditCard, CheckCircle2, ShoppingBag, ShieldCheck, ArrowRight, X } from "lucide-react";
import { toast } from "react-hot-toast";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const dataRomCart = JSON.parse(localStorage.getItem("cart")) ?? [];
  const sum = JSON.parse(localStorage.getItem("total")) ?? 0;

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
  });

  useEffect(() => {
    if (user) {
      setFormData({
        fullName: user.fullName || "",
        email: user.email || "",
        phone: user.phone || "",
        address: user.address || "",
      });
    }
  }, [user]);

  const [error, setError] = useState("");
  const [showCardModal, setShowCardModal] = useState(false);
  const [pendingOrder, setPendingOrder] = useState(null);
  const [isConfirmingPayment, setIsConfirmingPayment] = useState(false);

  const [cardData, setCardData] = useState({
    number: "",
    name: "",
    expiry: "",
    cvv: "",
  });
  const [cardErrors, setCardErrors] = useState({});

  const handleCardNumberChange = (e) => {
    let val = e.target.value.replace(/\D/g, "");
    val = val.slice(0, 16);
    const formatted = val.replace(/(.{4})/g, "$1 ").trim();
    setCardData((prev) => ({ ...prev, number: formatted }));
    setCardErrors((prev) => ({ ...prev, number: "" }));
  };

  const handleCardExpiryChange = (e) => {
    let val = e.target.value.replace(/\D/g, "");
    val = val.slice(0, 4);
    let formatted = val;
    if (val.length > 2) {
      formatted = `${val.slice(0, 2)}/${val.slice(2)}`;
    }
    setCardData((prev) => ({ ...prev, expiry: formatted }));
    setCardErrors((prev) => ({ ...prev, expiry: "" }));
  };

  const handleCardCvvChange = (e) => {
    let val = e.target.value.replace(/\D/g, "");
    val = val.slice(0, 3);
    setCardData((prev) => ({ ...prev, cvv: val }));
    setCardErrors((prev) => ({ ...prev, cvv: "" }));
  };

  const handleCardNameChange = (e) => {
    setCardData((prev) => ({ ...prev, name: e.target.value }));
    setCardErrors((prev) => ({ ...prev, name: "" }));
  };

  const getCardType = (number) => {
    const cleanNumber = number.replace(/\s/g, "");
    if (cleanNumber.startsWith("4")) return "visa";
    if (cleanNumber.startsWith("5")) return "mastercard";
    return "unknown";
  };

  const validateCardForm = () => {
    const errors = {};
    const cleanNum = cardData.number.replace(/\s/g, "");

    if (!cleanNum) {
      errors.number = "Card number is required";
    } else if (cleanNum.length !== 16) {
      errors.number = "Card number must be 16 digits";
    } else if (!cleanNum.startsWith("4") && !cleanNum.startsWith("5")) {
      errors.number = "Visa (starts with 4) or Mastercard (starts with 5) accepted";
    }

    if (!cardData.name.trim()) {
      errors.name = "Cardholder name is required";
    }

    if (!cardData.expiry) {
      errors.expiry = "Expiry date is required";
    } else {
      const match = cardData.expiry.match(/^(0[1-9]|1[0-2])\/([0-9]{2})$/);
      if (!match) {
        errors.expiry = "Use MM/YY format";
      } else {
        const month = parseInt(match[1]);
        const year = parseInt("20" + match[2]);
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        const currentMonth = currentDate.getMonth() + 1;
        if (year < currentYear || (year === currentYear && month < currentMonth)) {
          errors.expiry = "Card has expired";
        }
      }
    }

    if (!cardData.cvv) {
      errors.cvv = "CVV is required";
    } else if (cardData.cvv.length !== 3) {
      errors.cvv = "CVV must be 3 digits";
    }

    setCardErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError("");
  };

  const validateForm = () => {
    if (!formData.fullName.trim()) {
      setError("Please enter your full name!");
      return false;
    }
    if (!formData.email.includes("@")) {
      setError("Please enter a valid email address!");
      return false;
    }
    if (!formData.phone.trim()) {
      setError("Please enter your phone number!");
      return false;
    }
    if (!formData.address.trim()) {
      setError("Please enter your delivery address!");
      return false;
    }
    if (dataRomCart.length === 0) {
      setError("Your cart is empty! Please add products before checking out.");
      return false;
    }
    return true;
  };

  const handleOpenCardPayment = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const orderId = `ORD-${Date.now().toString().slice(-6)}`;
    const newOrder = {
      orderId: orderId,
      customer: { ...formData },
      items: [...dataRomCart],
      total: sum,
      date: new Date().toLocaleString("en-US"),
      status: "Completed",
      paymentMethod: "Credit Card",
    };

    setPendingOrder(newOrder);
    setCardData({
      number: "",
      name: formData.fullName.toUpperCase(),
      expiry: "",
      cvv: "",
    });
    setCardErrors({});
    setShowCardModal(true);
  };

  const handleConfirmPaymentReceived = (e) => {
    e?.preventDefault();
    if (!pendingOrder) return;
    if (!validateCardForm()) return;

    setIsConfirmingPayment(true);

    setTimeout(() => {
      const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];
      existingOrders.push(pendingOrder);
      localStorage.setItem("orders", JSON.stringify(existingOrders));

      dispatch(clearCart());

      setIsConfirmingPayment(false);
      setShowCardModal(false);

      toast.success("Order placed and card payment processed successfully!");
      navigate("/orders");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 mb-6">
        <nav className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
          <span className="cursor-pointer hover:text-blue-600" onClick={() => navigate("/")}>
            Home
          </span>
          <span>/</span>
          <span className="cursor-pointer hover:text-blue-600" onClick={() => navigate("/cart")}>
            Cart
          </span>
          <span>/</span>
          <span className="text-slate-900 font-bold">Checkout</span>
        </nav>
        <h1 className="text-3xl font-extrabold text-slate-900">
          Checkout Order
        </h1>
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-8 items-start pb-20">
        <div className="flex-1 w-full rounded-none bg-white border border-slate-200 p-6 sm:p-8 shadow-xs">
          <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            Delivery & Billing Details
          </h2>

          {error && (
            <div className="p-3.5 mb-6 rounded-none bg-red-50 border border-red-200 text-xs font-semibold text-red-600 flex items-center gap-2">
              <span>⚠</span> {error}
            </div>
          )}

          <form className="flex flex-col gap-5" onSubmit={handleOpenCardPayment}>
            <FormInput
              label="FULL NAME:"
              name="fullName"
              placeholder="Enter your full name..."
              value={formData.fullName}
              onChange={handleChange}
              required
            />

            <FormInput
              label="EMAIL ADDRESS:"
              type="email"
              name="email"
              placeholder="example@domain.com"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <FormInput
              label="PHONE NUMBER:"
              type="tel"
              name="phone"
              placeholder="Enter phone number..."
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <FormInput
              label="DELIVERY ADDRESS:"
              name="address"
              placeholder="House No, Street, District, City..."
              value={formData.address}
              onChange={handleChange}
              required
            />

            <div className="p-4 rounded-none bg-blue-50/70 border border-blue-100 mt-2">
              <div className="flex items-start gap-3">
                <ShieldCheck className="size-5 text-blue-600 shrink-0 mt-0.5" />
                <p className="text-xs text-slate-600 leading-relaxed">
                  <strong className="text-slate-900 block font-semibold mb-0.5">Payment Method: Credit / Debit Card (Visa / Mastercard)</strong>
                  Pay securely using your credit or debit card. Simply enter your card details to complete payment.
                </p>
              </div>
            </div>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="mt-3 w-full text-base font-bold shadow-md gap-2 rounded-none"
            >
              <CreditCard className="size-5" /> Place Order & Pay with Card
            </Button>
          </form>
        </div>

        <div className="w-full lg:max-w-md rounded-none bg-white border border-slate-200 p-6 shadow-xs">
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-4 pb-3 border-b border-slate-100 flex items-center justify-between">
            <span>ORDER SUMMARY</span>
            <span className="text-blue-600 font-semibold">{dataRomCart.length} items</span>
          </h3>

          {dataRomCart.length > 0 ? (
            <>
              <div className="max-h-[380px] overflow-y-auto pr-1 space-y-3.5 divide-y divide-slate-100">
                {dataRomCart.map((product, index) => {
                  const item = product.data || product;
                  return (
                    <div key={index} className="pt-3.5 first:pt-0 flex items-center gap-3">
                      <div className="w-14 h-14 rounded-none border border-slate-200 p-1 bg-white shrink-0 flex items-center justify-center">
                        <img src={item.img1 || item.image} alt={item.name} className="max-h-full max-w-full object-contain" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs sm:text-sm font-semibold text-slate-800 truncate">{item.name}</p>
                        <p className="text-xs text-slate-500 mt-0.5">
                          {formatPrice(item.price)} <span className="text-slate-900 font-bold ml-1">x {product.quantity}</span>
                        </p>
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-slate-900">
                        {formatPrice(item.price * product.quantity)}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 space-y-2">
                <div className="flex justify-between text-xs text-slate-500">
                  <span>Subtotal</span>
                  <span>{formatPrice(sum)}</span>
                </div>
                <div className="flex justify-between text-xs text-slate-500">
                  <span>Shipping Fee</span>
                  <span className="text-emerald-600 font-medium">Free</span>
                </div>
                <div className="flex justify-between items-center pt-3 border-t border-slate-100">
                  <span className="text-sm font-bold text-slate-900">Total Amount</span>
                  <span className="text-2xl font-extrabold text-blue-600">{formatPrice(sum)}</span>
                </div>
              </div>
            </>
          ) : (
            <div className="text-center py-8">
              <ShoppingBag className="size-10 text-slate-300 mx-auto mb-2" />
              <p className="text-sm text-slate-500 mb-4">Your shopping cart is empty!</p>
              <Button variant="outline" size="sm" onClick={() => navigate("/shop")} className="rounded-none">
                Back to Shop
              </Button>
            </div>
          )}
        </div>
      </div>

      {showCardModal && pendingOrder && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4">
          <div className="w-full max-w-md rounded-none bg-white p-6 sm:p-8 shadow-2xl border border-slate-100 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-none bg-blue-50 text-blue-600">
                  <CreditCard className="size-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">Card Payment</h3>
                  <p className="text-xs text-slate-500">Order #{pendingOrder.orderId}</p>
                </div>
              </div>
              <button
                onClick={() => setShowCardModal(false)}
                className="p-1 rounded-none text-slate-400 hover:text-slate-600 hover:bg-slate-100"
              >
                <X className="size-5" />
              </button>
            </div>

            <div className="relative h-44 w-full rounded-2xl bg-gradient-to-br from-slate-905 via-indigo-950 to-slate-900 text-white p-6 shadow-lg overflow-hidden mb-6 flex flex-col justify-between font-mono tracking-widest border border-slate-800">
              <div className="absolute -right-10 -top-10 size-32 rounded-full bg-blue-500/10 blur-2xl"></div>
              <div className="absolute -left-10 -bottom-10 size-32 rounded-full bg-indigo-500/10 blur-2xl"></div>

              <div className="flex justify-between items-start relative z-10">
                <div className="w-10 h-7 rounded bg-gradient-to-tr from-amber-400 to-amber-200 border border-amber-300 flex flex-col justify-between p-1">
                  <div className="h-[1px] w-full bg-amber-500/30"></div>
                  <div className="flex justify-between">
                    <div className="w-[1px] h-3 bg-amber-500/30"></div>
                    <div className="w-[1px] h-3 bg-amber-500/30"></div>
                  </div>
                  <div className="h-[1px] w-full bg-amber-500/30"></div>
                </div>

                <div className="h-6 flex items-center">
                  {getCardType(cardData.number) === "visa" && (
                    <span className="text-xl font-black italic text-blue-400 tracking-normal text-right w-full block">VISA</span>
                  )}
                  {getCardType(cardData.number) === "mastercard" && (
                    <div className="flex items-center justify-end w-full">
                      <div className="size-6 rounded-full bg-red-500 opacity-90 -mr-2.5"></div>
                      <div className="size-6 rounded-full bg-amber-500 opacity-90"></div>
                    </div>
                  )}
                  {getCardType(cardData.number) === "unknown" && (
                    <CreditCard className="size-6 text-slate-400" />
                  )}
                </div>
              </div>

              <div className="text-lg text-slate-100 font-medium tracking-widest my-2 select-all relative z-10 text-center">
                {cardData.number || "•••• •••• •••• ••••"}
              </div>

              <div className="flex justify-between items-end relative z-10 text-[10px]">
                <div className="min-w-0 flex-1 pr-2">
                  <span className="text-slate-400 block text-[9px] uppercase tracking-wider mb-0.5">Card Holder</span>
                  <span className="font-semibold text-slate-200 uppercase tracking-widest text-xs truncate max-w-[200px] block">
                    {cardData.name || "CARDHOLDER NAME"}
                  </span>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-slate-400 block text-[9px] uppercase tracking-wider mb-0.5">Expires</span>
                  <span className="font-semibold text-slate-200 tracking-widest text-xs">
                    {cardData.expiry || "MM/YY"}
                  </span>
                </div>
              </div>
            </div>

            <form onSubmit={handleConfirmPaymentReceived} className="space-y-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Cardholder Name</label>
                <input
                  type="text"
                  placeholder="CARDHOLDER NAME"
                  value={cardData.name}
                  onChange={handleCardNameChange}
                  className="h-10 rounded-none border border-slate-200 bg-white px-3 text-sm text-slate-900 placeholder:text-slate-350 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-500/20 uppercase"
                />
                {cardErrors.name && <p className="text-[11px] text-red-500 font-semibold">{cardErrors.name}</p>}
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Card Number</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="4000 1234 5678 9010"
                    value={cardData.number}
                    onChange={handleCardNumberChange}
                    className="h-10 w-full rounded-none border border-slate-200 bg-white pl-3 pr-10 text-sm text-slate-900 placeholder:text-slate-350 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-500/20"
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center">
                    {getCardType(cardData.number) === "visa" && (
                      <span className="text-[10px] font-black italic text-blue-500">VISA</span>
                    )}
                    {getCardType(cardData.number) === "mastercard" && (
                      <span className="text-[10px] font-bold text-amber-500">MC</span>
                    )}
                  </div>
                </div>
                {cardErrors.number && <p className="text-[11px] text-red-500 font-semibold">{cardErrors.number}</p>}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Expiration Date</label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    value={cardData.expiry}
                    onChange={handleCardExpiryChange}
                    className="h-10 rounded-none border border-slate-200 bg-white px-3 text-sm text-slate-900 placeholder:text-slate-350 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-500/20"
                  />
                  {cardErrors.expiry && <p className="text-[11px] text-red-500 font-semibold">{cardErrors.expiry}</p>}
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500">CVV / CVC</label>
                  <input
                    type="password"
                    placeholder="123"
                    value={cardData.cvv}
                    onChange={handleCardCvvChange}
                    className="h-10 rounded-none border border-slate-200 bg-white px-3 text-sm text-slate-900 placeholder:text-slate-350 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-500/20"
                  />
                  {cardErrors.cvv && <p className="text-[11px] text-red-500 font-semibold">{cardErrors.cvv}</p>}
                </div>
              </div>

              <div className="pt-3 flex justify-between items-center text-xs font-semibold text-slate-500 mb-2 border-t border-slate-100">
                <span>Total Amount:</span>
                <span className="text-base font-extrabold text-blue-600">{formatPrice(pendingOrder.total)}</span>
              </div>

              <div className="space-y-3 pt-2">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={isConfirmingPayment}
                  className="w-full font-extrabold bg-blue-600 hover:bg-blue-700 text-white gap-2 shadow-sm rounded-none h-11 text-sm active:scale-[0.98]"
                >
                  {isConfirmingPayment ? (
                    "Processing Payment..."
                  ) : (
                    <>
                      <CheckCircle2 className="size-4 shrink-0" /> Pay {formatPrice(pendingOrder.total)} (Demo)
                    </>
                  )}
                </Button>

                <button
                  type="button"
                  onClick={() => setShowCardModal(false)}
                  className="w-full text-center text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors py-1"
                >
                  Cancel & Edit Info
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;

