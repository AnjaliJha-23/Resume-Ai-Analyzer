import React from "react";

export const Button = ({
  children,
  variant = "primary", // 'primary' | 'secondary' | 'ghost' | 'square'
  size = "md", // 'sm' | 'md' | 'lg'
  icon: Icon,
  className = "",
  onClick,
  type = "button",
  disabled = false,
  ...props
}) => {
  const variantClass = variant === "square" ? "btn-primary btn-square" : `btn-${variant}`;
  const sizeClass = size !== "md" ? `btn-${size}` : "";

  return (
    <button
      type={type}
      className={`btn ${variantClass} ${sizeClass} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {Icon && <Icon size={size === "sm" ? 14 : size === "lg" ? 20 : 16} />}
      {children}
    </button>
  );
};
