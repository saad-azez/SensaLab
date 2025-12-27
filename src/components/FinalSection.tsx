import React, { useEffect, useRef } from "react";

const FinalSection: React.FC = () => {
  const pathRef = useRef<SVGPathElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentBend = useRef(0);

  useEffect(() => {
    let targetBend = 0;
    let currentProgress = 0;

    let animationFrameId: number;

    const animate = () => {
      currentBend.current += (targetBend - currentBend.current) * 0.15;

      const start = 0.85;
      const end = 1.0;

      let yPos = window.innerHeight;

      if (currentProgress >= start) {
        const localProgress = Math.min(
          1,
          (currentProgress - start) / (end - start)
        );
        const ease = 1 - Math.pow(1 - localProgress, 3);
        yPos = window.innerHeight * (1.0 - ease);
      }

      if (pathRef.current) {
        const width = window.innerWidth;
        const height = window.innerHeight;
        const controlY = yPos + currentBend.current;

        const d = `
          M 0, ${height}
          L 0, ${yPos}
          Q ${width / 2}, ${controlY} ${width}, ${yPos}
          L ${width}, ${height}
          Z
        `;

        pathRef.current.setAttribute("d", d);
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleLenisScroll = (e: any) => {
      const { progress, velocity } = e.detail;
      currentProgress = progress;

      const maxBend = window.innerHeight * 0.25;
      const velocityScale = 4.0;
      const v = velocity || 0;

      targetBend = Math.max(
        -maxBend,
        Math.min(maxBend, v * velocityScale)
      );
    };

    window.addEventListener("lenis-scroll", handleLenisScroll);

    return () => {
      window.removeEventListener("lenis-scroll", handleLenisScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div ref={containerRef} className="final-section">
      <svg
        className="final-section__svg"
        preserveAspectRatio="none"
      >
        <path
          ref={pathRef}
          className="final-section__path"
        />
      </svg>
    </div>
  );
};

export default FinalSection;
