import React, { useEffect, useRef } from "react";

interface LiquidDistortionWrapperProps {
  children: React.ReactNode;
}

/**
 * LiquidDistortionWrapper (STABLE)
 * --------------------------------
 * - Passive SVG filter
 * - Activates only on interaction
 * - No layout interference
 * - Safe with fixed / Three.js layers
 */
const LiquidDistortionWrapper: React.FC<LiquidDistortionWrapperProps> = ({
  children,
}) => {
  const displacementRef = useRef<SVGFEDisplacementMapElement>(null);
  const turbulenceRef = useRef<SVGFETurbulenceElement>(null);

  const targetScale = useRef(0);
  const currentScale = useRef(0);
  const lastMouse = useRef({ x: 0, y: 0 });
  const time = useRef(0);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      const dx = e.clientX - lastMouse.current.x;
      const dy = e.clientY - lastMouse.current.y;
      const speed = Math.sqrt(dx * dx + dy * dy);

      // Clamp hard — prevents visual destruction
      targetScale.current = Math.min(speed * 3, 80);

      lastMouse.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", onMouseMove);

    const animate = () => {
      // Ease scale
      currentScale.current +=
        (targetScale.current - currentScale.current) * 0.1;

      // Natural decay
      targetScale.current *= 0.9;

      // Kill micro-jitter
      if (currentScale.current < 0.2) {
        currentScale.current = 0;
      }

      if (displacementRef.current && turbulenceRef.current) {
        displacementRef.current.scale.baseVal = currentScale.current;

        time.current += 0.01;

        const base = 0.012;
        turbulenceRef.current.baseFrequencyX.baseVal =
          base + Math.sin(time.current) * 0.003;
        turbulenceRef.current.baseFrequencyY.baseVal =
          base + Math.cos(time.current) * 0.003;
      }

      rafId.current = requestAnimationFrame(animate);
    };

    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <div className="liquid-wrapper">
      {/* SVG filter definition — DO NOT POSITION WITH Z-INDEX */}
      <svg
        className="liquid-wrapper__defs"
        aria-hidden
        focusable="false"
      >
        <defs>
          <filter id="liquid-distortion-filter">
            <feTurbulence
              ref={turbulenceRef}
              type="fractalNoise"
              baseFrequency="0.012"
              numOctaves={2}
              result="warp"
            />
            <feDisplacementMap
              ref={displacementRef}
              in="SourceGraphic"
              in2="warp"
              scale={0}
              xChannelSelector="R"
              yChannelSelector="B"
            />
          </filter>
        </defs>
      </svg>

      {/* Content wrapper */}
      <div className="liquid-wrapper__content">
        {children}
      </div>
    </div>
  );
};

export default LiquidDistortionWrapper;
