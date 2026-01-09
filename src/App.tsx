import React, { useEffect, useState } from "react";
import Lenis from "lenis";
import OverlayText from "./components/OverlayText";
import CurvedGrid from "./components/CurvedGrid";
import InteractiveVideoPlane from "./components/InteractivePlaneVideo";
import PersistentCube from "./components/PresistentCube";
import WorkSection from "./components/WorkSection";
import FinalSection from "./components/FinalSection";
import type { LenisScrollDetail } from "./components/types";
import "./App.css";
const App: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isRevealing, setIsRevealing] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      setScrollProgress(lenis.progress);

      window.dispatchEvent(new CustomEvent("lenis-scroll", {
        detail: {
          scroll: lenis.scroll,
          limit: lenis.limit,
          progress: lenis.progress,
          velocity: lenis.velocity,
        } as LenisScrollDetail,
      }));

      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    const timer = setTimeout(() => setIsRevealing(true), 400);

    return () => {
      clearTimeout(timer);
      lenis.destroy();
      cancelAnimationFrame(rafId);
    };
  }, []);
  return (
    <div className="app-main-container">
      {/* 1. FIXED PERSISTENT BACKGROUND */}
      <div className="fixed-bg-layer">
        <CurvedGrid />
      </div>
      code
      Code
      {/* 2. THE CUBE (Top Level for max visibility) */}
      <PersistentCube show={isRevealing} />

      {/* 3. STICKY SCENE CONTAINER */}
      <div className="sticky-scene-wrapper">
        <div className="scene-fixed-content">
          <OverlayText show={isRevealing} />
          <InteractiveVideoPlane />
          <WorkSection progress={scrollProgress} />
          <FinalSection />
        </div>
      </div>

      {/* 4. SCROLL SURFACE (Depth for Lenis) */}
      <div className="scroll-surface" style={{ height: "400vh" }} />
    </div>
  );
};
export default App;