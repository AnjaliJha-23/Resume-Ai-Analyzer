import React, { useState } from "react";
import { useApp } from "../../context/AppContext";
import { FileText, ArrowUpRight, UserCheck } from "lucide-react";

export const Navbar = () => {
  const { currentView, navigateTo, openAuth, user } = useApp();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { id: "landing", label: "Overview" },
    { id: "dashboard", label: "Dashboard" },
    { id: "builder", label: "Resume Builder" },
    { id: "analysis", label: "ATS Analysis" },
    { id: "templates", label: "Templates" },
  ];

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        backgroundColor: "var(--bg-paper)",
        borderBottom: "1px solid var(--border-subtle)",
        transition: "all var(--transition-fast)"
      }}
    >
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "72px" }}>
        {/* Brand Wordmark */}
        <button
          onClick={() => navigateTo("landing")}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: 0
          }}
        >
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
            <FileText size={20} />
          </div>
          <div style={{ textAlign: "left" }}>
            <span className="font-display" style={{ fontSize: "1.5rem", fontWeight: 700, letterSpacing: "0.04em" }}>
              RESUME<span style={{ color: "var(--color-maroon)" }}>AI</span>
            </span>
          </div>
        </button>

        {/* Center Nav Links */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "28px"
          }}
          className={`desktop-nav ${mobileOpen ? "mobile-open" : ""}`}
        >
          {navLinks.map((link) => {
            const isActive = currentView === link.id;
            return (
              <button
                key={link.id}
                onClick={() => {
                  navigateTo(link.id);
                  setMobileOpen(false);
                }}
                style={{
                  background: "none",
                  border: "none",
                  fontFamily: "var(--font-display)",
                  fontSize: "0.95rem",
                  fontWeight: isActive ? 700 : 500,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: isActive ? "var(--color-maroon)" : "var(--text-main)",
                  cursor: "pointer",
                  padding: "6px 0",
                  position: "relative",
                  borderBottom: isActive ? "2px solid var(--color-maroon)" : "2px solid transparent",
                  transition: "all var(--transition-fast)"
                }}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <button
            onClick={() => navigateTo("profile")}
            style={{
              background: "none",
              border: "1px solid var(--border-subtle)",
              borderRadius: "var(--radius-sm)",
              padding: "6px 14px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              cursor: "pointer",
              fontSize: "0.85rem",
              fontWeight: 600,
              color: "var(--text-main)"
            }}
          >
            <UserCheck size={15} style={{ color: "var(--color-maroon)" }} />
            <span>{user.name}</span>
          </button>

          <button
            onClick={() => openAuth("login")}
            className="btn btn-secondary btn-sm"
          >
            Log In
          </button>

          <button
            onClick={() => navigateTo("builder")}
            className="btn btn-primary btn-sm btn-square"
            style={{ display: "flex", alignItems: "center", gap: "6px" }}
          >
            <span>BUILD RESUME</span>
            <ArrowUpRight size={15} />
          </button>
        </div>
      </div>
    </header>
  );
};
