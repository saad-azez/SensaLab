
import React, { Suspense, useEffect, useRef } from "react";
import Spline from "@splinetool/react-spline";

const CurvedGrid: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const runAudit = () => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      // console.log("--- CurvedGrid Layout Audit ---");
      // console.log(`Dimensions: ${rect.width}x${rect.height}`);
      if (rect.height === 0) {
        // console.warn("WARNING: CurvedGrid height is 0px. Checking parent constraints...");
      }
    }
  };

  useEffect(() => {
    runAudit();
    window.addEventListener("resize", runAudit);
    return () => window.removeEventListener("resize", runAudit);
  }, []);

  const handleLoad = (splineApp: any) => {
    // console.log("Spline: Scene ready.");
    // In Webflow, we sometimes need to force a small resize trigger to get Spline to fill the canvas correctly
    if (splineApp && typeof splineApp.setSize === "function") {
      const rect = containerRef.current?.getBoundingClientRect();
      if (rect) splineApp.setSize(rect.width, rect.height);
    }
  };

  const handleError = (e: any) => {
    // console.error("Spline: Loading failed.", e);
  };

  return (
    <div ref={containerRef} className="curved-grid-container">
      <Suspense fallback={<div className="spline-loading-placeholder" />}>
        <Spline
          scene="https://prod.spline.design/BgQPEjgRtIEYPM9m/scene.splinecode"
          onLoad={handleLoad}
          onError={handleError}
          className="spline-runtime-canvas"
        />
      </Suspense>

      <div className="grid-overlay-vignette" />
    </div>
  );
};

export default CurvedGrid;
