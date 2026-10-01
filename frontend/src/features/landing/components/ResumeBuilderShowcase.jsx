import React, { useState } from "react";
import { SectionLabel } from "../../../components/common/SectionLabel";
import { Card } from "../../../components/common/Card";
import { Button } from "../../../components/common/Button";
import { useApp } from "../../../context/AppContext";
import { ArrowRight } from "lucide-react";

export const ResumeBuilderShowcase = () => {
  const { navigateTo } = useApp();
  const [activeFormTab, setActiveFormTab] = useState("personal");

  return (
    <section
      style={{
        padding: "80px 0",
        borderBottom: "1px solid var(--border-subtle)",
        backgroundColor: "var(--bg-paper-darker)"
      }}
    >
      <div className="container">
        <div className="flex justify-between items-end" style={{ marginBottom: "36px", flexWrap: "wrap", gap: "16px" }}>
          <div>
            <SectionLabel number="04" title="LIVE WORKSPACE SHOWCASE" />
            <h2 className="h2" style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", marginTop: "8px" }}>
              SPLIT-SCREEN RESUME BUILDER WORKSPACE
            </h2>
          </div>
          <Button
            variant="primary"
            size="md"
            className="btn-square"
            onClick={() => navigateTo("builder")}
            style={{ display: "flex", alignItems: "center", gap: "8px" }}
          >
            <span>OPEN FULL BUILDER</span>
            <ArrowRight size={16} />
          </Button>
        </div>

        {/* Split-Screen Product Composition */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "28px",
            alignItems: "stretch"
          }}
          className="builder-showcase-responsive"
        >
          {/* LEFT: Interactive Form Sections Simulation */}
          <Card
            bordered
            style={{
              backgroundColor: "var(--bg-paper)",
              padding: "24px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between"
            }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  gap: "6px",
                  marginBottom: "20px",
                  borderBottom: "1px solid var(--border-subtle)",
                  paddingBottom: "12px"
                }}
              >
                <button
                  onClick={() => setActiveFormTab("personal")}
                  style={{
                    padding: "6px 12px",
                    borderRadius: "var(--radius-sm)",
                    border: "none",
                    backgroundColor: activeFormTab === "personal" ? "var(--color-maroon)" : "transparent",
                    color: activeFormTab === "personal" ? "var(--text-inverse)" : "var(--text-main)",
                    fontFamily: "var(--font-display)",
                    fontSize: "0.75rem",
                    cursor: "pointer"
                  }}
                >
                  01. PERSONAL INFO
                </button>
                <button
                  onClick={() => setActiveFormTab("experience")}
                  style={{
                    padding: "6px 12px",
                    borderRadius: "var(--radius-sm)",
                    border: "none",
                    backgroundColor: activeFormTab === "experience" ? "var(--color-maroon)" : "transparent",
                    color: activeFormTab === "experience" ? "var(--text-inverse)" : "var(--text-main)",
                    fontFamily: "var(--font-display)",
                    fontSize: "0.75rem",
                    cursor: "pointer"
                  }}
                >
                  02. EXPERIENCE
                </button>
                <button
                  onClick={() => setActiveFormTab("skills")}
                  style={{
                    padding: "6px 12px",
                    borderRadius: "var(--radius-sm)",
                    border: "none",
                    backgroundColor: activeFormTab === "skills" ? "var(--color-maroon)" : "transparent",
                    color: activeFormTab === "skills" ? "var(--text-inverse)" : "var(--text-main)",
                    fontFamily: "var(--font-display)",
                    fontSize: "0.75rem",
                    cursor: "pointer"
                  }}
                >
                  03. SKILLS
                </button>
              </div>

              {/* Form Input Fields Preview */}
              {activeFormTab === "personal" && (
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <div className="form-group" style={{ margin: 0 }}>
                    <label className="form-label" style={{ fontSize: "0.75rem" }}>Full Name</label>
                    <input type="text" className="input-field" readOnly value="Sarah Gomes" style={{ padding: "8px 12px", fontSize: "0.875rem" }} />
                  </div>
                  <div className="form-group" style={{ margin: 0 }}>
                    <label className="form-label" style={{ fontSize: "0.75rem" }}>Target Headline</label>
                    <input type="text" className="input-field" readOnly value="Senior Full Stack Engineer & Cloud Architect" style={{ padding: "8px 12px", fontSize: "0.875rem" }} />
                  </div>
                  <div className="form-group" style={{ margin: 0 }}>
                    <label className="form-label" style={{ fontSize: "0.75rem" }}>Email & Location</label>
                    <input type="text" className="input-field" readOnly value="sarah@example.com • Bengaluru, IN" style={{ padding: "8px 12px", fontSize: "0.875rem" }} />
                  </div>
                </div>
              )}

              {activeFormTab === "experience" && (
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <div className="form-group" style={{ margin: 0 }}>
                    <label className="form-label" style={{ fontSize: "0.75rem" }}>Role & Company</label>
                    <input type="text" className="input-field" readOnly value="Lead Software Architect @ Nexus Technologies" style={{ padding: "8px 12px", fontSize: "0.875rem" }} />
                  </div>
                  <div className="form-group" style={{ margin: 0 }}>
                    <label className="form-label" style={{ fontSize: "0.75rem" }}>Bullet Impact Statement</label>
                    <textarea className="textarea-field" readOnly value="Engineered 25+ React micro-services; boosted API response speeds by 42% through GraphQL & Redis caching layers." style={{ minHeight: "80px", fontSize: "0.85rem" }} />
                  </div>
                </div>
              )}

              {activeFormTab === "skills" && (
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <div className="form-group" style={{ margin: 0 }}>
                    <label className="form-label" style={{ fontSize: "0.75rem" }}>Frontend Taxonomy</label>
                    <input type="text" className="input-field" readOnly value="React 19, Next.js, TypeScript, Vite, Tailwind CSS" style={{ padding: "8px 12px", fontSize: "0.875rem" }} />
                  </div>
                  <div className="form-group" style={{ margin: 0 }}>
                    <label className="form-label" style={{ fontSize: "0.75rem" }}>Backend Taxonomy</label>
                    <input type="text" className="input-field" readOnly value="Node.js, Python, FastAPI, PostgreSQL, Redis, GraphQL" style={{ padding: "8px 12px", fontSize: "0.875rem" }} />
                  </div>
                </div>
              )}
            </div>

            <div style={{ marginTop: "20px", display: "flex", alignItems: "center", justifyBetween: "space-between", gap: "10px" }}>
              <span className="text-micro" style={{ color: "var(--text-muted)" }}>LIVE FRONTEND STATE MANAGEMENT</span>
              <span className="badge badge-maroon" style={{ fontSize: "0.65rem" }}>REAL-TIME SYNC</span>
            </div>
          </Card>

          {/* RIGHT: Live Realistic Paper Resume Preview */}
          <div
            style={{
              backgroundColor: "#FFFFFF",
              color: "#111111",
              border: "2px solid var(--border-strong)",
              borderRadius: "var(--radius-md)",
              padding: "28px",
              boxShadow: "var(--shadow-md)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between"
            }}
          >
            <div>
              <div style={{ borderBottom: "2px solid var(--color-maroon)", paddingBottom: "12px", marginBottom: "16px" }}>
                <h3 className="font-display" style={{ fontSize: "1.8rem", fontWeight: 700, margin: 0, textTransform: "uppercase" }}>
                  SARAH GOMES
                </h3>
                <p className="eyebrow eyebrow-maroon" style={{ fontSize: "0.7rem", marginTop: "2px" }}>
                  SENIOR FULL STACK ENGINEER & CLOUD ARCHITECT
                </p>
                <div style={{ display: "flex", gap: "10px", fontSize: "0.75rem", color: "#666660", marginTop: "6px" }}>
                  <span>sarah@example.com</span>
                  <span>•</span>
                  <span>Bengaluru, IN</span>
                  <span>•</span>
                  <span>sarahgomes.dev</span>
                </div>
              </div>

              <div style={{ marginBottom: "14px" }}>
                <h4 className="font-display" style={{ fontSize: "0.85rem", textTransform: "uppercase", borderBottom: "1px solid #111111", paddingBottom: "2px", marginBottom: "6px" }}>
                  WORK EXPERIENCE
                </h4>
                <div className="flex justify-between text-small" style={{ fontWeight: 700, fontSize: "0.825rem" }}>
                  <span>Lead Software Architect — Nexus Tech</span>
                  <span style={{ fontWeight: 400, color: "#666660" }}>2024 – Present</span>
                </div>
                <p style={{ fontSize: "0.8rem", color: "#333330", marginTop: "2px", lineHeight: 1.4 }}>
                  Engineered 25+ React micro-services; boosted API response speeds by 42% through GraphQL & Redis caching layers.
                </p>
              </div>

              <div>
                <h4 className="font-display" style={{ fontSize: "0.85rem", textTransform: "uppercase", borderBottom: "1px solid #111111", paddingBottom: "2px", marginBottom: "6px" }}>
                  SKILLS TAXONOMY
                </h4>
                <p style={{ fontSize: "0.8rem", color: "#333330", margin: 0 }}>
                  <strong>Frontend:</strong> React 19, Next.js, TypeScript, Vite, Tailwind CSS<br />
                  <strong>Backend:</strong> Node.js, Python, FastAPI, PostgreSQL, Redis
                </p>
              </div>
            </div>

            <div style={{ borderTop: "1px solid var(--border-subtle)", paddingTop: "12px", marginTop: "16px" }} className="flex justify-between items-center">
              <span className="eyebrow" style={{ fontSize: "0.65rem" }}>LIVE PAPER CANVAS</span>
              <Button variant="secondary" size="sm" onClick={() => navigateTo("builder")} style={{ fontSize: "0.75rem" }}>
                <span>Launch Interactive Builder</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
