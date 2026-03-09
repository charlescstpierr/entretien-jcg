import Link from "next/link";
import type { ReactNode } from "react";

const variants = {
  primary:
    "bg-orange-cta text-white shadow-lg shadow-orange-cta/25 hover:bg-orange-hover hover:shadow-xl hover:shadow-orange-cta/30 hover:-translate-y-0.5 focus-visible:ring-orange-cta active:translate-y-0",
  secondary:
    "bg-emerald-primary text-white shadow-lg shadow-emerald-primary/25 hover:bg-emerald-dark hover:shadow-xl hover:shadow-emerald-primary/30 hover:-translate-y-0.5 focus-visible:ring-emerald-primary active:translate-y-0",
  outline:
    "border border-white/30 text-white bg-white/5 hover:bg-white/10 hover:border-white/50 hover:-translate-y-0.5 focus-visible:ring-white active:translate-y-0",
} as const;

const sizes = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-7 py-3 text-base",
  lg: "px-9 py-4 text-lg",
} as const;

type ButtonProps = {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  children: ReactNode;
  className?: string;
  href?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
};

export const Button = ({
  variant = "primary",
  size = "md",
  children,
  className = "",
  href,
  ...rest
}: ButtonProps) => {
  const baseClasses =
    "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 cursor-pointer";

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
};
