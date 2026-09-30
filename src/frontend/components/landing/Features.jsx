import React from "react";
import { Card } from "../common/Card";
import { SectionLabel } from "../common/SectionLabel";
import { FileEdit, Target, Sparkles, BarChart3, LayoutGrid, FileSearch } from "lucide-react";

export const Features = () => {
  const capabilities = [
    {
      icon: FileEdit,
      num: "01",
      title: "EDITORIAL RESUME BUILDER",
      badge: "LIVE WORKSPACE",
      description: "Interactive multi-section editor with live side-by-side paper rendering and real-time formatting updates."
    },
    {
      icon: Target,
      num: "02",
      title: "ATS OPTIMIZATION",
      badge: "CORE PARSER",
      description: "Single & dual column editorial layouts engineered to eliminate parsing errors in recruitment software."
    },
    {
      icon: FileSearch,
      num: "03",
      title: "JOB DESCRIPTION MATCHING",
      badge: "FRONTEND DEMO",
      description: "Analyze target job description requirements and identify missing technical terms and skill gaps."
    },
    {
      icon: Sparkles,
      num: "04",
      title: "BULLET POINT IMPROVEMENT",
      badge: "AI SUGGESTIONS",
      description: "Refactor passive job duty descriptions into metric-backed, high-impact achievement statements."
    },
    {
      icon: BarChart3,
      num: "05",
      title: "ATS SCORE ANALYSIS",
      badge: "METRIC ENGINE",
      description: "Instant score breakdown across parser compatibility, keyword alignment, and content impact quality."
    },
    {
      icon: LayoutGrid,
      num: "06",
      title: "PROFESSIONAL TEMPLATES",
      badge: "GALLERY",
      description: "Curated collection of publication-grade editorial layouts designed for high legibility."
    }
  ];

  return (
    <section style={{ padding: "72px 0", borderBottom: "1px solid var(--border-subtle)", backgroundColor: "var(--bg-paper)" }}>
      <div className="container">
        <div style={{ marginBottom: "40px" }}>
          <SectionLabel number="01" title="PRODUCT CAPABILITIES" />
          <h2 className="h2" style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", marginTop: "8px" }}>
            ENGINEERED FOR TECHNICAL RESUME PRECISION
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "24px"
          }}
        >
          {capabilities.map((item) => {
            const Icon = item.icon;
            return (
              <Card
                key={item.num}
                bordered
                hoverable
                style={{
                  backgroundColor: "var(--bg-card)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between"
                }}
              >
                <div>
                  <div className="flex justify-between items-center" style={{ marginBottom: "16px" }}>
                    <div
                      style={{
                        width: "36px",
                        height: "36px",
                        backgroundColor: "var(--color-maroon)",
                        color: "var(--text-inverse)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "var(--radius-xs)"
                      }}
                    >
                      <Icon size={18} />
                    </div>
                    <span className="badge badge-maroon" style={{ fontSize: "0.65rem" }}>{item.badge}</span>
                  </div>

                  <h3 className="h3" style={{ fontSize: "1.15rem", marginBottom: "8px" }}>
                    {item.title}
                  </h3>
                  <p className="body-text" style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>
                    {item.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
