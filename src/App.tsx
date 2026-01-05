
import React, { useEffect, useState } from "react";
import Lenis from "lenis";
import OverlayText from "./components/OverlayText";
import CurvedGrid from "./components/CurvedGrid";
import InteractiveVideoPlane from "./components/InteractivePlaneVideo";
import PersistentCube from "./components/PresistentCube";
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
      duration: 1.5,
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

    const timer = setTimeout(() => setIsRevealing(true), 300);

    return () => {
      clearTimeout(timer);
      lenis.destroy();
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="app-main-container">
      {/* 1. FIXED PERSISTENT BACKGROUND & 3D ELEMENTS */}
      <div className="fixed-bg-layer">
        <CurvedGrid />
        <PersistentCube show={isRevealing} />
      </div>

      {/* 2. STICKY SCENE CONTAINER (The visual stage) */}
      <div className="sticky-scene-wrapper">
        <div className="scene-fixed-content">
          {/* Text exits as progress increases */}
          <OverlayText show={isRevealing} />

          {/* Plane enters as progress increases */}
          <InteractiveVideoPlane progress={scrollProgress} />
        </div>
      </div>

      {/* 3. SCROLL SURFACE (The depth) */}
      <div className="scroll-surface" style={{ height: "300vh" }} />
    </div>
  );
};

export default App;
