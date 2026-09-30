import React from "react";
import { useApp } from "../../context/AppContext";
import { ArrowUpRight, CheckCircle, Sparkles } from "lucide-react";
import { Button } from "../common/Button";

export const Hero = () => {
  const { navigateTo } = useApp();

  return (
    <section
      style={{
        paddingTop: "64px",
        paddingBottom: "80px",
        borderBottom: "1px solid var(--border-subtle)",
        backgroundColor: "var(--bg-paper)"
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "56px",
            alignItems: "center"
          }}
          className="hero-grid-responsive"
        >
          {/* Left Column: Editorial Headlines & Actions */}
          <div>
            <div className="eyebrow eyebrow-maroon" style={{ marginBottom: "16px" }}>
              <Sparkles size={14} />
              <span>[ EDITORIAL RESUME SYSTEM ]</span>
            </div>

            <h1
              className="h1"
              style={{
                fontSize: "clamp(2.4rem, 5vw, 4rem)",
                marginBottom: "20px",
                lineHeight: 1.02
              }}
            >
              BUILD A RESUME<br />
              <span
                style={{
                  borderBottom: "4px solid var(--color-maroon)",
                  color: "var(--color-maroon)",
                  display: "inline-block",
                  paddingBottom: "2px"
                }}
              >
                THAT GETS NOTICED.
              </span>
            </h1>

            <p
              className="body-text"
              style={{
                fontSize: "1.05rem",
                marginBottom: "32px",
                maxWidth: "480px",
                lineHeight: 1.6,
                color: "var(--text-muted)"
              }}
            >
              Tailor your resume for Applicant Tracking Systems (ATS), structure technical achievements, and showcase career impact with bold editorial typography.
            </p>

            {/* Actions */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "14px", marginBottom: "36px" }}>
              <Button
                variant="primary"
                size="lg"
                className="btn-square"
                onClick={() => navigateTo("builder")}
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                <span>BUILD MY RESUME</span>
                <ArrowUpRight size={18} />
              </Button>

              <Button
                variant="secondary"
                size="lg"
                onClick={() => navigateTo("analysis")}
              >
                <span>ANALYZE RESUME</span>
              </Button>
            </div>

            {/* Feature Bullets */}
            <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.85rem", fontWeight: 600 }}>
                <CheckCircle size={16} style={{ color: "var(--color-maroon)" }} />
                <span>ATS Parsing Compliant</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.85rem", fontWeight: 600 }}>
                <CheckCircle size={16} style={{ color: "var(--color-maroon)" }} />
                <span>Real-Time Interactive Preview</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Demo Component */}
          <div>
            <div
              style={{
                backgroundColor: "var(--bg-card)",
                border: "2px solid var(--border-strong)",
                borderRadius: "var(--radius-xl)",
                padding: "28px",
                boxShadow: "var(--shadow-lg)"
              }}
            >
              <div
                className="flex justify-between items-center"
                style={{
                  borderBottom: "1px solid var(--border-strong)",
                  paddingBottom: "14px",
                  marginBottom: "20px"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <div style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "var(--color-maroon)" }} />
                  <span className="font-display" style={{ fontSize: "0.8rem", letterSpacing: "0.08em" }}>
                    DEMO PREVIEW — EDITORIAL MODERN
                  </span>
                </div>
                <span className="badge badge-maroon">ATS 94% MATCH</span>
              </div>

              {/* Sample Paper Card */}
              <div
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid var(--border-strong)",
                  padding: "20px",
                  borderRadius: "var(--radius-xs)",
                  marginBottom: "20px"
                }}
              >
                <h3 className="font-display" style={{ fontSize: "1.3rem", marginBottom: "4px" }}>
                  SARAH GOMES
                </h3>
                <p
                  className="text-micro"
                  style={{
                    color: "var(--text-muted)",
                    marginBottom: "10px",
                    borderBottom: "1px solid var(--border-subtle)",
                    paddingBottom: "8px"
                  }}
                >
                  SENIOR FULL STACK ARCHITECT • BENGALURU, IN • SARAHGOMES.DEV
                </p>
                <p className="text-small" style={{ color: "var(--text-main)", fontWeight: 500, lineHeight: 1.5 }}>
                  Engineered 25+ React micro-services; boosted API response speeds by 42% through GraphQL & Redis caching layers.
                </p>
              </div>

              {/* Quick Metrics */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                <div style={{ backgroundColor: "var(--bg-paper-darker)", padding: "10px 14px", borderRadius: "var(--radius-sm)", border: "1px solid var(--border-subtle)" }}>
                  <span className="eyebrow" style={{ fontSize: "0.65rem", display: "block", marginBottom: "2px" }}>KEYWORD ALIGNMENT</span>
                  <div className="font-display" style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--color-maroon)" }}>92% MATCH</div>
                </div>
                <div style={{ backgroundColor: "var(--bg-paper-darker)", padding: "10px 14px", borderRadius: "var(--radius-sm)", border: "1px solid var(--border-subtle)" }}>
                  <span className="eyebrow" style={{ fontSize: "0.65rem", display: "block", marginBottom: "2px" }}>PARSER FORMATTING</span>
                  <div className="font-display" style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--text-main)" }}>HIGH COMPLIANCE</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
