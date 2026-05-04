import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const stats = [
  { value: "15,000+", label: "Part References" },
  { value: "98%", label: "Vehicle Coverage" },
  { value: "30+", label: "Countries Distributed" },
  { value: "ISO", label: "9001 Certified" },
];

export default function HeroSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      ref={ref}
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        overflow: "hidden",
        background: "#0a0a0a",
      }}
    >
      {/* Background image with Ken Burns slow zoom animation */}
      <style>{`
        @keyframes kenburns {
          0%   { transform: scale(1.0) translateX(0px); }
          50%  { transform: scale(1.08) translateX(-12px); }
          100% { transform: scale(1.0) translateX(0px); }
        }
      `}</style>
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('https://denkermap-mwr9pxu8.manus.space/manus-storage/hero_cover_144753e1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center right",
          backgroundRepeat: "no-repeat",
          opacity: 0.45,
          animation: "kenburns 18s ease-in-out infinite",
          willChange: "transform",
        }}
      />

      {/* Gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg, rgba(10,10,10,0.97) 0%, rgba(10,10,10,0.75) 50%, rgba(10,10,10,0.3) 100%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(0deg, rgba(10,10,10,1) 0%, transparent 40%, transparent 80%, rgba(10,10,10,0.5) 100%)",
        }}
      />

      {/* Orange accent line */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: "68px",
          bottom: 0,
          width: "3px",
          background: "linear-gradient(180deg, #FF6B00 0%, transparent 100%)",
          opacity: 0.6,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 1.5rem",
          paddingTop: "100px",
          paddingBottom: "80px",
          width: "100%",
        }}
      >
        {/* Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            background: "rgba(255,107,0,0.12)",
            border: "1px solid rgba(255,107,0,0.3)",
            padding: "0.375rem 0.875rem",
            marginBottom: "1.5rem",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s",
          }}
        >
          <span
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: "#FF6B00",
              display: "inline-block",
              animation: "pulse 2s infinite",
            }}
          />
          <span
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 600,
              fontSize: "0.7rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#FF6B00",
            }}
          >
            Polish Precision · European Standard
          </span>
        </div>

        {/* Subtitle */}
        <p
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 600,
            fontSize: "0.75rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.5)",
            marginBottom: "0.75rem",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s",
          }}
        >
          Automotive Filtration Systems
        </p>

        {/* Main headline */}
        <h1
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 900,
            fontSize: "clamp(3rem, 8vw, 6.5rem)",
            lineHeight: 0.95,
            textTransform: "uppercase",
            color: "white",
            marginBottom: "0.25rem",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.7s ease 0.3s, transform 0.7s ease 0.3s",
          }}
        >
          BUILT TO
        </h1>
        <h1
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 900,
            fontSize: "clamp(3rem, 8vw, 6.5rem)",
            lineHeight: 0.95,
            textTransform: "uppercase",
            color: "#FF6B00",
            marginBottom: "0.5rem",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.7s ease 0.4s, transform 0.7s ease 0.4s",
          }}
        >
          PERFORM.
        </h1>
        <h2
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(1.5rem, 4vw, 3rem)",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.25)",
            letterSpacing: "0.1em",
            marginBottom: "2rem",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.7s ease 0.5s, transform 0.7s ease 0.5s",
          }}
        >
          DENKERMANN PALESTINE
        </h2>

        {/* Description */}
        <p
          style={{
            fontFamily: "'Barlow', sans-serif",
            fontWeight: 400,
            fontSize: "1rem",
            lineHeight: 1.7,
            color: "rgba(255,255,255,0.65)",
            maxWidth: "480px",
            marginBottom: "2.5rem",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.7s ease 0.6s, transform 0.7s ease 0.6s",
          }}
        >
          Brought to Palestine by{" "}
          <strong style={{ color: "#FF6B00" }}>Auto Sign Trade</strong> — part of the{" "}
          <strong style={{ color: "white" }}>AutoSign Group</strong>, the market leader in automotive parts since{" "}
          <strong style={{ color: "white" }}>1976</strong>. Denkermann's Polish-engineered precision, now available across the Palestinian market.
        </p>

        {/* CTA buttons */}
        <div
          style={{
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
            marginBottom: "4rem",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.7s ease 0.7s, transform 0.7s ease 0.7s",
          }}
        >
          <button
            onClick={() => document.querySelector("#products")?.scrollIntoView({ behavior: "smooth" })}
            style={{
              background: "#FF6B00",
              color: "white",
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 700,
              fontSize: "0.875rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              padding: "0.875rem 2rem",
              border: "none",
              cursor: "pointer",
              transition: "background 0.2s ease, transform 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#FF8C33";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#FF6B00";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            EXPLORE PRODUCTS →
          </button>
          <button
            onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
            style={{
              background: "transparent",
              color: "white",
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 700,
              fontSize: "0.875rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              padding: "0.875rem 2rem",
              border: "1px solid rgba(255,255,255,0.3)",
              cursor: "pointer",
              transition: "border-color 0.2s ease, color 0.2s ease, transform 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#FF6B00";
              e.currentTarget.style.color = "#FF6B00";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
              e.currentTarget.style.color = "white";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            OUR STORY
          </button>
        </div>

        {/* Stats */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "0",
            maxWidth: "640px",
            borderTop: "1px solid rgba(255,255,255,0.1)",
            paddingTop: "2rem",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.7s ease 0.8s, transform 0.7s ease 0.8s",
          }}
          className="grid-cols-2 sm:grid-cols-4"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              style={{
                padding: "0 1.5rem 0 0",
                borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.1)" : "none",
                paddingLeft: i > 0 ? "1.5rem" : "0",
              }}
            >
              <div
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  color: "#FF6B00",
                  lineHeight: 1,
                  marginBottom: "0.25rem",
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontWeight: 400,
                  fontSize: "0.7rem",
                  letterSpacing: "0.05em",
                  color: "rgba(255,255,255,0.5)",
                  textTransform: "uppercase",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        style={{
          position: "absolute",
          bottom: "2rem",
          right: "2rem",
          background: "none",
          border: "1px solid rgba(255,255,255,0.2)",
          color: "rgba(255,255,255,0.5)",
          width: "44px",
          height: "44px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          transition: "border-color 0.2s, color 0.2s",
          animation: "bounce 2s infinite",
          zIndex: 10,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "#FF6B00";
          e.currentTarget.style.color = "#FF6B00";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
          e.currentTarget.style.color = "rgba(255,255,255,0.5)";
        }}
        aria-label="Scroll down"
      >
        <ChevronDown size={20} />
      </button>

      <style>{`
        @keyframes pulse { 0%,100% { opacity:1; } 50% { opacity:0.4; } }
        @keyframes bounce { 0%,100% { transform:translateY(0); } 50% { transform:translateY(6px); } }
      `}</style>
    </section>
  );
}
