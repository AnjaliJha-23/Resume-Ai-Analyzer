import React from "react";
import { SectionLabel } from "../common/SectionLabel";
import { Button } from "../common/Button";
import { RESUME_TEMPLATES } from "../../services/mock/templateData";
import { useApp } from "../../context/AppContext";
import { ArrowUpRight } from "lucide-react";

export const TemplatePreview = () => {
  const { navigateTo } = useApp();

  return (
    <section style={{ padding: "80px 0", borderBottom: "1px solid var(--border-subtle)", backgroundColor: "var(--bg-paper)" }}>
      <div className="container">
        <div className="flex justify-between items-end" style={{ marginBottom: "40px", flexWrap: "wrap", gap: "16px" }}>
          <div>
            <SectionLabel number="05" title="EDITORIAL TEMPLATE CATALOG" />
            <h2 className="h2" style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", marginTop: "8px" }}>
              PUBLICATION-GRADE RESUME LAYOUTS
            </h2>
          </div>
          <Button
            variant="secondary"
            onClick={() => navigateTo("templates")}
            style={{ borderRadius: "var(--radius-full)" }}
          >
            <span>VIEW ALL 6 TEMPLATES</span>
          </Button>
        </div>

        {/* Physical Paper Document Preview Sheets */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "28px"
          }}
        >
          {RESUME_TEMPLATES.slice(0, 3).map((tpl) => (
            <div
              key={tpl.id}
              style={{
                backgroundColor: "#FFFFFF",
                border: "2px solid var(--border-strong)",
                borderRadius: "var(--radius-md)",
                padding: "24px",
                boxShadow: "var(--shadow-md)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
                transition: "transform var(--transition-fast)"
              }}
              className="template-paper-card"
            >
              <div>
                {/* Paper Header / Metadata */}
                <div className="flex justify-between items-center" style={{ marginBottom: "16px", borderBottom: "1px solid var(--border-subtle)", paddingBottom: "10px" }}>
                  <span className="badge badge-maroon" style={{ fontSize: "0.65rem" }}>{tpl.tag}</span>
                  <span className="eyebrow" style={{ fontSize: "0.65rem", color: "var(--text-muted)" }}>{tpl.badge}</span>
                </div>

                {/* Paper Document Layout Simulator */}
                <div
                  style={{
                    backgroundColor: "var(--bg-paper-light)",
                    border: "1px solid var(--border-strong)",
                    padding: "20px",
                    borderRadius: "2px",
                    marginBottom: "20px",
                    minHeight: "180px",
                    fontFamily: tpl.id === "classic-serif" ? "Georgia, serif" : "var(--font-body)"
                  }}
                >
                  <div style={{ height: "12px", width: "50%", backgroundColor: "var(--color-maroon)", marginBottom: "6px" }} />
                  <div style={{ height: "4px", width: "70%", backgroundColor: "var(--border-subtle)", marginBottom: "16px" }} />
                  
                  <div style={{ display: "flex", gap: "10px", marginBottom: "8px" }}>
                    <div style={{ flex: 1, height: "6px", backgroundColor: "var(--border-subtle)" }} />
                    <div style={{ flex: 2, height: "6px", backgroundColor: "var(--border-subtle)" }} />
                  </div>
                  <div style={{ height: "6px", width: "90%", backgroundColor: "var(--border-subtle)", marginBottom: "4px" }} />
                  <div style={{ height: "6px", width: "80%", backgroundColor: "var(--border-subtle)", marginBottom: "12px" }} />
                  
                  <div style={{ height: "6px", width: "40%", backgroundColor: "var(--color-maroon)", marginBottom: "4px" }} />
                  <div style={{ height: "6px", width: "95%", backgroundColor: "var(--border-subtle)" }} />
                </div>

                <h3 className="h3" style={{ fontSize: "1.2rem", marginBottom: "4px" }}>
                  {tpl.name}
                </h3>
                <p className="body-text" style={{ fontSize: "0.875rem", marginBottom: "20px", color: "var(--text-muted)" }}>
                  {tpl.description}
                </p>
              </div>

              <Button
                variant="primary"
                className="btn-square w-full"
                onClick={() => navigateTo("builder", { templateId: tpl.id })}
                style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "6px" }}
              >
                <span>USE {tpl.name.toUpperCase()}</span>
                <ArrowUpRight size={15} />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
