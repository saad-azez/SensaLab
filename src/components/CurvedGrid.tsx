import React from "react";

const CurvedGrid: React.FC = () => {
  return (
    <div className="curved-grid">
      {/* Spline mount point */}
      <div id="spline-target" className="curved-grid__spline" />

      {/* Soft gradient overlay */}
      <div className="curved-grid__overlay" />
    </div>
  );
};

export default CurvedGrid;
