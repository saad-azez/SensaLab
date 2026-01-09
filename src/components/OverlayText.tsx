
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface OverlayTextProps {
  show?: boolean;
}

const OverlayText: React.FC<OverlayTextProps> = ({ show = true }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollTl = useRef<gsap.core.Timeline | null>(null);
  const entranceTl = useRef<gsap.core.Timeline | null>(null);

  const state = useRef({
    targetProgress: 0,
    currentProgress: 0,
    isEntranceComplete: false,
    hasStartedScrolling: false
  });

  const headerText = "Rendering Dreams";
  const bodyText =
    "Renders imagination into emotional, immersive and measurable realities.";
  const scrollText = "SCROLL DOWN";

  const splitChars = (text: string) =>
    text.split("").map((char, i) => (
      <span key={`char-${i}`} className="char-wrapper">
        <span className="char-inner">
          {char === " " ? "\u00A0" : char}
        </span>
      </span>
    ));

  const splitWords = (text: string) =>
    text.split(" ").map((word, i) => (
      <span key={`word-${i}`} className="word-wrapper">
        <span className="word-inner">{word}&nbsp;</span>
      </span>
    ));

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const titleChars = gsap.utils.toArray(".hero-title .char-inner");
      const paraWords = gsap.utils.toArray(".overlay-body-text .word-inner");
      const socialLinks = gsap.utils.toArray(".social-link");
      const scrollChars = gsap.utils.toArray(".scroll-text .char-inner");
      const blurCard = ".para-blur-card";

      // EXIT TIMELINE
      scrollTl.current = gsap.timeline({ paused: true });
      scrollTl.current
        .to(titleChars, {
          yPercent: -120,
          opacity: 0,
          stagger: 0.02,
          ease: "power2.inOut",
        }, 0)
        .to(socialLinks, {
          y: -40,
          opacity: 0,
          stagger: 0.05,
          ease: "power2.inOut",
        }, 0.1)
        .to(paraWords, {
          yPercent: -100,
          opacity: 0,
          stagger: 0.005,
          ease: "power2.inOut",
        }, 0.2)
        .to(scrollChars, {
          yPercent: -100,
          opacity: 0,
          stagger: 0.02,
          ease: "power2.inOut",
        }, 0.25)
        .to(blurCard, {
          opacity: 0,
          duration: 0.4,
          ease: "power1.out",
        }, 0.7);

      // ENTRANCE TIMELINE
      if (show) {
        entranceTl.current = gsap.timeline({
          onComplete: () => {
            state.current.isEntranceComplete = true;
          }
        });

        gsap.set(containerRef.current, { opacity: 1 });

        entranceTl.current
          .fromTo(titleChars,
            { yPercent: 120, opacity: 0 },
            { yPercent: 0, opacity: 1, duration: 1.2, stagger: 0.04, ease: "expo.out" }
          )
          .fromTo(socialLinks,
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out" },
            "-=0.8"
          )
          .fromTo(paraWords,
            { yPercent: 100, opacity: 0 },
            { yPercent: 0, opacity: 1, duration: 1.0, stagger: 0.005, ease: "power3.out" },
            "-=0.6"
          )
          .fromTo(scrollChars,
            { yPercent: 120, opacity: 0 },
            { yPercent: 0, opacity: 1, duration: 0.8, stagger: 0.04, ease: "power3.out" },
            "-=0.8"
          );
      }

      const ticker = () => {
        if (!scrollTl.current || !containerRef.current) return;

        state.current.currentProgress = gsap.utils.interpolate(
          state.current.currentProgress,
          state.current.targetProgress,
          0.1
        );

        const p = state.current.currentProgress;

        if (state.current.hasStartedScrolling || state.current.isEntranceComplete) {
          scrollTl.current.seek(scrollTl.current.duration() * p);

          const masterAlpha = gsap.utils.clamp(0, 1, 1 - p * 1.8);
          gsap.set(containerRef.current, {
            opacity: masterAlpha,
            visibility: masterAlpha < 0.01 ? "hidden" : "visible"
          });
        }
      };

      gsap.ticker.add(ticker);

      const onScroll = (e: any) => {
        const progress = e.detail.progress;
        state.current.targetProgress = gsap.utils.clamp(0, 1, progress / 0.15);

        if (progress > 0.005) {
          state.current.hasStartedScrolling = true;
          if (entranceTl.current && entranceTl.current.isActive()) {
            entranceTl.current.progress(1);
          }
        }
      };

      window.addEventListener("lenis-scroll", onScroll);

      return () => {
        gsap.ticker.remove(ticker);
        window.removeEventListener("lenis-scroll", onScroll);
      };
    }, containerRef);

    return () => ctx.revert();
  }, [show]);

  return (
    <div ref={containerRef} className="overlay-main-sticky" style={{ opacity: 0 }}>
      <div className="center-viewport-heading">
        <h1 className="hero-title">{splitChars(headerText)}</h1>
      </div>

      <div className="overlay-bottom-wrapper">
        <div className="bottom-left-links">
          <nav className="social-nav">
            {["INSTAGRAM", "TWITTER", "LINKEDIN"].map((label) => (
              <a key={label} href="#" className="social-link" onClick={(e) => e.preventDefault()}>
                <span className="social-link-inner">
                  <span className="link-text-state link-text-original">{splitChars(label)}</span>
                  <span className="link-text-state link-text-hover">{splitChars(label)}</span>
                </span>
              </a>
            ))}
          </nav>
        </div>

        <div className="bottom-center-para">
          <div className="para-blur-card">
            <p className="overlay-body-text">
              {splitWords(bodyText)}
            </p>
          </div>
        </div>

        <div className="bottom-right-scroll">
          <div className="scroll-indicator">
            <span className="scroll-text">{splitChars(scrollText)}</span>
            <span className="scroll-arrow">↓</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverlayText;
