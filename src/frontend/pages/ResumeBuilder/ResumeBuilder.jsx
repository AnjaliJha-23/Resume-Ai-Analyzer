import React, { useState } from "react";
import { BuilderLayout } from "../../layouts/BuilderLayout";
import { useApp } from "../../context/AppContext";
import { Card } from "../../components/common/Card";
import { Button } from "../../components/common/Button";
import { SectionLabel } from "../../components/common/SectionLabel";
import { RESUME_TEMPLATES } from "../../services/mock/templateData";
import {
  User,
  Briefcase,
  Wrench,
  FolderGit2,
  FileText,
  Plus,
  Sparkles
} from "lucide-react";

export const ResumeBuilder = () => {
  const { activeResume, updateResumeField, updateExperienceItem, addExperienceItem, activeTemplate, setActiveTemplate, showToast } = useApp();
  const [activeTab, setActiveTab] = useState("personal"); // 'personal' | 'summary' | 'experience' | 'skills' | 'projects'

  const sections = [
    { id: "personal", label: "Personal Info", icon: User },
    { id: "summary", label: "Executive Summary", icon: FileText },
    { id: "experience", label: "Work Experience", icon: Briefcase },
    { id: "skills", label: "Technical Skills", icon: Wrench },
    { id: "projects", label: "Projects & Certs", icon: FolderGit2 }
  ];

  return (
    <BuilderLayout>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "28px",
          minHeight: "calc(100vh - 180px)"
        }}
        className="builder-grid-responsive"
      >
        {/* LEFT PANE: Editor Controls */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {/* Section Selector Tabs */}
          <div
            style={{
              backgroundColor: "var(--bg-card)",
              border: "1px solid var(--border-strong)",
              borderRadius: "var(--radius-md)",
              padding: "6px",
              display: "flex",
              gap: "4px",
              overflowX: "auto"
            }}
          >
            {sections.map((sec) => {
              const Icon = sec.icon;
              const isActive = activeTab === sec.id;
              return (
                <button
                  key={sec.id}
                  onClick={() => setActiveTab(sec.id)}
                  style={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "6px",
                    padding: "10px 12px",
                    borderRadius: "var(--radius-sm)",
                    border: "none",
                    backgroundColor: isActive ? "var(--bg-black)" : "transparent",
                    color: isActive ? "var(--bg-paper)" : "var(--text-main)",
                    fontFamily: "var(--font-display)",
                    fontSize: "0.8rem",
                    fontWeight: isActive ? 600 : 500,
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    cursor: "pointer",
                    whiteSpace: "nowrap"
                  }}
                >
                  <Icon size={14} />
                  <span>{sec.label}</span>
                </button>
              );
            })}
          </div>

          {/* Form Content Area */}
          <Card bordered style={{ backgroundColor: "var(--bg-paper)", flex: 1, padding: "28px" }}>
            {activeTab === "personal" && (
              <div>
                <SectionLabel number="01" title="PERSONAL IDENTIFICATION" />
                <div style={{ marginTop: "16px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                  <div className="form-group" style={{ gridColumn: "span 2" }}>
                    <label className="form-label">Full Name</label>
                    <input
                      type="text"
                      className="input-field"
                      value={activeResume.personalInfo.fullName}
                      onChange={(e) => updateResumeField("personalInfo", "fullName", e.target.value)}
                    />
                  </div>

                  <div className="form-group" style={{ gridColumn: "span 2" }}>
                    <label className="form-label">Professional Headline / Target Role</label>
                    <input
                      type="text"
                      className="input-field"
                      value={activeResume.personalInfo.headline}
                      onChange={(e) => updateResumeField("personalInfo", "headline", e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Email Address</label>
                    <input
                      type="email"
                      className="input-field"
                      value={activeResume.personalInfo.email}
                      onChange={(e) => updateResumeField("personalInfo", "email", e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Phone Number</label>
                    <input
                      type="text"
                      className="input-field"
                      value={activeResume.personalInfo.phone}
                      onChange={(e) => updateResumeField("personalInfo", "phone", e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Location (City, Country)</label>
                    <input
                      type="text"
                      className="input-field"
                      value={activeResume.personalInfo.location}
                      onChange={(e) => updateResumeField("personalInfo", "location", e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Portfolio Website / GitHub</label>
                    <input
                      type="text"
                      className="input-field"
                      value={activeResume.personalInfo.website}
                      onChange={(e) => updateResumeField("personalInfo", "website", e.target.value)}
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === "summary" && (
              <div>
                <SectionLabel number="02" title="EXECUTIVE SUMMARY" />
                <div className="form-group" style={{ marginTop: "16px" }}>
                  <label className="form-label">Professional Summary (3-4 Sentences)</label>
                  <textarea
                    className="textarea-field"
                    style={{ minHeight: "160px" }}
                    value={activeResume.summary}
                    onChange={(e) => updateResumeField("summary", null, e.target.value)}
                  />
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.85rem", color: "var(--text-muted)" }}>
                  <Sparkles size={14} />
                  <span>Tip: Include core technical terms and overall years of experience.</span>
                </div>
              </div>
            )}

            {activeTab === "experience" && (
              <div>
                <div className="flex justify-between items-center" style={{ marginBottom: "16px" }}>
                  <SectionLabel number="03" title="WORK EXPERIENCE HISTORY" />
                  <Button variant="secondary" size="sm" onClick={addExperienceItem} style={{ borderRadius: "var(--radius-full)" }}>
                    <Plus size={14} />
                    <span>ADD POSITION</span>
                  </Button>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                  {activeResume.experience.map((exp, index) => (
                    <div
                      key={exp.id}
                      style={{
                        backgroundColor: "var(--bg-card)",
                        border: "1px solid var(--border-strong)",
                        borderRadius: "var(--radius-md)",
                        padding: "18px"
                      }}
                    >
                      <div className="flex justify-between items-center" style={{ marginBottom: "12px" }}>
                        <h4 style={{ margin: 0 }}>Position #{index + 1}</h4>
                      </div>

                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                        <div className="form-group">
                          <label className="form-label">Company Name</label>
                          <input
                            type="text"
                            className="input-field"
                            value={exp.company}
                            onChange={(e) => updateExperienceItem(index, "company", e.target.value)}
                          />
                        </div>

                        <div className="form-group">
                          <label className="form-label">Job Title / Role</label>
                          <input
                            type="text"
                            className="input-field"
                            value={exp.position}
                            onChange={(e) => updateExperienceItem(index, "position", e.target.value)}
                          />
                        </div>

                        <div className="form-group" style={{ gridColumn: "span 2" }}>
                          <label className="form-label">Impact Description / Bullet Points</label>
                          <textarea
                            className="textarea-field"
                            value={exp.description}
                            onChange={(e) => updateExperienceItem(index, "description", e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "skills" && (
              <div>
                <SectionLabel number="04" title="TECHNICAL TAXONOMY & SKILLS" />
                <div style={{ marginTop: "16px", display: "flex", flexDirection: "column", gap: "20px" }}>
                  {activeResume.skills.map((cat, idx) => (
                    <div key={idx} style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border-subtle)", padding: "16px", borderRadius: "var(--radius-md)" }}>
                      <h4 style={{ fontSize: "0.95rem", marginBottom: "8px" }}>{cat.category}</h4>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                        {cat.items.map((skill, sIdx) => (
                          <span key={sIdx} className="badge badge-dark">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "projects" && (
              <div>
                <SectionLabel number="05" title="PROJECTS & CERTIFICATIONS" />
                <div style={{ marginTop: "16px", display: "flex", flexDirection: "column", gap: "16px" }}>
                  {activeResume.projects.map((proj) => (
                    <div key={proj.id} style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border-subtle)", padding: "16px", borderRadius: "var(--radius-md)" }}>
                      <h4 style={{ marginBottom: "4px" }}>{proj.name} — <span style={{ fontWeight: 400 }}>{proj.role}</span></h4>
                      <p className="text-small" style={{ color: "var(--text-muted)", margin: 0 }}>{proj.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </Card>
        </div>

        {/* RIGHT PANE: Live Realistic Paper Preview */}
        <div style={{ position: "sticky", top: "100px", height: "fit-content" }}>
          {/* Template Selector Bar */}
          <div className="flex justify-between items-center" style={{ marginBottom: "12px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span className="eyebrow">LAYOUT:</span>
              <select
                className="select-field"
                style={{ padding: "4px 12px", width: "auto", fontSize: "0.85rem", fontWeight: 700 }}
                value={activeTemplate}
                onChange={(e) => {
                  setActiveTemplate(e.target.value);
                  showToast(`Applied template layout: ${e.target.value}`);
                }}
              >
                {RESUME_TEMPLATES.map((t) => (
                  <option key={t.id} value={t.id}>{t.name} ({t.category})</option>
                ))}
              </select>
            </div>
            <span className="badge badge-dark">LIVE SYNCED PREVIEW</span>
          </div>

          {/* Paper Sheet Preview */}
          <div
            style={{
              backgroundColor: "#FFFFFF",
              color: "#111111",
              border: "2px solid var(--border-strong)",
              borderRadius: "var(--radius-sm)",
              padding: "40px",
              boxShadow: "var(--shadow-lg)",
              minHeight: "640px",
              fontFamily: activeTemplate === "classic-serif" ? "Georgia, serif" : "var(--font-body)"
            }}
          >
            {/* Header / Name */}
            <div style={{ borderBottom: "2px solid #111111", paddingBottom: "16px", marginBottom: "20px" }}>
              <h1 className="font-display" style={{ fontSize: "2.4rem", fontWeight: 700, letterSpacing: "0.04em", margin: 0, textTransform: "uppercase" }}>
                {activeResume.personalInfo.fullName || "ANJALI JHA"}
              </h1>
              <p className="eyebrow" style={{ color: "#444440", fontSize: "0.8rem", marginTop: "4px" }}>
                {activeResume.personalInfo.headline}
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", fontSize: "0.8rem", color: "#555550", marginTop: "10px" }}>
                <span>{activeResume.personalInfo.email}</span>
                <span>•</span>
                <span>{activeResume.personalInfo.phone}</span>
                <span>•</span>
                <span>{activeResume.personalInfo.location}</span>
                <span>•</span>
                <span>{activeResume.personalInfo.website}</span>
              </div>
            </div>

            {/* Summary */}
            {activeResume.summary && (
              <div style={{ marginBottom: "20px" }}>
                <h4 className="font-display" style={{ fontSize: "0.95rem", textTransform: "uppercase", borderBottom: "1px solid #111111", paddingBottom: "4px", marginBottom: "8px" }}>
                  EXECUTIVE SUMMARY
                </h4>
                <p style={{ fontSize: "0.875rem", lineHeight: 1.5, color: "#222220", margin: 0 }}>
                  {activeResume.summary}
                </p>
              </div>
            )}

            {/* Experience */}
            <div style={{ marginBottom: "20px" }}>
              <h4 className="font-display" style={{ fontSize: "0.95rem", textTransform: "uppercase", borderBottom: "1px solid #111111", paddingBottom: "4px", marginBottom: "12px" }}>
                WORK EXPERIENCE
              </h4>
              {activeResume.experience.map((exp) => (
                <div key={exp.id} style={{ marginBottom: "14px" }}>
                  <div className="flex justify-between items-center" style={{ fontWeight: 700, fontSize: "0.9rem" }}>
                    <span>{exp.position} — <span style={{ fontWeight: 500 }}>{exp.company}</span></span>
                    <span style={{ fontSize: "0.8rem", color: "#666660" }}>{exp.startDate} – {exp.endDate}</span>
                  </div>
                  <p style={{ fontSize: "0.85rem", color: "#333330", marginTop: "4px", lineHeight: 1.4 }}>
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Skills */}
            <div>
              <h4 className="font-display" style={{ fontSize: "0.95rem", textTransform: "uppercase", borderBottom: "1px solid #111111", paddingBottom: "4px", marginBottom: "8px" }}>
                TECHNICAL SKILLS
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "0.825rem" }}>
                {activeResume.skills.map((sk, i) => (
                  <div key={i}>
                    <strong>{sk.category}:</strong> {sk.items.join(", ")}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </BuilderLayout>
  );
};

export default ResumeBuilder;
