import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const Banner = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handlerToCollection = () => {
    navigate("/shop");
    dispatch({
      type: "ALL",
      payload: { data: props.product, category: "all" },
    });
  };

  return (
    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
      <div className="relative overflow-hidden rounded-3xl bg-slate-900 text-white shadow-xl min-h-[460px] sm:min-h-[520px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-right sm:bg-center opacity-30 mix-blend-luminosity scale-105"
          style={{ backgroundImage: "url(./images/banner1.jpg)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-transparent" />

        <div className="relative z-10 max-w-2xl px-8 sm:px-14 py-12">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-400 mb-4">
            NEW INSPIRATION 2026
          </p>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.1] text-white">
            The Next Gen Of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-200">
              Premium Devices
            </span>
          </h1>

          <p className="mt-4 text-slate-300 text-base sm:text-lg font-normal leading-relaxed max-w-lg">
            Discover authentic Apple devices & premium tech accessories with official warranty and best prices.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 items-center">
            <Button
              variant="primary"
              size="lg"
              onClick={handlerToCollection}
              className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-base px-8 py-3.5 rounded-2xl shadow-lg shadow-blue-600/30 gap-2"
            >
              Browse Collection <ArrowRight className="size-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
