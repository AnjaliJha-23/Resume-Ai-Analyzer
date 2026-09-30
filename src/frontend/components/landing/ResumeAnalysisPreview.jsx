import React from "react";
import { SectionLabel } from "../common/SectionLabel";
import { Card } from "../common/Card";
import { Button } from "../common/Button";
import { useApp } from "../../context/AppContext";
import { BarChart3, CheckCircle2, AlertTriangle, ArrowRight, Sparkles } from "lucide-react";

export const ResumeAnalysisPreview = () => {
  const { navigateTo } = useApp();

  return (
    <section style={{ padding: "80px 0", borderBottom: "1px solid var(--border-subtle)", backgroundColor: "var(--bg-paper)" }}>
      <div className="container">
        <div className="flex justify-between items-end" style={{ marginBottom: "36px", flexWrap: "wrap", gap: "16px" }}>
          <div>
            <SectionLabel number="03" title="PRODUCT INTERFACE DEMO" />
            <h2 className="h2" style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", marginTop: "8px" }}>
              ATS AUDIT & KEYWORD SCORE ENGINE
            </h2>
          </div>
          <Button
            variant="primary"
            className="btn-square"
            onClick={() => navigateTo("analysis")}
            style={{ display: "flex", alignItems: "center", gap: "8px" }}
          >
            <span>LAUNCH ATS ANALYZER</span>
            <ArrowRight size={16} />
          </Button>
        </div>

        {/* Full-Width Mock Product Dashboard Composition */}
        <Card
          bordered
          style={{
            backgroundColor: "var(--bg-card)",
            padding: "32px",
            boxShadow: "var(--shadow-lg)"
          }}
        >
          {/* Top Interface Toolbar */}
          <div
            className="flex justify-between items-center"
            style={{
              borderBottom: "2px solid var(--border-strong)",
              paddingBottom: "16px",
              marginBottom: "28px",
              flexWrap: "wrap",
              gap: "12px"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
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
                <BarChart3 size={18} />
              </div>
              <div>
                <h4 style={{ margin: 0, fontSize: "1rem" }}>Target Role: Senior Full Stack Architect</h4>
                <span className="text-micro" style={{ color: "var(--text-muted)" }}>PARSER MODE: SINGLE-COLUMN STRICT</span>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span className="badge badge-outline">SAMPLE DEMO DATA</span>
              <span className="badge badge-maroon">ATS 89/100</span>
            </div>
          </div>

          {/* Interface Grid: Score Gauge + Progress Metrics + Recommendations */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "200px 1fr 1fr",
              gap: "28px",
              alignItems: "start"
            }}
            className="analysis-dashboard-layout"
          >
            {/* Column 1: Main Gauge Dial */}
            <div
              style={{
                backgroundColor: "var(--bg-paper)",
                border: "1px solid var(--border-strong)",
                borderRadius: "var(--radius-md)",
                padding: "24px",
                textAlign: "center"
              }}
            >
              <span className="eyebrow eyebrow-maroon" style={{ fontSize: "0.65rem", display: "block", marginBottom: "12px" }}>
                OVERALL MATCH
              </span>
              <div
                style={{
                  width: "110px",
                  height: "110px",
                  borderRadius: "50%",
                  border: "5px solid var(--color-maroon)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 12px auto",
                  backgroundColor: "var(--bg-paper-light)"
                }}
              >
                <span className="font-display" style={{ fontSize: "2.4rem", fontWeight: 700, lineHeight: 1, color: "var(--color-maroon)" }}>
                  89
                </span>
                <span className="text-micro" style={{ color: "var(--text-muted)", fontSize: "0.65rem" }}>
                  OUT OF 100
                </span>
              </div>
              <span className="badge badge-maroon" style={{ fontSize: "0.65rem" }}>HIGH PARSER PASS RATE</span>
            </div>

            {/* Column 2: Progress Metrics */}
            <div
              style={{
                backgroundColor: "var(--bg-paper)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "var(--radius-md)",
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                gap: "14px"
              }}
            >
              <span className="eyebrow" style={{ fontSize: "0.65rem", display: "block" }}>
                PARSER & CONTENT METRICS
              </span>

              <div>
                <div className="flex justify-between text-small" style={{ fontWeight: 600, fontSize: "0.825rem", marginBottom: "4px" }}>
                  <span>ATS Parser Compatibility</span>
                  <span>92%</span>
                </div>
                <div style={{ height: "6px", backgroundColor: "var(--bg-paper-darker)", borderRadius: "3px", overflow: "hidden" }}>
                  <div style={{ width: "92%", height: "100%", backgroundColor: "var(--color-maroon)" }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-small" style={{ fontWeight: 600, fontSize: "0.825rem", marginBottom: "4px" }}>
                  <span>Technical Keyword Match</span>
                  <span>88%</span>
                </div>
                <div style={{ height: "6px", backgroundColor: "var(--bg-paper-darker)", borderRadius: "3px", overflow: "hidden" }}>
                  <div style={{ width: "88%", height: "100%", backgroundColor: "var(--color-maroon)" }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-small" style={{ fontWeight: 600, fontSize: "0.825rem", marginBottom: "4px" }}>
                  <span>Content Impact & Metrics</span>
                  <span>86%</span>
                </div>
                <div style={{ height: "6px", backgroundColor: "var(--bg-paper-darker)", borderRadius: "3px", overflow: "hidden" }}>
                  <div style={{ width: "86%", height: "100%", backgroundColor: "var(--bg-black)" }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-small" style={{ fontWeight: 600, fontSize: "0.825rem", marginBottom: "4px" }}>
                  <span>Section Layout Structure</span>
                  <span>94%</span>
                </div>
                <div style={{ height: "6px", backgroundColor: "var(--bg-paper-darker)", borderRadius: "3px", overflow: "hidden" }}>
                  <div style={{ width: "94%", height: "100%", backgroundColor: "var(--bg-black)" }} />
                </div>
              </div>
            </div>

            {/* Column 3: Recommended Action Items */}
            <div
              style={{
                backgroundColor: "var(--bg-paper)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "var(--radius-md)",
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                gap: "14px"
              }}
            >
              <span className="eyebrow" style={{ fontSize: "0.65rem", display: "block" }}>
                RECOMMENDED ACTION ITEMS
              </span>

              <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "0.825rem", padding: "8px 10px", backgroundColor: "var(--badge-warning-bg)", color: "var(--badge-warning-text)", borderRadius: "var(--radius-sm)" }}>
                <AlertTriangle size={14} style={{ flexShrink: 0, marginTop: "2px" }} />
                <span>Add missing terms: <strong>System Design, GraphQL, Redis</strong></span>
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "0.825rem", padding: "8px 10px", backgroundColor: "var(--badge-success-bg)", color: "var(--badge-success-text)", borderRadius: "var(--radius-sm)" }}>
                <CheckCircle2 size={14} style={{ flexShrink: 0, marginTop: "2px" }} />
                <span>Quantified metrics present in 80% of bullet points</span>
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "0.825rem", padding: "8px 10px", backgroundColor: "var(--badge-maroon-bg)", color: "var(--badge-maroon-text)", borderRadius: "var(--radius-sm)" }}>
                <Sparkles size={14} style={{ flexShrink: 0, marginTop: "2px" }} />
                <span>Format compliant with single-column ATS parsers</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
