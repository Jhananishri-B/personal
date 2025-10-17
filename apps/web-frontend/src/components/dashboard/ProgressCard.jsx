import React from "react";

export default function ProgressCard({ title, value }) {
  return (
    <div className="progress-card">
      <h4>{title}</h4>
      <div className="value">{value}</div>
    </div>
  );
}