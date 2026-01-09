
import React, { useEffect, useRef } from "react";

const cardData = [
  {
    id: 1,
    title: "Industries We Serve",
    desc: "We work with creative directors, brand managers, and producers in music, tech, automotive, fashion, lifestyle, and entertainment.",
    img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "White Label",
    desc: "Your brand, our tech. We build it, you own the spotlight. Effortless, behind-the-scenes creative power.",
    img: "https://images.unsplash.com/photo-1633167606207-d840b5070fc2?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Quality",
    desc: "Premium service, wow-worthy results. We craft every detail to impress your clients and leave a mark.",
    img: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=800&auto=format&fit=crop"
  },
];

const FinalSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollWrapperRef = useRef<HTMLDivElement>(null);
  const contentGridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleLenisScroll = (e: any) => {
      const { progress } = e.detail;
      if (!containerRef.current || !scrollWrapperRef.current || !contentGridRef.current) return;

      // REVEAL PHASE: 0.82 to 0.90
      const revealStart = 0.82;
      const revealEnd = 0.90;
      let revealProgress = 0;
      if (progress >= revealStart) {
        revealProgress = Math.min(1, (progress - revealStart) / (revealEnd - revealStart));
      }

      const revealEase = 1 - Math.pow(1 - revealProgress, 3);
      containerRef.current.style.transform = `translateY(${100 - (revealEase * 100)}%)`;
      containerRef.current.style.opacity = revealProgress > 0.01 ? "1" : "0";

      // SCROLL PHASE: 0.90 to 1.00
      if (progress >= 0.90) {
        const contentProgress = (progress - 0.90) / 0.10;
        const viewportHeight = window.innerHeight;
        const gridHeight = contentGridRef.current.offsetHeight;
        const totalScrollableDistance = gridHeight - viewportHeight;
        const scrollY = contentProgress * Math.max(0, totalScrollableDistance);

        scrollWrapperRef.current.style.transform = `translate3d(0, ${-scrollY}px, 0)`;
      } else {
        scrollWrapperRef.current.style.transform = `translate3d(0, 0, 0)`;
      }
    };

    window.addEventListener("lenis-scroll", handleLenisScroll);
    return () => window.removeEventListener("lenis-scroll", handleLenisScroll);
  }, []);

  return (
    <div ref={containerRef} className="final-section-reveal">
      <div ref={scrollWrapperRef} className="final-scroll-wrapper">
        <div ref={contentGridRef} className="final-content-grid">
          <div className="final-left-col">
            <div className="final-fixed-text-wrapper">
              <h2 className="final-main-heading">
                What is Experiential<br />
                Marketing?
              </h2>
              <div className="final-divider" />
              <p className="final-sub-text">
                It’s more than marketing — it’s creating moments people remember.
                We turn your brand into an experience, not just a message.
              </p>
            </div>
          </div>

          <div className="final-right-col">
            <div className="final-cards-stack">
              {cardData.map((card) => (
                <div key={card.id} className="final-card-item">
                  <div className="final-card-image-wrapper">
                    <img src={card.img} alt={card.title} className="final-card-img" />
                  </div>
                  <div className="final-card-info">
                    <h3 className="final-card-title">{card.title}</h3>
                    <p className="final-card-desc">{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalSection;
