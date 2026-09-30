import React from "react";
import { useApp } from "../../context/AppContext";
import { CheckCircle2 } from "lucide-react";

export const Toast = () => {
  const { toastMessage } = useApp();

  if (!toastMessage) return null;

  return (
    <div
      className="fade-in"
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        backgroundColor: "var(--bg-black)",
        color: "var(--bg-paper)",
        padding: "14px 20px",
        borderRadius: "var(--radius-md)",
        boxShadow: "var(--shadow-lg)",
        display: "flex",
        alignItems: "center",
        gap: "10px",
        zIndex: 1000,
        fontFamily: "var(--font-body)",
        fontSize: "0.875rem",
        border: "1px solid var(--border-strong)"
      }}
    >
      <CheckCircle2 size={18} style={{ color: "#70E000" }} />
      <span>{toastMessage}</span>
    </div>
  );
};
