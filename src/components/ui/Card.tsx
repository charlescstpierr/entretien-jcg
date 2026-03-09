import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export const Card = ({ children, className = "" }: CardProps) => {
  return (
    <div
      className={`rounded-2xl bg-white p-6 shadow-lg ${className}`}
    >
      {children}
    </div>
  );
};
