
import React, { useEffect, useState } from "react";
import Lenis from "lenis";
import OverlayText from "./components/OverlayText";
import CurvedGrid from "./components/CurvedGrid";
import PersistentCube from "./components/PresistentCube";
import type { LenisScrollDetail } from "./components/types";
import "./App.css";

const App: React.FC = () => {
  const [isRevealing, setIsRevealing] = useState(false);

  useEffect(() => {
    // 1. Reset scroll position immediately on mount for reliable entrance
    window.scrollTo(0, 0);
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // 2. Initialize Lenis for award-winning smooth motion
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
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

    // 3. Trigger entrance sequence after a short delay
    const timer = setTimeout(() => {
      setIsRevealing(true);
    }, 150);

    return () => {
      clearTimeout(timer);
      lenis.destroy();
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="app-container">
      {/* Depth Layer 0: Background Spline */}
      <div className="bg-layer">
        <CurvedGrid />
      </div>

      {/* Depth Layer 1: Persistent WebGL Cube */}
      <PersistentCube show={isRevealing} />

      {/* Depth Layer 2: Typographic Overlay */}
      <div className="overlay-wrapper">
        <OverlayText show={isRevealing} />
      </div>

      {/* Lenis Scroll Surface */}
      <div className="scroll-surface">
        <div className="scroll-content" />
      </div>
    </div>
  );
};

export default App;
