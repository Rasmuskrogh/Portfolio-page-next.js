"use client";

import Link from "next/link";
import { ButtonProps } from "@/types";

const Button = ({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  target,
  rel,
}: ButtonProps) => {
  const baseStyles = "font-semibold rounded-xl transition px-5 py-3 text-lg";

  const variantStyles = {
    primary:
      "border border-[#fb6f4c] bg-[#fb6f4c] text-black hover:bg-[#fb6f4c]/80",
    secondary: "border border-white bg-white text-black hover:bg-white/80",
    dark: "border border-[#323131] bg-[#323131] text-white hover:bg-[#323131]/80",
  };

  const buttonContent = (
    <div className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {children}
    </div>
  );

  if (href) {
    return (
      <Link href={href} target={target} rel={rel} onClick={onClick}>
        {buttonContent}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className="w-full">
      {buttonContent}
    </button>
  );
};

export default Button;
