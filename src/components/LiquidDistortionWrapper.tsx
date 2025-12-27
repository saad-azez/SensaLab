import React, { useEffect, useRef } from "react";

interface LiquidDistortionWrapperProps {
  children: React.ReactNode;
}

const LiquidDistortionWrapper: React.FC<LiquidDistortionWrapperProps> = ({
  children,
}) => {
  const displacementRef = useRef<SVGFEDisplacementMapElement>(null);
  const turbulenceRef = useRef<SVGFETurbulenceElement>(null);

  const targetScale = useRef(0);
  const currentScale = useRef(0);
  const lastMousePos = useRef({ x: 0, y: 0 });
  const time = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const dx = e.clientX - lastMousePos.current.x;
      const dy = e.clientY - lastMousePos.current.y;
      const speed = Math.sqrt(dx * dx + dy * dy);

      targetScale.current = Math.min(speed * 4, 150);
      lastMousePos.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove);

    let animationFrameId: number;

    const animate = () => {
      currentScale.current +=
        (targetScale.current - currentScale.current) * 0.08;

      targetScale.current *= 0.92;

      if (currentScale.current < 0.1) currentScale.current = 0;

      if (displacementRef.current && turbulenceRef.current) {
        displacementRef.current.scale.baseVal = currentScale.current;

        time.current += 0.01;
        const baseFreq = 0.015;
        const oscillation = Math.sin(time.current) * 0.005;

        turbulenceRef.current.baseFrequencyX.baseVal =
          baseFreq + oscillation;
        turbulenceRef.current.baseFrequencyY.baseVal =
          baseFreq + Math.cos(time.current) * 0.005;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="liquid-distortion">
      {/* Hidden SVG filter definition */}
      <svg className="liquid-distortion__defs">
        <defs>
          <filter id="liquid-distortion-filter">
            <feTurbulence
              ref={turbulenceRef}
              type="fractalNoise"
              baseFrequency="0.015"
              numOctaves="2"
              result="warp"
            />
            <feDisplacementMap
              ref={displacementRef}
              in="SourceGraphic"
              in2="warp"
              scale="0"
              xChannelSelector="R"
              yChannelSelector="B"
            />
          </filter>
        </defs>
      </svg>

      {/* Content wrapper */}
      <div className="liquid-distortion__content">
        {children}
      </div>
    </div>
  );
};

export default LiquidDistortionWrapper;
