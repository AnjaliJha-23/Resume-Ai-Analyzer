import React, { useState } from "react";
import { DashboardLayout } from "../../layouts/DashboardLayout";
import { MOCK_ANALYSIS_DATA } from "../../features/resume-analysis/data/analysisData";
import { Card } from "../../components/common/Card";
import { Button } from "../../components/common/Button";
import { SectionLabel } from "../../components/common/SectionLabel";
import { useApp } from "../../context/AppContext";
import { CheckCircle2, AlertTriangle, RefreshCw } from "lucide-react";

export const ResumeAnalysis = () => {
  const { showToast } = useApp();
  const [jobTitle, setJobTitle] = useState("Senior Full Stack Engineer / Systems Architect");
  const [isAuditing, setIsAuditing] = useState(false);

  const handleReAudit = () => {
    setIsAuditing(true);
    setTimeout(() => {
      setIsAuditing(false);
      showToast(`ATS Audit refreshed for "${jobTitle}". Match Score: 91%!`);
    }, 1000);
  };

  return (
    <DashboardLayout
      title="ATS SCORE & KEYWORD AUDIT"
      subtitle="Comprehensive breakdown of parser friendliness, keyword density, and bullet impact."
    >
      {/* Target Job Title Input Bar */}
      <Card bordered style={{ backgroundColor: "var(--bg-paper)", marginBottom: "32px", padding: "20px" }}>
        <div className="flex justify-between items-center" style={{ flexWrap: "wrap", gap: "16px" }}>
          <div style={{ flex: 1, minWidth: "280px" }}>
            <span className="eyebrow eyebrow-maroon" style={{ marginBottom: "4px", display: "block" }}>TARGET ROLE POSITION</span>
            <input
              type="text"
              className="input-field"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              placeholder="e.g. Lead Staff Frontend Engineer"
            />
          </div>

          <Button
            variant="primary"
            className="btn-square"
            onClick={handleReAudit}
            disabled={isAuditing}
            style={{ display: "flex", alignItems: "center", gap: "8px", alignSelf: "flex-end" }}
          >
            <RefreshCw size={16} className={isAuditing ? "animate-spin" : ""} />
            <span>{isAuditing ? "AUDITING..." : "RE-RUN ATS AUDIT"}</span>
          </Button>
        </div>
      </Card>

      {/* Main Score & Metrics Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "240px 1fr",
          gap: "24px",
          marginBottom: "36px"
        }}
        className="analysis-score-grid"
      >
        {/* Main Gauge Dial */}
        <Card bordered style={{ backgroundColor: "var(--bg-card)", textAlign: "center", padding: "32px 16px" }}>
          <span className="eyebrow eyebrow-maroon" style={{ marginBottom: "12px", display: "block" }}>OVERALL MATCH</span>
          <div
            style={{
              width: "140px",
              height: "140px",
              borderRadius: "50%",
              border: "6px solid var(--color-maroon)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 16px auto",
              backgroundColor: "var(--bg-paper)"
            }}
          >
            <span className="font-display" style={{ fontSize: "3rem", fontWeight: 700, lineHeight: 1, color: "var(--color-maroon)" }}>
              {MOCK_ANALYSIS_DATA.overallScore}
            </span>
            <span className="text-micro" style={{ color: "var(--text-muted)", letterSpacing: "0.1em" }}>OUT OF 100</span>
          </div>
          <span className="badge badge-maroon">EXCELLENT MATCH</span>
        </Card>

        {/* Individual Breakdown Bars */}
        <Card bordered style={{ backgroundColor: "var(--bg-card)", padding: "24px" }}>
          <SectionLabel number="01" title="METRIC SCORE MATRIX" />
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginTop: "16px" }}>
            <div>
              <div className="flex justify-between text-small" style={{ fontWeight: 600, marginBottom: "6px" }}>
                <span>ATS Parser Compatibility</span>
                <span>{MOCK_ANALYSIS_DATA.atsMatch}%</span>
              </div>
              <div style={{ height: "8px", backgroundColor: "var(--bg-paper-darker)", borderRadius: "4px", overflow: "hidden" }}>
                <div style={{ width: `${MOCK_ANALYSIS_DATA.atsMatch}%`, height: "100%", backgroundColor: "var(--color-maroon)" }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-small" style={{ fontWeight: 600, marginBottom: "6px" }}>
                <span>Keyword Alignment & Frequency</span>
                <span>{MOCK_ANALYSIS_DATA.keywordMatch}%</span>
              </div>
              <div style={{ height: "8px", backgroundColor: "var(--bg-paper-darker)", borderRadius: "4px", overflow: "hidden" }}>
                <div style={{ width: `${MOCK_ANALYSIS_DATA.keywordMatch}%`, height: "100%", backgroundColor: "var(--color-maroon)" }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-small" style={{ fontWeight: 600, marginBottom: "6px" }}>
                <span>Content Quality & Metric Impact</span>
                <span>{MOCK_ANALYSIS_DATA.contentQuality}%</span>
              </div>
              <div style={{ height: "8px", backgroundColor: "var(--bg-paper-darker)", borderRadius: "4px", overflow: "hidden" }}>
                <div style={{ width: `${MOCK_ANALYSIS_DATA.contentQuality}%`, height: "100%", backgroundColor: "var(--bg-black)" }} />
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Missing Keywords & Found Keywords Matrix */}
      <div style={{ marginBottom: "36px" }}>
        <SectionLabel number="02" title="KEYWORD GAP ANALYSIS" />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", marginTop: "16px" }}>
          {/* Missing Keywords Pill Cloud */}
          <Card bordered style={{ backgroundColor: "var(--bg-paper)" }}>
            <h4 style={{ marginBottom: "12px", display: "flex", alignItems: "center", gap: "8px" }}>
              <AlertTriangle size={18} style={{ color: "#B91C1C" }} />
              <span>Missing High-Priority Keywords</span>
            </h4>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {MOCK_ANALYSIS_DATA.missingKeywords.map((kw, i) => (
                <span
                  key={i}
                  style={{
                    backgroundColor: "var(--badge-warning-bg)",
                    color: "var(--badge-warning-text)",
                    padding: "6px 12px",
                    borderRadius: "var(--radius-full)",
                    fontSize: "0.825rem",
                    fontWeight: 600,
                    border: "1px solid var(--border-subtle)"
                  }}
                >
                  + {kw.word} ({kw.frequency})
                </span>
              ))}
            </div>
          </Card>

          {/* Found Keywords Cloud */}
          <Card bordered style={{ backgroundColor: "var(--bg-paper)" }}>
            <h4 style={{ marginBottom: "12px", display: "flex", alignItems: "center", gap: "8px" }}>
              <CheckCircle2 size={18} style={{ color: "#15803D" }} />
              <span>Successfully Matched Terms ({MOCK_ANALYSIS_DATA.foundKeywords.length})</span>
            </h4>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {MOCK_ANALYSIS_DATA.foundKeywords.map((kw, i) => (
                <span
                  key={i}
                  style={{
                    backgroundColor: "var(--badge-success-bg)",
                    color: "var(--badge-success-text)",
                    padding: "6px 12px",
                    borderRadius: "var(--radius-full)",
                    fontSize: "0.825rem",
                    fontWeight: 600,
                    border: "1px solid var(--border-subtle)"
                  }}
                >
                  ✓ {kw}
                </span>
              ))}
            </div>
          </Card>
        </div>
      </div>

      {/* Actionable Bullet Point Improvements */}
      <div>
        <SectionLabel number="03" title="SMART BULLET REFACTORING SUGGESTIONS" />
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginTop: "16px" }}>
          {MOCK_ANALYSIS_DATA.bulletSuggestions.map((sug, idx) => (
            <Card key={idx} bordered style={{ backgroundColor: "var(--bg-card)" }}>
              <div className="flex justify-between items-center" style={{ marginBottom: "12px" }}>
                <span className="eyebrow eyebrow-maroon">BULLET REFACTOR #{idx + 1}</span>
                <span className="badge badge-maroon">{sug.impactGain}</span>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div style={{ backgroundColor: "var(--bg-paper-darker)", padding: "12px", borderRadius: "var(--radius-sm)" }}>
                  <span className="text-micro" style={{ color: "var(--text-muted)", display: "block", marginBottom: "4px" }}>ORIGINAL BULLET</span>
                  <p className="text-small" style={{ margin: 0, textDecoration: "line-through" }}>{sug.original}</p>
                </div>
                <div style={{ backgroundColor: "var(--bg-paper-light)", border: "1px solid var(--border-strong)", padding: "12px", borderRadius: "var(--radius-sm)" }}>
                  <span className="text-micro" style={{ color: "var(--color-maroon)", fontWeight: 700, display: "block", marginBottom: "4px" }}>REFACTORED HIGH-IMPACT BULLET</span>
                  <p className="text-small" style={{ margin: 0, fontWeight: 600 }}>{sug.improved}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ResumeAnalysis;
