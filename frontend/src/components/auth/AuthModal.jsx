import React, { useState } from "react";
import { Modal } from "../common/Modal";
import { Button } from "../common/Button";
import { useApp } from "../../context/AppContext";

export const AuthModal = () => {
  const { isAuthModalOpen, closeAuth, authMode, openAuth, showToast, navigateTo } = useApp();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;

    showToast(`Welcome back! Successfully logged in as ${email}`);
    closeAuth();
    navigateTo("dashboard");
  };

  return (
    <Modal
      isOpen={isAuthModalOpen}
      onClose={closeAuth}
      title={authMode === "login" ? "ACCOUNT SIGN IN" : "CREATE RESUMEAI ACCOUNT"}
    >
      <form onSubmit={handleSubmit}>
        <p className="text-small" style={{ marginBottom: "20px" }}>
          {authMode === "login"
            ? "Enter your credentials to access your saved resumes and ATS score history."
            : "Get instant access to AI resume tailoring, ATS optimization, and editorial templates."}
        </p>

        <div className="form-group">
          <label className="form-label">Email Address</label>
          <input
            type="email"
            className="input-field"
            placeholder="sarah@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="input-field"
            placeholder="••••••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div style={{ marginTop: "24px", display: "flex", flexDirection: "column", gap: "12px" }}>
          <Button type="submit" variant="primary" style={{ width: "100%" }}>
            {authMode === "login" ? "Sign In to ResumeAI" : "Create Free Account"}
          </Button>

          <div style={{ textAlign: "center", fontSize: "0.85rem", color: "var(--text-muted)" }}>
            {authMode === "login" ? (
              <span>
                Don't have an account?{" "}
                <button
                  type="button"
                  onClick={() => openAuth("signup")}
                  style={{ background: "none", border: "none", color: "var(--color-maroon)", fontWeight: 700, cursor: "pointer", textDecoration: "underline" }}
                >
                  Sign Up
                </button>
              </span>
            ) : (
              <span>
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={() => openAuth("login")}
                  style={{ background: "none", border: "none", color: "var(--color-maroon)", fontWeight: 700, cursor: "pointer", textDecoration: "underline" }}
                >
                  Sign In
                </button>
              </span>
            )}
          </div>
        </div>
      </form>
    </Modal>
  );
};
