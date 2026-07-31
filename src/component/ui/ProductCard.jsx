import { cn } from "../../lib/cn";
import { formatPrice } from "../../lib/formatPrice";

const handleSpecular = (e) => {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  const mx = ((e.clientX - rect.left) / rect.width) * 100;
  const my = ((e.clientY - rect.top) / rect.height) * 100;
  el.style.setProperty("--mx", `${mx}%`);
  el.style.setProperty("--my", `${my}%`);
};

const ProductCard = ({ image, name, price, onClick, className, badge }) => {
  const getDynamicBadge = () => {
    if (price > 20000000) {
      return (
        <span className="text-[9px] font-bold uppercase tracking-widest bg-slate-900 text-amber-400 px-2.5 py-0.5 shadow-xs">
          Premium
        </span>
      );
    }
    if (price < 12000000) {
      return (
        <span className="text-[9px] font-bold uppercase tracking-widest bg-emerald-600 text-white px-2.5 py-0.5 shadow-xs">
          Best Value
        </span>
      );
    }
    return null;
  };

  return (
    <div
      onClick={onClick}
      onMouseMove={handleSpecular}
      className={cn(
        "group relative flex flex-col justify-between rounded-none border border-slate-200 bg-white p-3.5 sm:p-4 cursor-pointer h-full",
        "shadow-xs transition-all duration-300 hover:shadow-md hover:border-blue-400 hover:-translate-y-1",
        className,
      )}
    >
      <div className="relative aspect-square w-full rounded-none bg-slate-50 group-hover:bg-blue-50/30 transition-colors duration-300 overflow-hidden p-4 flex items-center justify-center">
        <div className="absolute top-2 left-2 z-10">
          {badge || getDynamicBadge()}
        </div>
        <img
          src={image}
          alt={name}
          className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="mt-3 flex flex-col flex-1 justify-between">
        <div>
          <h4 className="text-xs sm:text-sm font-medium text-slate-700 line-clamp-2 leading-snug group-hover:text-blue-600 transition-colors min-h-[40px] sm:min-h-[44px]">
            {name}
          </h4>
        </div>
        <div className="mt-2.5 flex items-center justify-between pt-2.5 border-t border-slate-100">
          <p className="text-sm sm:text-base font-extrabold tabular-nums text-slate-900 group-hover:text-blue-600 transition-colors">
            {formatPrice(price)}
          </p>
          <span className="text-[9px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 group-hover:bg-blue-600 group-hover:text-white px-2 py-1 transition-all duration-300">
            View
          </span>
        </div>
      </div>
    </div>
  );
};

export { ProductCard };

