import { Fragment } from "react";
import { Truck, Headset, Gift, Send } from "lucide-react";
import { toast } from "react-hot-toast";
import { FormInput } from "../ui/FormInput";
import { Button } from "../ui/button";

const MoreInfo = () => {
  return (
    <Fragment>
      <div className="bg-white border-y border-slate-200 py-12">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:divide-x md:divide-slate-200">
            <div className="flex items-center gap-4 px-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <Truck className="size-6" />
              </div>
              <div>
                <h5 className="text-base font-bold text-slate-900 mb-0.5">
                  FREE SHIPPING
                </h5>
                <p className="text-xs text-slate-500">
                  Free express shipping nationwide on all orders over $50
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 px-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <Headset className="size-6" />
              </div>
              <div>
                <h5 className="text-base font-bold text-slate-900 mb-0.5">
                  24/7 SUPPORT
                </h5>
                <p className="text-xs text-slate-500">
                  Dedicated technical support team available around the clock
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 px-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <Gift className="size-6" />
              </div>
              <div>
                <h5 className="text-base font-bold text-slate-900 mb-0.5">
                  EXCLUSIVE OFFERS
                </h5>
                <p className="text-xs text-slate-500">
                  Special discount vouchers & gifts with tech accessories
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-50 py-12 sm:py-16">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-xl">
              <p className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-2">STAY IN THE LOOP</p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Subscribe to Weekly Offers
              </h2>
              <p className="text-slate-300 text-sm mt-2">
                Subscribe with your email to receive exclusive deals and new product releases from Boutique.
              </p>
            </div>
            <div className="w-full md:w-auto flex-1 max-w-md">
              <form onSubmit={(e) => { e.preventDefault(); toast.success("Thank you for subscribing to Boutique newsletter!"); }} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email address..."
                  className="h-12 rounded-xl bg-slate-800 border border-slate-700 px-4 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:border-blue-500 flex-1"
                  required
                />
                <Button variant="primary" type="submit" className="h-12 rounded-xl px-6 bg-blue-600 hover:bg-blue-500 text-white font-bold gap-2">
                  Subscribe <Send className="size-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MoreInfo;
