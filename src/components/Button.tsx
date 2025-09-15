"use client";

import * as React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
};

export default function Button({ children, className, style, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={`px-4 py-2 rounded-md border ${className ?? ""}`}
      style={{ cursor: "pointer", ...(style ?? {}) }}
    >
      {children}
    </button>
  );
}
