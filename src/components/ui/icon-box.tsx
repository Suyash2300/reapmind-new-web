import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

type IconBoxProps = {
  icon: LucideIcon;
  className?: string;
  size?: "sm" | "md" | "lg";
};

const sizeClasses = {
  sm: "h-4 w-4",
  md: "h-5 w-5",
  lg: "h-6 w-6",
} as const;

const boxClasses = {
  sm: "p-2 rounded-lg",
  md: "p-2.5 rounded-xl",
  lg: "p-3.5 rounded-xl",
} as const;

export function IconBox({ icon: Icon, className, size = "md" }: IconBoxProps) {
  return (
    <span
      className={cn(
        "icon-box inline-flex shrink-0 items-center justify-center",
        boxClasses[size],
        className
      )}
    >
      <Icon className={sizeClasses[size]} aria-hidden />
    </span>
  );
}
