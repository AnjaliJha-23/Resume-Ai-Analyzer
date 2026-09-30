import React from "react";

export const SectionLabel = ({ number, title, dark = false }) => {
  return (
    <div className={`eyebrow ${dark ? "eyebrow-dark" : ""}`}>
      {number && <span>[ {number} ]</span>}
      <span>{title}</span>
    </div>
  );
};
