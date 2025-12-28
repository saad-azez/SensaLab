
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface OverlayTextProps {
  show: boolean;
}

const OverlayText: React.FC<OverlayTextProps> = ({ show }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  const headerText = "LOREM IPSUM";
  const bodyText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.";

  const splitChars = (text: string) => {
    return text.split("").map((char, i) => (
      <span key={i} className="char-wrapper">
        <span className="char-inner">{char === " " ? "\u00A0" : char}</span>
      </span>
    ));
  };

  const splitWords = (text: string) => {
    return text.split(" ").map((word, i) => (
      <span key={i} className="word-wrapper">
        <span className="word-inner">{word}&nbsp;</span>
      </span>
    ));
  };

  const handleLinkHover = (e: React.MouseEvent<HTMLAnchorElement>, isEnter: boolean) => {
    const target = e.currentTarget;
    const primaryChars = target.querySelectorAll(".layer-primary .char-inner");
    const secondaryChars = target.querySelectorAll(".layer-secondary .char-inner");

    if (!primaryChars.length || !secondaryChars.length) return;

    gsap.killTweensOf([primaryChars, secondaryChars]);

    if (isEnter) {
      gsap.to(primaryChars, {
        yPercent: -100,
        opacity: 0,
        duration: 0.5,
        stagger: 0.02,
        ease: "power2.inOut"
      });
      gsap.fromTo(secondaryChars,
        { yPercent: 100, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.02,
          ease: "power2.out",
          delay: 0.04
        }
      );
    } else {
      gsap.to(primaryChars, {
        yPercent: 0,
        opacity: 1,
        duration: 0.4,
        stagger: 0.01,
        ease: "power2.out"
      });
      gsap.to(secondaryChars, {
        yPercent: 100,
        opacity: 0,
        duration: 0.4,
        stagger: 0.01,
        ease: "power2.inOut"
      });
    }
  };

  useEffect(() => {
    if (!show) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Ensure we only grab existing elements and convert to arrays for GSAP safety
      const titleChars = gsap.utils.toArray(".hero-title .char-inner") as HTMLElement[];
      const paraWords = gsap.utils.toArray(".overlay-body-text .word-inner") as HTMLElement[];
      const socialLinks = gsap.utils.toArray(".social-link") as HTMLElement[];

      // Initial state reset
      gsap.set(containerRef.current, { opacity: 1, visibility: "visible" });

      // Batch set to avoid TS error with heterogeneous arrays
      if (titleChars.length) gsap.set(titleChars, { opacity: 0, y: "115%" });
      if (paraWords.length) gsap.set(paraWords, { opacity: 0, y: "100%" });
      if (socialLinks.length) gsap.set(socialLinks, { opacity: 0, y: 40 });

      tl.addLabel("start")
        // 1. Heading Stagger (Character based)
        .fromTo(titleChars,
          { y: "125%", rotateX: -90, opacity: 0 },
          {
            y: "0%",
            rotateX: 0,
            opacity: 1,
            duration: 1.8,
            stagger: 0.05,
            ease: "expo.out"
          },
          "start"
        )
        // 2. Links Stagger
        .fromTo(socialLinks,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.12,
            ease: "power3.out"
          },
          "start+=0.5"
        )
        // 3. Paragraph Stagger (Word/Line based)
        .fromTo(paraWords,
          { y: "100%", opacity: 0 },
          {
            y: "0%",
            opacity: 1,
            duration: 1.4,
            stagger: 0.006,
            ease: "power3.out"
          },
          "start+=0.9"
        );
    }, containerRef);

    return () => ctx.revert();
  }, [show]);

  return (
    <div ref={containerRef} className="overlay-main" style={{ visibility: "hidden" }}>
      <div className="center-viewport-heading">
        <h1 ref={titleRef} className="hero-title">
          {splitChars(headerText)}
        </h1>
      </div>

      <footer className="overlay-footer">
        <div ref={linksRef} className="footer-left-links">
          <nav className="social-nav">
            {["INSTAGRAM", "TWITTER", "LINKEDIN"].map((label) => (
              <a
                key={label}
                href="#"
                className="social-link"
                onMouseEnter={(e) => handleLinkHover(e, true)}
                onMouseLeave={(e) => handleLinkHover(e, false)}
                onClick={(e) => e.preventDefault()}
              >
                <div className="char-swap-container">
                  <div className="layer-primary">{splitChars(label)}</div>
                  <div className="layer-secondary">{splitChars(label)}</div>
                </div>
              </a>
            ))}
          </nav>
        </div>

        <div className="footer-right-para">
          <div className="para-blur-card">
            <p ref={paragraphRef} className="overlay-body-text">
              {splitWords(bodyText)}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default OverlayText;
