import React from "react";
import { useApp } from "../../context/AppContext";
import { FileText } from "lucide-react";

export const Footer = () => {
  const { navigateTo } = useApp();

  return (
    <footer
      style={{
        backgroundColor: "var(--bg-paper)",
        borderTop: "2px solid var(--border-strong)",
        paddingTop: "64px",
        paddingBottom: "48px",
        marginTop: "80px"
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "40px",
            marginBottom: "60px"
          }}
        >
          {/* Brand & Mission Column */}
          <div style={{ gridColumn: "span 2" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  backgroundColor: "var(--color-maroon)",
                  color: "var(--text-inverse)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "var(--radius-xs)"
                }}
              >
                <FileText size={18} />
              </div>
              <span className="font-display" style={{ fontSize: "1.5rem", fontWeight: 700, letterSpacing: "0.04em" }}>
                RESUME<span style={{ color: "var(--color-maroon)" }}>AI</span>
              </span>
            </div>
            <p style={{ maxWidth: "340px", fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
              An editorial resume engineering platform designed to optimize your career profile for Applicant Tracking Systems and hiring managers.
            </p>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="font-display" style={{ fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "20px" }}>
              PLATFORM
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              <li>
                <button onClick={() => navigateTo("landing")} style={{ background: "none", border: "none", color: "var(--text-muted)", cursor: "pointer", fontSize: "0.9rem" }}>
                  Overview & Features
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo("builder")} style={{ background: "none", border: "none", color: "var(--text-muted)", cursor: "pointer", fontSize: "0.9rem" }}>
                  Editorial Resume Builder
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo("analysis")} style={{ background: "none", border: "none", color: "var(--text-muted)", cursor: "pointer", fontSize: "0.9rem" }}>
                  ATS Score Analyzer
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo("templates")} style={{ background: "none", border: "none", color: "var(--text-muted)", cursor: "pointer", fontSize: "0.9rem" }}>
                  Template Library
                </button>
              </li>
            </ul>
          </div>

          {/* Workspace Column */}
          <div>
            <h4 className="font-display" style={{ fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "20px" }}>
              WORKSPACE
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              <li>
                <button onClick={() => navigateTo("dashboard")} style={{ background: "none", border: "none", color: "var(--text-muted)", cursor: "pointer", fontSize: "0.9rem" }}>
                  User Dashboard
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo("profile")} style={{ background: "none", border: "none", color: "var(--text-muted)", cursor: "pointer", fontSize: "0.9rem" }}>
                  Profile & Settings
                </button>
              </li>
            </ul>
          </div>

          {/* Editorial Note Column */}
          <div>
            <h4 className="font-display" style={{ fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "20px" }}>
              ARCHITECTURE
            </h4>
            <p className="text-small" style={{ color: "var(--text-muted)", lineHeight: 1.6 }}>
              Designed with warm paper palette <code style={{ backgroundColor: "rgba(141,48,48,0.1)", color: "#8D3030", padding: "2px 6px", borderRadius: "4px" }}>#F5F3E9</code> and deep maroon accents.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: "1px solid var(--border-subtle)",
            paddingTop: "24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px"
          }}
        >
          <span className="text-small" style={{ color: "var(--text-subtle)" }}>
            © 2026 ResumeAI Platform. All rights reserved. Editorial Design System Edition.
          </span>
          <div style={{ display: "flex", gap: "20px" }}>
            <span className="eyebrow eyebrow-maroon" style={{ fontSize: "0.7rem" }}>DEEP MAROON #8D3030</span>
            <span className="eyebrow" style={{ fontSize: "0.7rem" }}>EDITORIAL GRID</span>
            <span className="eyebrow" style={{ fontSize: "0.7rem" }}>FRONTEND-ONLY</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
