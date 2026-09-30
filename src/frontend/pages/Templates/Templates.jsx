import React, { useState } from "react";
import { DashboardLayout } from "../../layouts/DashboardLayout";
import { RESUME_TEMPLATES } from "../../services/mock/templateData";
import { Card } from "../../components/common/Card";
import { Button } from "../../components/common/Button";
import { Modal } from "../../components/common/Modal";
import { useApp } from "../../context/AppContext";
import { ArrowUpRight, Eye } from "lucide-react";

export const Templates = () => {
  const { navigateTo } = useApp();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [previewTemplate, setPreviewTemplate] = useState(null);

  const categories = ["All", "Editorial", "Executive", "Engineering", "Creative", "Academic"];

  const filteredTemplates = selectedCategory === "All"
    ? RESUME_TEMPLATES
    : RESUME_TEMPLATES.filter((t) => t.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  return (
    <DashboardLayout
      title="EDITORIAL TEMPLATE GALLERY"
      subtitle="Select a high-contrast template layout engineered for maximum legibility and ATS parser pass rates."
    >
      {/* Category Filter Pills */}
      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "32px" }}>
        {categories.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "0.85rem",
                fontWeight: isActive ? 700 : 500,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                padding: "8px 18px",
                borderRadius: "var(--radius-full)",
                border: "1px solid var(--border-strong)",
                backgroundColor: isActive ? "var(--bg-black)" : "transparent",
                color: isActive ? "var(--bg-paper)" : "var(--text-main)",
                cursor: "pointer",
                transition: "all var(--transition-fast)"
              }}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Templates Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "28px"
        }}
      >
        {filteredTemplates.map((tpl) => (
          <Card
            key={tpl.id}
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
                <span className="badge badge-dark">{tpl.tag}</span>
                <span className="eyebrow" style={{ fontSize: "0.7rem" }}>{tpl.badge}</span>
              </div>

              <h3 className="h3" style={{ fontSize: "1.4rem", marginBottom: "8px" }}>
                {tpl.name}
              </h3>
              <p className="body-text" style={{ fontSize: "0.9rem", marginBottom: "24px" }}>
                {tpl.description}
              </p>
            </div>

            {/* Template Visual Representation */}
            <div>
              <div
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid var(--border-strong)",
                  padding: "20px",
                  borderRadius: "var(--radius-xs)",
                  marginBottom: "16px",
                  cursor: "pointer"
                }}
                onClick={() => setPreviewTemplate(tpl)}
              >
                <div style={{ height: "14px", width: "45%", backgroundColor: tpl.accentColor, marginBottom: "8px" }} />
                <div style={{ height: "6px", width: "75%", backgroundColor: "var(--border-subtle)", marginBottom: "12px" }} />
                <div style={{ height: "6px", width: "100%", backgroundColor: "var(--border-subtle)", marginBottom: "4px" }} />
                <div style={{ height: "6px", width: "90%", backgroundColor: "var(--border-subtle)", marginBottom: "4px" }} />
                <div style={{ height: "6px", width: "60%", backgroundColor: "var(--border-subtle)" }} />
              </div>

              <div style={{ display: "flex", gap: "8px" }}>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => setPreviewTemplate(tpl)}
                  style={{ flex: 1, borderRadius: "var(--radius-sm)" }}
                >
                  <Eye size={14} />
                  <span>PREVIEW</span>
                </Button>

                <Button
                  variant="primary"
                  size="sm"
                  className="btn-square"
                  onClick={() => navigateTo("builder", { templateId: tpl.id })}
                  style={{ flex: 2, display: "flex", alignItems: "center", justifyContent: "center", gap: "6px" }}
                >
                  <span>USE TEMPLATE</span>
                  <ArrowUpRight size={14} />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Preview Modal */}
      {previewTemplate && (
        <Modal
          isOpen={!!previewTemplate}
          onClose={() => setPreviewTemplate(null)}
          title={`LAYOUT PREVIEW: ${previewTemplate.name.toUpperCase()}`}
        >
          <div style={{ backgroundColor: "#FFFFFF", border: "1px solid var(--border-strong)", padding: "28px", borderRadius: "var(--radius-sm)", marginBottom: "20px" }}>
            <div style={{ borderBottom: "2px solid #111111", paddingBottom: "12px", marginBottom: "16px" }}>
              <h2 className="font-display" style={{ fontSize: "1.8rem", margin: 0 }}>ANJALI JHA</h2>
              <p className="eyebrow" style={{ fontSize: "0.75rem", marginTop: "4px" }}>SENIOR FULL STACK ARCHITECT • BENGALURU, IN</p>
            </div>
            <p className="text-small" style={{ lineHeight: 1.5, color: "#333330" }}>
              {previewTemplate.description} Engineered to comply with ATS parsers and optimize recruiter dwell time.
            </p>
          </div>

          <Button
            variant="primary"
            className="btn-square w-full"
            onClick={() => {
              const tId = previewTemplate.id;
              setPreviewTemplate(null);
              navigateTo("builder", { templateId: tId });
            }}
          >
            USE THIS TEMPLATE IN RESUME BUILDER
          </Button>
        </Modal>
      )}
    </DashboardLayout>
  );
};

export default Templates;
