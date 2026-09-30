import React from "react";

export const Badge = ({
  children,
  variant = "default", // 'default' | 'dark' | 'outline'
  icon: Icon,
  className = ""
}) => {
  return (
    <span className={`badge badge-${variant} ${className}`}>
      {Icon && <Icon size={12} />}
      {children}
    </span>
  );
};
