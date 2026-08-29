import { useState } from "react";
import { 
  LayoutDashboard, 
  FileText, 
  Briefcase, 
  BarChart3, 
  History, 
  User, 
  Settings,
  PlusCircle,
  ArrowRight
} from "lucide-react";

const DashboardPreview = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const navItems = [
    { id: "overview", label: "Overview", icon: LayoutDashboard },
    { id: "resumes", label: "Resumes", icon: FileText },
    { id: "jobs", label: "Job Descriptions", icon: Briefcase },
    { id: "reports", label: "Reports", icon: BarChart3 },
    { id: "history", label: "History", icon: History },
    { id: "profile", label: "Profile", icon: User },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  const skillBars = [
    { name: "Skills Match", percentage: 92 },
    { name: "Keyword Match", percentage: 87 },
    { name: "Experience Match", percentage: 90 },
    { name: "Format Score", percentage: 88 },
  ];

  const missingKeywords = ["Node.js", "MongoDB", "REST API", "System Design", "AWS"];

  const suggestions = [
    "Add more quantified impact",
    "Highlight relevant projects",
    "Include missing keywords"
  ];

  return (
    <div className="dashboard-preview-card">
      {/* Mini Sidebar */}
      <aside className="preview-sidebar">
        <ul className="preview-nav-list">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <li key={item.id}>
                <button
                  className={`preview-nav-item ${isActive ? "active" : ""}`}
                  onClick={() => setActiveTab(item.id)}
                  type="button"
                >
                  <Icon size={15} />
                  <span>{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </aside>

      {/* Main Dashboard Content */}
      <div className="preview-main">
        {/* Header */}
        <div className="preview-header">
          <div>
            <h3 className="preview-title">Welcome back, Anjali 👋</h3>
            <p className="preview-subtitle">Here's how your resume is performing</p>
          </div>
        </div>

        {/* Score & Skill Bars Row */}
        <div className="preview-score-grid">
          {/* Circular Score Gauge */}
          <div className="score-gauge-card">
            <div className="gauge-wrapper">
              <svg viewBox="0 0 120 120" className="gauge-svg">
                {/* Background Track */}
                <circle
                  cx="60"
                  cy="60"
                  r="46"
                  className="gauge-track"
                />
                {/* Score Stroke */}
                <circle
                  cx="60"
                  cy="60"
                  r="46"
                  className="gauge-fill"
                  style={{
                    strokeDasharray: 289,
                    strokeDashoffset: 289 * (1 - 0.89),
                  }}
                />
              </svg>
              <div className="gauge-content">
                <span className="gauge-value">89%</span>
                <span className="gauge-status">Excellent Match</span>
              </div>
            </div>
            <span className="gauge-label">ATS Match Score</span>
          </div>

          {/* Linear Progress Bars */}
          <div className="skill-bars-card">
            {skillBars.map((bar) => (
              <div key={bar.name} className="skill-bar-row">
                <div className="skill-bar-info">
                  <span className="skill-bar-name">{bar.name}</span>
                  <span className="skill-bar-pct">{bar.percentage}%</span>
                </div>
                <div className="skill-bar-track">
                  <div 
                    className="skill-bar-fill"
                    style={{ width: `${bar.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Widgets Row */}
        <div className="preview-bottom-grid">
          {/* Missing Keywords Widget */}
          <div className="bottom-widget">
            <div className="widget-header">
              <h4>Top Missing Keywords</h4>
            </div>
            <div className="keywords-wrap">
              {missingKeywords.map((kw) => (
                <span key={kw} className="keyword-tag">
                  {kw}
                </span>
              ))}
              <span className="keyword-tag more">+</span>
            </div>
            <button className="widget-link-btn" type="button">
              <span>View All (12)</span>
              <ArrowRight size={12} />
            </button>
          </div>

          {/* AI Suggestions Widget */}
          <div className="bottom-widget">
            <div className="widget-header">
              <h4>AI Suggestions</h4>
            </div>
            <ul className="suggestions-list">
              {suggestions.map((sug, idx) => (
                <li key={idx} className="suggestion-item">
                  <PlusCircle size={13} className="sug-icon" />
                  <span>{sug}</span>
                </li>
              ))}
            </ul>
            <button className="widget-link-btn" type="button">
              <span>View Suggestions</span>
              <ArrowRight size={12} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPreview;
