import React from "react";

export const Card = ({
  children,
  bordered = false,
  hoverable = false,
  className = "",
  style = {},
  ...props
}) => {
  return (
    <div
      className={`card ${bordered ? "card-bordered" : ""} ${hoverable ? "card-hover" : ""} ${className}`}
      style={style}
      {...props}
    >
      {children}
    </div>
  );
};
