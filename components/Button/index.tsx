import React from "react";
import clsx from "clsx";
import Spinner from "../Spinner";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  icon?: React.ReactNode;
  loading?: boolean;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
}

const baseStyles =
  "inline-flex items-center justify-center rounded-lg transition focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer";
const variants = {
  primary: "bg-button text-white hover:bg-button/75 focus:ring-button",
  secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400",
  outline:
    "border border-gray-400 text-gray-800 bg-white hover:bg-gray-50 focus:ring-gray-400",
};
const sizes = {
  sm: "px-4 py-2.5 text-sm",
  md: "px-5 py-4.5 text-base",
  lg: "px-6 py-5 text-lg",
};

const Button: React.FC<ButtonProps> = ({
  className,
  children,
  icon,
  loading = false,
  variant = "primary",
  size = "md",
  disabled,
  ...props
}) => {
  const isDisabled = disabled || loading;

  return (
    <button
      className={clsx(
        className,
        baseStyles,
        variants[variant],
        sizes[size],
        isDisabled && "opacity-60 cursor-not-allowed"
      )}
      disabled={isDisabled}
      {...props}
    >
      {loading ? (
        <span className="mr-2">
          <Spinner />
        </span>
      ) : icon ? (
        <span className="mr-2">{icon}</span>
      ) : null}
      {children}
    </button>
  );
};

export default Button;
