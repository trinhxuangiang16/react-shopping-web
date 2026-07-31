import { cn } from "../../lib/cn";

const Skeleton = ({ className, ...props }) => {
  return (
    <div
      className={cn("bg-elevated animate-pulse rounded-lg", className)}
      {...props}
    />
  );
};

export { Skeleton };
