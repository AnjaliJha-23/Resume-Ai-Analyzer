import React from "react";
import { Navbar } from "../components/navigation/Navbar";
import { Footer } from "../components/navigation/Footer";
import { AuthModal } from "../components/auth/AuthModal";
import { Toast } from "../components/common/Toast";
import { useApp } from "../context/AppContext";
import { LayoutDashboard, FileText, BarChart3, Grid, User, PlusCircle } from "lucide-react";

export const DashboardLayout = ({ children, title, subtitle }) => {
  const { currentView, navigateTo } = useApp();

  const sidebarLinks = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "builder", label: "Resume Builder", icon: FileText },
    { id: "analysis", label: "ATS Score Analysis", icon: BarChart3 },
    { id: "templates", label: "Template Library", icon: Grid },
    { id: "profile", label: "Profile Settings", icon: User },
  ];

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", backgroundColor: "var(--bg-paper)" }}>
      <Navbar />
      
      <div className="container" style={{ flex: 1, paddingTop: "40px", paddingBottom: "60px" }}>
        {/* Workspace Banner */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            borderBottom: "2px solid var(--border-strong)",
            paddingBottom: "24px",
            marginBottom: "32px",
            flexWrap: "wrap",
            gap: "16px"
          }}
        >
          <div>
            <span className="eyebrow eyebrow-maroon" style={{ marginBottom: "8px", display: "block" }}>
              [ WORKSPACE AREA ]
            </span>
            <h1 className="h2">{title || "EDITORIAL WORKSPACE"}</h1>
            {subtitle && <p className="body-text" style={{ marginTop: "4px" }}>{subtitle}</p>}
          </div>

          <button
            onClick={() => navigateTo("builder")}
            className="btn btn-primary btn-square"
            style={{ display: "flex", alignItems: "center", gap: "8px" }}
          >
            <PlusCircle size={16} />
            <span>NEW RESUME</span>
          </button>
        </div>

        {/* Workspace Body: Sidebar + Main */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "240px 1fr",
            gap: "32px"
          }}
          className="dashboard-grid-layout"
        >
          {/* Sub Navigation Sidebar */}
          <aside>
            <div
              style={{
                backgroundColor: "var(--bg-card)",
                border: "1px solid var(--border-strong)",
                borderRadius: "var(--radius-md)",
                padding: "12px",
                display: "flex",
                flexDirection: "column",
                gap: "6px"
              }}
            >
              {sidebarLinks.map((item) => {
                const Icon = item.icon;
                const isActive = currentView === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => navigateTo(item.id)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      padding: "12px 16px",
                      borderRadius: "var(--radius-sm)",
                      border: "none",
                      backgroundColor: isActive ? "var(--color-maroon)" : "transparent",
                      color: isActive ? "var(--text-inverse)" : "var(--text-main)",
                      fontFamily: "var(--font-display)",
                      fontSize: "0.875rem",
                      fontWeight: isActive ? 600 : 500,
                      letterSpacing: "0.04em",
                      textTransform: "uppercase",
                      cursor: "pointer",
                      textAlign: "left",
                      transition: "all var(--transition-fast)"
                    }}
                  >
                    <Icon size={16} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </aside>

          {/* Main Workspace View Content */}
          <main>{children}</main>
        </div>
      </div>

      <Footer />
      <AuthModal />
      <Toast />
    </div>
  );
};
