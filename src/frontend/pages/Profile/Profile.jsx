import React, { useState } from "react";
import { DashboardLayout } from "../../layouts/DashboardLayout";
import { useApp } from "../../context/AppContext";
import { Card } from "../../components/common/Card";
import { Button } from "../../components/common/Button";
import { SectionLabel } from "../../components/common/SectionLabel";
import { Save } from "lucide-react";

export const Profile = () => {
  const { user, setUser, showToast } = useApp();
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [role, setRole] = useState(user.role);
  const [location, setLocation] = useState(user.location);

  const handleSave = (e) => {
    e.preventDefault();
    setUser({
      ...user,
      name,
      email,
      role,
      location
    });
    showToast("Profile settings saved successfully.");
  };

  return (
    <DashboardLayout
      title="USER PROFILE & WORKSPACE SETTINGS"
      subtitle="Manage your personal account credentials, target roles, and resume preferences."
    >
      <form onSubmit={handleSave}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
          {/* Personal Info Card */}
          <Card bordered style={{ backgroundColor: "var(--bg-paper)", gridColumn: "span 2" }}>
            <SectionLabel number="01" title="ACCOUNT IDENTIFICATION" />
            
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginTop: "16px" }}>
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  className="input-field"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  className="input-field"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Primary Target Role</label>
                <input
                  type="text"
                  className="input-field"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Current Location</label>
                <input
                  type="text"
                  className="input-field"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
            </div>
          </Card>

          {/* Membership Plan Card */}
          <Card bordered style={{ backgroundColor: "var(--bg-card)" }}>
            <SectionLabel number="02" title="SUBSCRIPTION TIER" />
            <div style={{ marginTop: "16px" }}>
              <div className="flex justify-between items-center" style={{ marginBottom: "12px" }}>
                <span className="font-display" style={{ fontSize: "1.4rem", fontWeight: 700 }}>{user.memberTier}</span>
                <span className="badge badge-dark">ACTIVE</span>
              </div>
              <p className="text-small" style={{ color: "var(--text-muted)", marginBottom: "16px" }}>
                Unlimited ATS score audits, high-impact PDF exports, and complete access to all 6 editorial templates.
              </p>
              <span className="text-micro" style={{ color: "var(--text-subtle)" }}>Member since {user.memberSince}</span>
            </div>
          </Card>

          {/* Automation & Preferences Card */}
          <Card bordered style={{ backgroundColor: "var(--bg-card)" }}>
            <SectionLabel number="03" title="FRONTEND PREFERENCES" />
            <div style={{ marginTop: "16px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <label style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.9rem", cursor: "pointer" }}>
                <input type="checkbox" defaultChecked />
                <span>Auto-suggest missing technical keywords</span>
              </label>

              <label style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.9rem", cursor: "pointer" }}>
                <input type="checkbox" defaultChecked />
                <span>Live PDF preview synchronization</span>
              </label>

              <label style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.9rem", cursor: "pointer" }}>
                <input type="checkbox" defaultChecked />
                <span>Weekly ATS score performance digest</span>
              </label>
            </div>
          </Card>
        </div>

        <div style={{ marginTop: "24px" }}>
          <Button type="submit" variant="primary" className="btn-square" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Save size={16} />
            <span>SAVE PROFILE CHANGES</span>
          </Button>
        </div>
      </form>
    </DashboardLayout>
  );
};

export default Profile;
