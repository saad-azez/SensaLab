import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface OverlayTextProps {
  show: boolean;
}

const OverlayText: React.FC<OverlayTextProps> = ({ show }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);

  const splitText = (text: string, className = "") =>
    text.split("").map((char, i) => (
      <span
        key={i}
        className={`overlay-text__char ${className}`}
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ));

  const handleLinkHover = (
    e: React.MouseEvent<HTMLAnchorElement>,
    isEnter: boolean
  ) => {
    const target = e.currentTarget;
    const primarySpans = target.querySelectorAll(
      ".overlay-text__link-primary span"
    );
    const secondarySpans = target.querySelectorAll(
      ".overlay-text__link-secondary span"
    );

    gsap.killTweensOf([
      ...Array.from(primarySpans),
      ...Array.from(secondarySpans),
    ]);

    if (isEnter) {
      gsap.to(primarySpans, {
        y: "-100%",
        opacity: 0,
        duration: 0.5,
        stagger: 0.012,
        ease: "power3.inOut",
      });

      gsap.fromTo(
        secondarySpans,
        { y: "100%", opacity: 0 },
        {
          y: "0%",
          opacity: 1,
          duration: 0.5,
          stagger: 0.012,
          ease: "power3.out",
        }
      );
    } else {
      gsap.to(primarySpans, {
        y: "0%",
        opacity: 1,
        duration: 0.5,
        stagger: 0.012,
        ease: "power3.out",
      });

      gsap.to(secondarySpans, {
        y: "100%",
        opacity: 0,
        duration: 0.5,
        stagger: 0.012,
        ease: "power3.inOut",
      });
    }
  };

  useEffect(() => {
    if (!show) return;

    const tl = gsap.timeline({ delay: 0.1 });

    if (titleRef.current) {
      const spans = titleRef.current.querySelectorAll("span");
      tl.fromTo(
        spans,
        { y: 120, opacity: 0, rotateX: -90 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          stagger: 0.03,
          duration: 1.8,
          ease: "expo.out",
        }
      );
    }

    if (paragraphRef.current) {
      const spans = paragraphRef.current.querySelectorAll("span");
      tl.fromTo(
        spans,
        { opacity: 0, y: 15 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.003,
          duration: 1.2,
          ease: "power4.out",
        },
        "-=1.4"
      );
    }

    const links =
      containerRef.current?.querySelectorAll(
        ".overlay-text__social-link"
      );

    if (links) {
      tl.fromTo(
        links,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.08,
          duration: 1,
          ease: "power3.out",
        },
        "-=1.2"
      );
    }
  }, [show]);

  useEffect(() => {
    const handleLenisScroll = (e: any) => {
      const { progress } = e.detail;
      const fadeThreshold = 0.12;
      const opacity = Math.max(0, 1 - progress / fadeThreshold);

      if (containerRef.current) {
        gsap.to(containerRef.current, {
          opacity,
          y: -progress * 250,
          scale: 1 + progress * 0.05,
          duration: 0.3,
          overwrite: "auto",
        });
      }
    };

    window.addEventListener("lenis-scroll", handleLenisScroll);
    return () =>
      window.removeEventListener("lenis-scroll", handleLenisScroll);
  }, []);

  const headerText = "LOREM IPSUM";
  const bodyText =
    "LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT.";

  return (
    <div
      ref={containerRef}
      className={`overlay-text ${show ? "is-visible" : ""}`}
    >
      <div className="overlay-text__center">
        <h1 ref={titleRef} className="overlay-text__title">
          {splitText(headerText)}
        </h1>
      </div>

      <div className="overlay-text__footer">
        <div className="overlay-text__links">
          {["INSTAGRAM", "X / TWITTER", "LINKEDIN"].map(
            (link) => (
              <a
                key={link}
                href="/"
                className="overlay-text__social-link"
                onClick={(e) => e.preventDefault()}
                onMouseEnter={(e) =>
                  handleLinkHover(e, true)
                }
                onMouseLeave={(e) =>
                  handleLinkHover(e, false)
                }
              >
                <div className="overlay-text__link-primary">
                  {splitText(link)}
                </div>
                <div className="overlay-text__link-secondary">
                  {splitText(link)}
                </div>
              </a>
            )
          )}
        </div>

        <div className="overlay-text__card">
          <p
            ref={paragraphRef}
            className="overlay-text__body"
          >
            {splitText(bodyText)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OverlayText;
