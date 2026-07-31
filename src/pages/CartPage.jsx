import { useDispatch } from "react-redux";
import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { updateCart, deleteCart, showAll } from "../store/cartSlice";
import { Button } from "../component/ui/button";
import { FormInput } from "../component/ui/FormInput";
import { formatPrice } from "../lib/formatPrice";
import { ShoppingBag, ArrowLeft, ArrowRight, Trash2, Minus, Plus, Tag } from "lucide-react";
import { toast } from "react-hot-toast";

const CartPage = () => {
  const products = useLoaderData();
  const dataCart = JSON.parse(localStorage.getItem("cart")) ?? [];
  const sum = JSON.parse(localStorage.getItem("total")) ?? 0;
  const [cartUpdate, setCartUpdate] = useState(dataCart);

  const updateHandler = () => {
    const update = JSON.parse(localStorage.getItem("cart")) ?? [];
    setCartUpdate(update);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const changeToShop = () => {
    navigate("/shop");
    dispatch(showAll({ data: products, category: "all" }));
  };

  const changToProceed = () => {
    navigate("/checkout");
  };

  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 mb-6">
        <nav className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
          <span className="cursor-pointer hover:text-blue-600" onClick={() => navigate("/")}>
            Home
          </span>
          <span>/</span>
          <span className="text-slate-900 font-bold">Cart</span>
        </nav>
        <h1 className="text-3xl font-extrabold text-slate-900">
          Shopping Cart
        </h1>
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-8 items-start pb-20">
        <div className="flex-1 w-full">
          {dataCart.length !== 0 ? (
            <div className="overflow-x-auto rounded-none bg-white border border-slate-200 shadow-xs">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-slate-100 bg-slate-50 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">
                    <th className="px-6 py-4">PRODUCT</th>
                    <th className="px-4 py-4">NAME</th>
                    <th className="px-4 py-4">PRICE</th>
                    <th className="px-4 py-4">QUANTITY</th>
                    <th className="px-4 py-4">TOTAL</th>
                    <th className="px-4 py-4 text-center">REMOVE</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {dataCart.map((product, index) => {
                    const item = product.data || product;
                    return (
                      <tr
                        className="text-sm text-slate-700 hover:bg-slate-50/60 transition-colors"
                        key={index}
                      >
                        <td className="px-6 py-4">
                          <div className="size-16 rounded-none bg-white border border-slate-200 p-1.5 flex items-center justify-center shrink-0">
                            <img
                              src={item.img1 || item.image}
                              alt={item.name}
                              className="max-h-full max-w-full object-contain"
                            />
                          </div>
                        </td>
                        <td className="px-4 py-4 font-semibold text-slate-900 max-w-[200px] truncate">
                          {item.name}
                        </td>
                        <td className="px-4 py-4 tabular-nums text-slate-600 font-medium">
                          {formatPrice(item.price)}
                        </td>
                        <td className="px-4 py-4">
                          <div className="inline-flex items-center rounded-none border border-slate-200 bg-white p-1">
                            <button
                              type="button"
                              onClick={() => {
                                const newQty = product.quantity > 1 ? product.quantity - 1 : 1;
                                dispatch(updateCart({ data: item, quantity: newQty }));
                                updateHandler();
                                toast.success("Quantity updated!");
                              }}
                              className="size-7 rounded-none flex items-center justify-center text-slate-500 hover:bg-slate-100"
                            >
                              <Minus className="size-3.5" />
                            </button>
                            <span className="w-8 text-center font-bold text-xs tabular-nums text-slate-900">
                              {product.quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() => {
                                dispatch(updateCart({ data: item, quantity: product.quantity + 1 }));
                                updateHandler();
                                toast.success("Quantity updated!");
                              }}
                              className="size-7 rounded-none flex items-center justify-center text-slate-500 hover:bg-slate-100"
                            >
                              <Plus className="size-3.5" />
                            </button>
                          </div>
                        </td>
                        <td className="px-4 py-4 tabular-nums font-bold text-blue-600">
                          {formatPrice(item.price * Number(product.quantity))}
                        </td>
                        <td className="px-4 py-4 text-center">
                          <button
                            type="button"
                            onClick={() => {
                              dispatch(deleteCart({ data: item, quantity: product.quantity }));
                              updateHandler();
                              toast.success("Product removed from cart!");
                            }}
                            className="p-2 rounded-none text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors"
                          >
                            <Trash2 className="size-4.5" />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="rounded-none border border-slate-200 bg-white p-12 text-center shadow-xs">
              <ShoppingBag className="size-12 text-slate-300 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-slate-900 mb-1">Your cart is currently empty!</h3>
              <p className="text-slate-500 text-xs mb-6">Explore our products and add them to your cart.</p>
              <Button variant="primary" onClick={changeToShop} className="font-bold gap-2 rounded-none">
                <ArrowLeft className="size-4" /> Browse Shop Now
              </Button>
            </div>
          )}

          {dataCart.length !== 0 && (
            <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
              <Button variant="outline" onClick={changeToShop} className="gap-2 font-semibold rounded-none">
                <ArrowLeft className="size-4" /> Continue Shopping
              </Button>
              <Button variant="primary" onClick={changToProceed} className="gap-2 font-bold shadow-md rounded-none">
                Proceed to Checkout <ArrowRight className="size-4" />
              </Button>
            </div>
          )}
        </div>

        {dataCart.length !== 0 && (
          <div className="w-full lg:max-w-md rounded-none bg-white border border-slate-200 p-6 shadow-xs">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-4 pb-3 border-b border-slate-100">
              ORDER SUMMARY
            </h3>

            <div className="space-y-3 pb-4 border-b border-slate-100 text-xs text-slate-600">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-semibold text-slate-900">{formatPrice(sum)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping Fee</span>
                <span className="font-semibold text-emerald-600">Free</span>
              </div>
            </div>

            <div className="py-4 border-b border-slate-100 flex justify-between items-center">
              <span className="text-sm font-bold text-slate-900">Total Amount</span>
              <span className="text-2xl font-extrabold text-blue-600">{formatPrice(sum)}</span>
            </div>

            <div className="mt-6 space-y-3">
              <label className="text-xs font-semibold uppercase text-slate-500 block">Discount Coupon</label>
              <div className="flex gap-2">
                <FormInput placeholder="Enter coupon code..." className="flex-1 text-xs rounded-none" />
                <Button
                  variant="outline"
                  onClick={() => toast.success("Coupon code applied successfully!")}
                  className="gap-1.5 shrink-0 rounded-none"
                >
                  <Tag className="size-4 text-blue-600" /> Apply
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default CartPage;

export async function loader() {
  const response = await fetch("/data_en.json");

  if (!response.ok) {
    throw json({ message: "Could not fetch product." }, { status: 500 });
  } else {
    const data = await response.json();
    console.log(data);

    const request = data.map((product) => {
      return {
        id: product._id,
        name: product.name,
        price: parseInt(product.price),
        category: product.category,
        shortDesc: product.short_desc,
        longDesc: product.long_desc,
        img1: product.img1,
        img2: product.img2,
        img3: product.img3,
        img4: product.img4,
      };
    });

    return request;
  }
}
