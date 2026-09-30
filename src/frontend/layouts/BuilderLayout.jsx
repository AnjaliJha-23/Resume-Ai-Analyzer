import React from "react";
import { Navbar } from "../components/navigation/Navbar";
import { AuthModal } from "../components/common/AuthModal";
import { Toast } from "../components/common/Toast";
import { useApp } from "../context/AppContext";
import { ArrowLeft, Download, Check, Sparkles, Eye, Code } from "lucide-react";

export const BuilderLayout = ({ children }) => {
  const { navigateTo, activeResume, showToast } = useApp();

  const handleExportPDF = () => {
    showToast(`Exporting "${activeResume.title}" as PDF... (Frontend Download Ready)`);
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", backgroundColor: "var(--bg-paper)" }}>
      <Navbar />

      {/* Builder Sub-Bar */}
      <div
        style={{
          backgroundColor: "var(--bg-card)",
          borderBottom: "1px solid var(--border-strong)",
          padding: "12px 0"
        }}
      >
        <div className="container-wide" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <button
              onClick={() => navigateTo("dashboard")}
              className="btn btn-ghost btn-sm"
              style={{ padding: "6px 12px" }}
            >
              <ArrowLeft size={16} />
              <span>Back to Dashboard</span>
            </button>
            <div style={{ height: "20px", width: "1px", backgroundColor: "var(--border-subtle)" }} />
            <div>
              <span className="eyebrow" style={{ fontSize: "0.7rem", margin: 0 }}>EDITING RESUME</span>
              <h4 style={{ margin: 0, fontSize: "1rem" }}>{activeResume.title}</h4>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <button
              onClick={() => navigateTo("analysis")}
              className="btn btn-secondary btn-sm"
              style={{ display: "flex", alignItems: "center", gap: "6px" }}
            >
              <Sparkles size={14} />
              <span>Run ATS Check (92%)</span>
            </button>

            <button
              onClick={handleExportPDF}
              className="btn btn-primary btn-sm btn-square"
              style={{ display: "flex", alignItems: "center", gap: "6px" }}
            >
              <Download size={14} />
              <span>EXPORT PDF</span>
            </button>
          </div>
        </div>
      </div>

      <main style={{ flex: 1, padding: "24px 0" }}>
        <div className="container-wide">{children}</div>
      </main>

      <AuthModal />
      <Toast />
    </div>
  );
};
