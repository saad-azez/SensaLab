import React, { useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import WaterDistortion from "./components/WaterDistortion";
import CurvedGrid from "./components/CurvedGrid";
import OverlayText from "./components/OverlayText";
import InteractiveVideoPlane from "./components/InteractivePlaneVideo";
import WorkSection from "./components/WorkSection";
import FinalSection from "./components/FinalSection";
import PersistentCube from "./components/PresistentCube";

// Define custom event type for Lenis progress
export interface LenisScrollDetail {
  scroll: number;
  limit: number;
  progress: number;
  velocity: number;
}

const App: React.FC = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isRevealing, setIsRevealing] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    window.scrollTo(0, 0);

    const wrapper = wrapperRef.current;
    if (!wrapper || !wrapper.firstElementChild) return;

    const lenis = new Lenis({
      wrapper,
      content: wrapper.firstElementChild as HTMLElement,
      orientation: "horizontal",
      gestureOrientation: "both",
      smoothWheel: true,
      wheelMultiplier: 1,
      infinite: false,
    });

    lenis.scrollTo(0, { immediate: true });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      window.dispatchEvent(new CustomEvent("lenis-scroll", {
        detail: {
          scroll: lenis.scroll,
          limit: lenis.limit,
          progress: lenis.progress,
          velocity: lenis.velocity,
        },
      }));
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    const timer = setTimeout(() => {
      setIsReady(true);
      const revealTimer = setTimeout(() => setIsRevealing(true), 100);
      return () => clearTimeout(revealTimer);
    }, 250);

    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        lenis.scrollTo(lenis.scroll + e.deltaY, { immediate: false });
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      clearTimeout(timer);
      window.removeEventListener("wheel", handleWheel);
      lenis.destroy();
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="relative w-full h-full bg-white overflow-hidden font-sans select-none">
      <div
        className={`absolute inset-0 z-[1000] bg-white transition-opacity duration-1000 pointer-events-none ${isReady ? "opacity-0" : "opacity-100"}`}
      />

      <div className={`w-full h-full transition-opacity duration-1000 ${isRevealing ? "opacity-100" : "opacity-0"}`}>
        <div className="absolute inset-0 z-0">
          <CurvedGrid />
        </div>

        <WaterDistortion />

        <div className="absolute inset-0 z-[200] pointer-events-none">
          <PersistentCube show={isRevealing} />
        </div>

        <div className="absolute inset-0 z-[150] pointer-events-none">
          <OverlayText show={isRevealing} />
        </div>

        {isReady && (
          <>
            <div className="absolute inset-0 z-[70] pointer-events-none">
              <InteractiveVideoPlane />
            </div>
            <div className="relative z-[65]">
              <WorkSection />
            </div>
            <div className="absolute inset-0 z-[85] pointer-events-none">
              <FinalSection />
            </div>
          </>
        )}
      </div>

      <div
        id="scroll-wrapper"
        ref={wrapperRef}
        style={{ visibility: isReady ? "visible" : "hidden" }}
        className="absolute inset-0 w-full h-full overflow-x-auto overflow-y-hidden no-scrollbar z-[60] pointer-events-none"
      >
        <div className="w-[500vw] h-full pointer-events-none" />
      </div>
    </div>
  );
};

export default App;
