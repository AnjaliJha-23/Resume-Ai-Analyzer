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
        backgroundColor: "var(--color-maroon)",
        color: "var(--text-inverse)",
        padding: "14px 20px",
        borderRadius: "var(--radius-sm)",
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
      <CheckCircle2 size={18} style={{ color: "var(--bg-paper)" }} />
      <span style={{ fontWeight: 600 }}>{toastMessage}</span>
    </div>
  );
};
