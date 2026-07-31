import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { formatPrice } from "../lib/formatPrice";
import { Button } from "../component/ui/button";
import { Package, Search, Calendar, MapPin, Phone, Mail, User, CheckCircle2, ChevronRight, ShoppingBag } from "lucide-react";

const OrdersPage = () => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOrder, setSelectedOrder] = useState(null);

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(savedOrders.reverse());
  }, []);

  const filteredOrders = orders.filter((order) => {
    const query = searchTerm.toLowerCase();
    return (
      order.orderId?.toLowerCase().includes(query) ||
      order.customer?.fullName?.toLowerCase().includes(query) ||
      order.customer?.phone?.includes(query)
    );
  });

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <nav className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
              <span className="cursor-pointer hover:text-blue-600" onClick={() => navigate("/")}>
                Home
              </span>
              <span>/</span>
              <span className="text-slate-900 font-bold">Orders</span>
            </nav>
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 flex items-center gap-3">
              <Package className="size-8 text-blue-600" />
              Order Management
            </h1>
          </div>
          <Button variant="outline" onClick={() => navigate("/shop")} className="gap-2">
            <ShoppingBag className="size-4" /> Continue Shopping
          </Button>
        </div>

        {orders.length > 0 && (
          <div className="mb-6 relative max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search by Order ID, customer name or phone..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-none border border-slate-200 bg-white text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20 shadow-2xs"
            />
          </div>
        )}

        {filteredOrders.length === 0 ? (
          <div className="rounded-none border border-slate-200 bg-white p-12 text-center shadow-xs">
            <div className="mx-auto w-16 h-16 rounded-none bg-slate-100 flex items-center justify-center text-slate-400 mb-4">
              <Package className="size-8" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-1">
              {searchTerm ? "No matching orders found" : "No orders recorded yet"}
            </h3>
            <p className="text-slate-500 text-xs mb-6">
              {searchTerm
                ? "Please check your search keyword."
                : "You haven't placed any orders on Boutique yet. Explore our latest tech items!"}
            </p>
            <Button variant="primary" onClick={() => navigate("/shop")} className="rounded-none">
              Explore Products
            </Button>
          </div>
        ) : (
          <div className="space-y-6">
            {filteredOrders.map((order, idx) => (
              <div
                key={order.orderId || idx}
                className="rounded-none border border-slate-200 bg-white p-6 shadow-2xs hover:shadow-xs transition-shadow"
              >
                <div className="flex flex-wrap items-start justify-between pb-4 border-b border-slate-100 gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="font-mono text-base font-bold text-slate-900 tracking-tight">
                        {order.orderId}
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-none text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/80">
                        <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        {order.paymentMethod === "Credit Card" || order.paymentMethod === "VietQR Transfer" ? "PAID VIA CARD" : (order.status === "Completed" ? "PAID" : order.status)}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 font-medium">
                      Placed on <time className="text-slate-700 font-semibold">{order.date}</time>
                    </p>
                  </div>

                  <div className="text-right">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                      Total Amount
                    </span>
                    <span className="text-xl font-extrabold text-slate-900 tabular-nums">
                      {formatPrice(order.total || 0)}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-3.5 px-4 bg-slate-50/70 border border-slate-100 rounded-none my-4 text-xs">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">Customer</span>
                    <span className="font-semibold text-slate-900 block truncate">{order.customer?.fullName || "N/A"}</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">Contact Phone</span>
                    <span className="font-semibold text-slate-800 font-mono block">{order.customer?.phone || "N/A"}</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">Email</span>
                    <span className="font-semibold text-slate-800 block truncate">{order.customer?.email || "N/A"}</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">Delivery Address</span>
                    <span className="font-semibold text-slate-800 block truncate">{order.customer?.address || "N/A"}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-slate-400 px-1">
                    <span>Order Items ({order.items?.length || 0})</span>
                  </div>

                  <div className="border border-slate-200/80 rounded-none overflow-hidden divide-y divide-slate-100">
                    {order.items?.map((item, itemIdx) => {
                      const product = item.data || item;
                      return (
                        <div key={itemIdx} className="p-3 sm:p-4 flex items-center justify-between gap-4 bg-white hover:bg-slate-50/50 transition-colors">
                          <div className="flex items-center gap-3 min-w-0">
                            <div className="size-12 rounded-none bg-white border border-slate-200 p-1 flex items-center justify-center shrink-0">
                              <img
                                src={product.img1 || product.image}
                                alt={product.name}
                                className="max-h-full max-w-full object-contain"
                              />
                            </div>
                            <div className="min-w-0">
                              <h5 className="text-xs sm:text-sm font-semibold text-slate-900 truncate">
                                {product.name}
                              </h5>
                              <p className="text-xs text-slate-500 mt-0.5 font-medium">
                                Price: <span className="text-slate-700">{formatPrice(product.price)}</span> × <strong className="text-slate-900">{item.quantity}</strong>
                              </p>
                            </div>
                          </div>

                          <div className="text-right shrink-0">
                            <span className="text-xs sm:text-sm font-bold text-slate-900 tabular-nums">
                              {formatPrice((product.price || 0) * (item.quantity || 1))}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-slate-500 font-medium">
                    <span>Payment Method:</span>
                    <span className="font-mono font-semibold text-slate-800 bg-slate-100 px-2 py-0.5 rounded-none text-[11px]">
                      {order.paymentMethod === "Credit Card" || order.paymentMethod === "VietQR Transfer" ? "Credit / Debit Card" : (order.paymentMethod || "Credit / Debit Card")}
                    </span>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setSelectedOrder(order)}
                    className="gap-1 font-semibold text-xs text-slate-700 hover:text-blue-600 rounded-none"
                  >
                    View Details <ChevronRight className="size-3.5" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}

        {selectedOrder && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4">
            <div className="w-full max-w-lg rounded-none bg-white p-6 shadow-2xl border border-slate-200">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Order Statement</span>
                  <h3 className="text-lg font-extrabold text-slate-900 font-mono">
                    {selectedOrder.orderId}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedOrder(null)}
                  className="text-slate-400 hover:text-slate-600 font-bold text-lg p-1"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-4 text-xs text-slate-700">
                <div className="flex justify-between items-center py-2 border-b border-slate-100">
                  <span className="font-semibold text-slate-500">Payment Status</span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-none text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    {selectedOrder.paymentMethod === "Credit Card" || selectedOrder.paymentMethod === "VietQR Transfer" ? "Paid via Credit Card" : "Paid"}
                  </span>
                </div>
                <div className="space-y-1">
                  <span className="font-semibold text-slate-500 block">Customer Information</span>
                  <p className="font-bold text-slate-900 text-sm">{selectedOrder.customer?.fullName}</p>
                  <p className="text-slate-600 font-mono">{selectedOrder.customer?.phone} • {selectedOrder.customer?.email}</p>
                  <p className="text-slate-600">{selectedOrder.customer?.address}</p>
                </div>
                <div className="border-t border-slate-100 pt-3 flex justify-between items-center">
                  <span className="font-bold text-slate-900">Total Amount Paid</span>
                  <span className="text-xl font-extrabold text-blue-600 tabular-nums">{formatPrice(selectedOrder.total)}</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
                <Button variant="primary" onClick={() => setSelectedOrder(null)} className="rounded-none">
                  Close Statement
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrdersPage;
