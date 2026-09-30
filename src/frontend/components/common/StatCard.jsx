import React from "react";
import { Card } from "./Card";

export const StatCard = ({ label, value, subtext, icon: Icon, highlight = false }) => {
  return (
    <Card bordered className={`stat-card ${highlight ? "highlight" : ""}`}>
      <div className="flex justify-between items-center" style={{ marginBottom: "12px" }}>
        <span className="eyebrow">{label}</span>
        {Icon && <Icon size={18} style={{ opacity: 0.7 }} />}
      </div>
      <div className="font-display" style={{ fontSize: "2.4rem", fontWeight: 700, lineHeight: 1, marginBottom: "6px" }}>
        {value}
      </div>
      {subtext && <p className="text-micro" style={{ color: "var(--text-muted)", margin: 0 }}>{subtext}</p>}
    </Card>
  );
};
