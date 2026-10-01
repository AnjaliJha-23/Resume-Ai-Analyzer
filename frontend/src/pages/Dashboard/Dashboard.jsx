import React from "react";
import { DashboardLayout } from "../../layouts/DashboardLayout";
import { useApp } from "../../context/AppContext";
import { StatCard } from "../../components/common/StatCard";
import { Card } from "../../components/common/Card";
import { Button } from "../../components/common/Button";
import { SectionLabel } from "../../components/common/SectionLabel";
import {
  FileText,
  BarChart3,
  Sparkles,
  Plus,
  ArrowUpRight,
  CheckCircle2,
  Copy,
  Trash2,
  Edit3
} from "lucide-react";

export const Dashboard = () => {
  const { user, resumesList, navigateTo, showToast, setResumesList } = useApp();

  const handleDuplicate = (resume) => {
    const dup = {
      ...resume,
      id: `res-${Date.now()}`,
      title: `${resume.title} (Copy)`,
      lastModified: "Just now"
    };
    setResumesList([dup, ...resumesList]);
    showToast(`Duplicated "${resume.title}" successfully.`);
  };

  const handleDelete = (id, title) => {
    setResumesList(resumesList.filter((r) => r.id !== id));
    showToast(`Deleted "${title}".`);
  };

  return (
    <DashboardLayout
      title={`WELCOME BACK, ${user.name.toUpperCase()}`}
      subtitle="Here is your resume engineering overview, ATS score status, and tailored documents."
    >
      {/* Overview Stats */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
          marginBottom: "36px"
        }}
      >
        <StatCard
          label="AVERAGE ATS SCORE"
          value={`${user.avgAtsScore}%`}
          subtext="High parser compliance tier"
          icon={BarChart3}
        />
        <StatCard
          label="ACTIVE RESUMES"
          value={resumesList.length}
          subtext="Tailored for specific roles"
          icon={FileText}
        />
        <StatCard
          label="ATS AUDITS RUN"
          value={user.analysesCount}
          subtext="14 job descriptions matched"
          icon={Sparkles}
        />
        <StatCard
          label="ACCOUNT STATUS"
          value="PRO TIER"
          subtext="Unlimited exports & templates"
          icon={CheckCircle2}
        />
      </div>

      {/* Quick Actions Bar */}
      <div style={{ marginBottom: "36px" }}>
        <SectionLabel number="01" title="QUICK WORKSPACE ACTIONS" />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "20px",
            marginTop: "12px"
          }}
        >
          <Card
            bordered
            hoverable
            style={{ backgroundColor: "var(--bg-paper)", cursor: "pointer" }}
            onClick={() => navigateTo("builder")}
          >
            <div className="flex justify-between items-center" style={{ marginBottom: "12px" }}>
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
                <Plus size={18} />
              </div>
              <ArrowUpRight size={16} style={{ color: "var(--color-maroon)" }} />
            </div>
            <h4 style={{ marginBottom: "4px" }}>Build New Resume</h4>
            <p className="text-small" style={{ color: "var(--text-muted)", margin: 0 }}>
              Start with an editorial template or import existing details.
            </p>
          </Card>

          <Card
            bordered
            hoverable
            style={{ backgroundColor: "var(--bg-paper)", cursor: "pointer" }}
            onClick={() => navigateTo("analysis")}
          >
            <div className="flex justify-between items-center" style={{ marginBottom: "12px" }}>
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
                <BarChart3 size={18} />
              </div>
              <ArrowUpRight size={16} style={{ color: "var(--color-maroon)" }} />
            </div>
            <h4 style={{ marginBottom: "4px" }}>Run ATS Audit</h4>
            <p className="text-small" style={{ color: "var(--text-muted)", margin: 0 }}>
              Paste target job ad to check missing keywords & formatting.
            </p>
          </Card>

          <Card
            bordered
            hoverable
            style={{ backgroundColor: "var(--bg-paper)", cursor: "pointer" }}
            onClick={() => navigateTo("templates")}
          >
            <div className="flex justify-between items-center" style={{ marginBottom: "12px" }}>
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
                <Sparkles size={18} />
              </div>
              <ArrowUpRight size={16} style={{ color: "var(--color-maroon)" }} />
            </div>
            <h4 style={{ marginBottom: "4px" }}>Browse Templates</h4>
            <p className="text-small" style={{ color: "var(--text-muted)", margin: 0 }}>
              Explore 6 high-contrast editorial layouts.
            </p>
          </Card>
        </div>
      </div>

      {/* Resumes Management List */}
      <div>
        <div className="flex justify-between items-end" style={{ marginBottom: "16px" }}>
          <SectionLabel number="02" title="YOUR TAILORED RESUMES" />
          <span className="text-small" style={{ color: "var(--text-muted)" }}>
            Showing {resumesList.length} documents
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {resumesList.map((res) => (
            <Card
              key={res.id}
              bordered
              style={{
                backgroundColor: "var(--bg-card)",
                display: "grid",
                gridTemplateColumns: "1fr auto",
                alignItems: "center",
                gap: "24px"
              }}
            >
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "6px" }}>
                  <h3 className="h3" style={{ fontSize: "1.2rem" }}>{res.title}</h3>
                  <span className="badge badge-maroon">ATS {res.atsScore}%</span>
                  <span className="badge badge-outline">{res.template}</span>
                </div>
                <div className="flex gap-lg text-small" style={{ color: "var(--text-muted)" }}>
                  <span>Target: <strong>{res.targetRole}</strong></span>
                  <span>Modified: {res.lastModified}</span>
                  <span>Status: <strong style={{ color: "var(--text-main)" }}>{res.status}</strong></span>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <Button
                  variant="primary"
                  size="sm"
                  className="btn-square"
                  onClick={() => navigateTo("builder")}
                  style={{ display: "flex", alignItems: "center", gap: "4px" }}
                >
                  <Edit3 size={14} />
                  <span>EDIT</span>
                </Button>

                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => navigateTo("analysis")}
                >
                  ANALYZE
                </Button>

                <button
                  onClick={() => handleDuplicate(res)}
                  className="btn-ghost"
                  style={{ padding: "8px", borderRadius: "var(--radius-xs)", cursor: "pointer" }}
                  title="Duplicate Resume"
                >
                  <Copy size={16} />
                </button>

                <button
                  onClick={() => handleDelete(res.id, res.title)}
                  className="btn-ghost"
                  style={{ padding: "8px", borderRadius: "var(--radius-xs)", cursor: "pointer", color: "var(--color-maroon)" }}
                  title="Delete Resume"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
