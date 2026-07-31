import { forwardRef } from "react";
import { cn } from "../../lib/cn";

const FormInput = forwardRef(
  ({ className, label, error, id, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label
            htmlFor={id}
            className="text-xs font-semibold uppercase tracking-wider text-slate-600"
          >
            {label}
          </label>
        )}
        <input
          id={id}
          ref={ref}
          className={cn(
            "h-11 rounded-xl border border-slate-300 bg-white px-4 text-[15px] text-slate-900 placeholder:text-slate-400 transition-all duration-200 focus-visible:outline-none focus-visible:border-blue-600 focus-visible:ring-2 focus-visible:ring-blue-500/20 disabled:opacity-50 disabled:bg-slate-50 disabled:cursor-not-allowed",
            className,
          )}
          {...props}
        />
        {error && <p className="text-xs text-red-500 font-medium mt-1">{error}</p>}
      </div>
    );
  },
);
FormInput.displayName = "FormInput";

export { FormInput };

