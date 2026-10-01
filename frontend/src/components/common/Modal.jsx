import React from "react";
import { X } from "lucide-react";

export const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center" style={{ marginBottom: "20px" }}>
          <h3 className="font-display" style={{ fontSize: "1.4rem", margin: 0 }}>{title}</h3>
          <button
            onClick={onClose}
            className="btn-ghost"
            style={{ padding: "6px", borderRadius: "50%", cursor: "pointer" }}
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};
