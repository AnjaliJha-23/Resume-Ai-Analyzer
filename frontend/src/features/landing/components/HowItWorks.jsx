import React from "react";
import { Upload, FileSearch, Sparkles, Download } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      num: "01",
      icon: Upload,
      title: "INPUT RESUME",
      desc: "Start with pre-loaded editorial data or input your current career details into the builder."
    },
    {
      num: "02",
      icon: FileSearch,
      title: "ANALYZE MATCH",
      desc: "Compare your resume against target job description requirements to identify keyword gaps."
    },
    {
      num: "03",
      icon: Sparkles,
      title: "REFACTOR BULLETS",
      desc: "Enhance achievement descriptions with quantified metrics and select an editorial template."
    },
    {
      num: "04",
      icon: Download,
      title: "EXPORT DOCUMENT",
      desc: "Generate clean, print-ready PDF resumes optimized for ATS screeners and recruiter review."
    }
  ];

  return (
    <section
      style={{
        padding: "80px 0",
        backgroundColor: "var(--color-maroon)",
        color: "var(--bg-paper)",
        borderBottom: "1px solid var(--border-strong)"
      }}
    >
      <div className="container">
        <div style={{ marginBottom: "56px", textAlign: "center" }}>
          <div className="eyebrow" style={{ color: "rgba(245, 243, 233, 0.75)" }}>
            [ 02 / WORKFLOW PROCESS ]
          </div>
          <h2
            className="h2"
            style={{
              color: "var(--bg-paper)",
              fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              marginTop: "8px"
            }}
          >
            FOUR STEPS TO AN INTERVIEW-READY RESUME
          </h2>
        </div>

        {/* Editorial Timeline Flow — Full-Width Deep Maroon Section */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "32px",
            position: "relative"
          }}
          className="how-it-works-timeline"
        >
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                style={{
                  position: "relative",
                  paddingRight: "12px"
                }}
              >
                {/* Connecting Horizontal Line (desktop) */}
                {idx < steps.length - 1 && (
                  <div
                    style={{
                      position: "absolute",
                      top: "28px",
                      right: "-16px",
                      width: "32px",
                      height: "1px",
                      backgroundColor: "rgba(245, 243, 233, 0.3)"
                    }}
                    className="timeline-line-connector"
                  />
                )}

                {/* Step Header: Large Number + Icon */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "16px",
                    borderBottom: "1px solid rgba(245, 243, 233, 0.25)",
                    paddingBottom: "12px"
                  }}
                >
                  <span
                    className="font-display"
                    style={{
                      fontSize: "3rem",
                      fontWeight: 700,
                      lineHeight: 1,
                      color: "var(--bg-paper)"
                    }}
                  >
                    {step.num}
                  </span>
                  <div
                    style={{
                      width: "34px",
                      height: "34px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(245, 243, 233, 0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--bg-paper)"
                    }}
                  >
                    <Icon size={16} />
                  </div>
                </div>

                {/* Step Title & Text */}
                <h3
                  className="h3"
                  style={{
                    color: "var(--bg-paper)",
                    fontSize: "1.05rem",
                    marginBottom: "8px",
                    letterSpacing: "0.04em"
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "rgba(245, 243, 233, 0.8)",
                    lineHeight: 1.6,
                    margin: 0
                  }}
                >
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
