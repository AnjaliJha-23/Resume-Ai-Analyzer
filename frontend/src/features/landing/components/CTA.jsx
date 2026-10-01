import React from "react";
import { Button } from "../../../components/common/Button";
import { useApp } from "../../../context/AppContext";
import { ArrowUpRight } from "lucide-react";

export const CTA = () => {
  const { navigateTo } = useApp();

  return (
    <section
      style={{
        padding: "88px 0",
        backgroundColor: "var(--color-maroon)",
        color: "var(--bg-paper)",
        borderTop: "2px solid var(--border-strong)"
      }}
    >
      <div className="container" style={{ textAlign: "center" }}>
        <span className="eyebrow" style={{ color: "rgba(245, 243, 233, 0.75)", marginBottom: "16px", display: "inline-block" }}>
          [ EDITORIAL WORKSPACE ACCESS ]
        </span>

        <h2
          className="h2"
          style={{
            color: "var(--bg-paper)",
            fontSize: "clamp(1.8rem, 4vw, 3rem)",
            marginBottom: "20px"
          }}
        >
          READY TO BUILD AN INTERVIEW-READY RESUME?
        </h2>

        <p
          style={{
            color: "rgba(245, 243, 233, 0.85)",
            fontSize: "1.05rem",
            maxWidth: "580px",
            margin: "0 auto 36px auto",
            lineHeight: 1.6
          }}
        >
          Structure your career achievements with ResumeAI's editorial builder and real-time ATS analysis tools. Fast, interactive, and completely frontend-driven.
        </p>

        <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
          <Button
            variant="square"
            size="lg"
            onClick={() => navigateTo("builder")}
            style={{
              backgroundColor: "var(--bg-paper)",
              color: "var(--color-maroon)",
              borderColor: "var(--bg-paper)",
              fontWeight: 700,
              display: "flex",
              alignItems: "center",
              gap: "8px"
            }}
          >
            <span>OPEN RESUME BUILDER</span>
            <ArrowUpRight size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
};
