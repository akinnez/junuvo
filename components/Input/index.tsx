import clsx from "clsx";
import React, { useState, InputHTMLAttributes, forwardRef } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  className?: string;
  error?: string;
  type?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, type = "text", error, className, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    const isPassword = type === "password";
    const inputType = isPassword ? (showPassword ? "text" : "password") : type;

    return (
      <>
        {label && (
          <label className="block font-semibold text-sm text-gray-900 mb-2">
            {label}
          </label>
        )}
        <div className="relative flex items-center">
          <input
            ref={ref}
            type={inputType}
            {...props}
            className={clsx(
              className,
              "p-4 w-full rounded-md border outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary transition placeholder:text-sm placeholder:text-[#989A9F] placeholder:font-medium",
              { "border-red-600": error },
              { "border-[#ccc]": !error },
              { "pr-10": isPassword },
              { "pr-4": !isPassword }
            )}
          />
          {isPassword && (
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              style={{
                position: "absolute",
                right: 8,
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
                fontSize: 14,
                color: "#555",
              }}
              tabIndex={-1}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          )}
        </div>
        {error && (
          <div style={{ color: "red", fontSize: 12, marginTop: 4 }}>
            {error}
          </div>
        )}
      </>
    );
  }
);

Input.displayName = "Input";

export default Input;
