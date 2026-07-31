import { cva } from "class-variance-authority";
import { cn } from "../../lib/cn";

const badgeVariants = cva(
  "inline-flex items-center rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.15em]",
  {
    variants: {
      variant: {
        sale: "bg-red-500 text-white",
        new: "bg-accent text-white",
        hot: "bg-amber-500 text-white",
        success: "bg-green-500/15 text-green-300 border border-green-400/25",
        info: "bg-accent/15 text-cyan border border-accent/25",
        neutral: "bg-elevated text-secondary border border-subtle",
      },
    },
    defaultVariants: {
      variant: "neutral",
    },
  },
);

const Badge = ({ className, variant, ...props }) => {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  );
};

export { Badge, badgeVariants };
