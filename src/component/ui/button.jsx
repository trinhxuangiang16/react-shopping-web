import { forwardRef } from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-xl text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 active:scale-[0.98] disabled:pointer-events-none disabled:bg-slate-100 disabled:text-slate-400 disabled:shadow-none cursor-pointer",
  {
    variants: {
      variant: {
        primary: "bg-blue-600 text-white shadow-sm hover:bg-blue-700 active:scale-[0.98]",
        gradient: "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-sm hover:brightness-110 active:scale-[0.98]",
        hero: "border border-slate-300 bg-white/90 backdrop-blur-sm text-slate-900 font-bold hover:bg-white hover:shadow-md",
        outline: "border border-slate-300 bg-white text-slate-700 font-medium hover:bg-slate-50 hover:text-slate-900 shadow-2xs",
        ghost: "text-slate-600 hover:bg-slate-100 hover:text-slate-900",
        soft: "bg-blue-50 text-blue-700 hover:bg-blue-100 font-medium",
        danger: "bg-red-600 text-white hover:bg-red-700",
        sale: "bg-rose-500 text-white hover:bg-rose-600",
        link: "text-blue-600 underline-offset-4 hover:underline p-0 h-auto",
      },
      size: {
        sm: "h-9 px-3.5 text-xs rounded-lg",
        md: "h-11 px-5 text-sm rounded-xl",
        lg: "h-12 px-7 text-base rounded-xl",
        icon: "size-10 rounded-full p-0",
        "icon-sm": "size-8 rounded-full p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

const Button = forwardRef(
  ({ className, variant, size, type = "button", ...props }, ref) => {
    return (
      <button
        type={type}
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };

