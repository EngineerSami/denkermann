import { useEffect, useRef, useState } from "react";
import { Shield, Award, Globe, Wrench } from "lucide-react";

const badges = [
  { icon: "🇵🇱", label: "Made in Poland" },
  { icon: "🇵🇸", label: "Distributed in Palestine" },
  { label: "Auto Sign Trade" },
  { label: "AutoSign Group" },
  { label: "Since 1976" },
  { label: "ISO 9001 Certified" },
  { label: "OEM Equivalent" },
];

const highlights = [
  { icon: Shield, title: "Quality First", desc: "Every product validated against European OEM specs before reaching the Palestinian market." },
  { icon: Award, title: "Since 1976", desc: "Auto Sign Trade — nearly 50 years of leadership in Palestinian automotive parts trade." },
  { icon: Globe, title: "Regional Expertise", desc: "AutoSign Group's deep-rooted network ensures availability across Palestine and the wider region." },
  { icon: Wrench, title: "Perfect Fit", desc: "Reverse-engineered from OEM specifications for direct interchangeability with no modifications." },
];

export default function AboutSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={ref}
      style={{
        background: "#0f0f0f",
        padding: "6rem 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle at 80% 50%, rgba(255,107,0,0.04) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5rem",
            alignItems: "center",
          }}
          className="grid-cols-1 lg:grid-cols-2"
        >
          {/* Left: Image + badge */}
          <div
            style={{
              position: "relative",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-40px)",
              transition: "opacity 0.8s ease, transform 0.8s ease",
            }}
          >
            <div
              style={{
                position: "relative",
                border: "1px solid rgba(255,107,0,0.2)",
                overflow: "hidden",
              }}
            >
              <img
                src="https://denkermap-mwr9pxu8.manus.space/manus-storage/filters_lineup_a1d9f64c.jpg"
                alt="Denkermann Filter Lineup"
                style={{
                  width: "100%",
                  height: "420px",
                  objectFit: "cover",
                  display: "block",
                  filter: "brightness(0.85)",
                }}
              />
              {/* Orange corner accent */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "60px",
                  height: "4px",
                  background: "#FF6B00",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "4px",
                  height: "60px",
                  background: "#FF6B00",
                }}
              />
            </div>

            {/* Quality badge overlay */}
            <div
              style={{
                position: "absolute",
                bottom: "-20px",
                right: "-20px",
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                overflow: "hidden",
                border: "3px solid rgba(255,107,0,0.4)",
                background: "#0f0f0f",
              }}
            >
              <img
                src="https://denkermap-mwr9pxu8.manus.space/manus-storage/quality_badge_a13e4896.png"
                alt="German Quality Standard"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>

            {/* Quote card */}
            <div
              style={{
                position: "absolute",
                bottom: "2rem",
                left: "-1.5rem",
                background: "rgba(10,10,10,0.95)",
                border: "1px solid rgba(255,107,0,0.3)",
                borderLeft: "3px solid #FF6B00",
                padding: "1rem 1.25rem",
                maxWidth: "260px",
              }}
            >
              <p
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontStyle: "italic",
                  fontSize: "0.875rem",
                  color: "rgba(255,255,255,0.85)",
                  lineHeight: 1.5,
                  margin: 0,
                }}
              >
                "Nearly 50 years of trust.{" "}
                <span style={{ color: "#FF6B00", fontStyle: "normal", fontWeight: 600 }}>
                  Auto Sign Trade × Denkermann.
                </span>"
              </p>
            </div>
          </div>

          {/* Right: Content */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(40px)",
              transition: "opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s",
            }}
          >
            {/* Section label */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                marginBottom: "1.25rem",
              }}
            >
              <div style={{ width: "32px", height: "2px", background: "#FF6B00" }} />
              <span
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.7rem",
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "#FF6B00",
                }}
              >
                Who We Are
              </span>
            </div>

            <h2
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                lineHeight: 1,
                textTransform: "uppercase",
                color: "white",
                marginBottom: "1.5rem",
              }}
            >
              POLISH ROOTS.{" "}
              <span style={{ color: "#FF6B00", fontStyle: "italic" }}>EUROPEAN</span>{" "}
              PRECISION.
            </h2>

            <p
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontSize: "1rem",
                lineHeight: 1.75,
                color: "rgba(255,255,255,0.65)",
                marginBottom: "1rem",
              }}
            >
              <strong style={{ color: "white" }}>Denkermann Palestine</strong> is brought to the Palestinian market exclusively by{" "}
              <strong style={{ color: "#FF6B00" }}>Auto Sign Trade</strong> — the leading force in automotive parts trade in Palestine since{" "}
              <strong style={{ color: "white" }}>1976</strong>. A proud member of the{" "}
              <strong style={{ color: "white" }}>AutoSign Group</strong>, Auto Sign Trade has spent nearly five decades building the most trusted automotive supply network across the Palestinian market.
            </p>

            <p
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontSize: "1rem",
                lineHeight: 1.75,
                color: "rgba(255,255,255,0.65)",
                marginBottom: "1rem",
              }}
            >
              Denkermann is a{" "}
              <strong style={{ color: "white" }}>Polish automotive parts manufacturer</strong>{" "}
              with a clear mission: to deliver filtration products that match and exceed the standards set by the world's leading automotive brands — engineered to European OEM specifications, tested in accredited laboratories, and trusted by workshops across 30+ countries.
            </p>

            <p
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontSize: "1rem",
                lineHeight: 1.75,
                color: "rgba(255,255,255,0.65)",
                marginBottom: "2rem",
              }}
            >
              Together, the heritage of Auto Sign Trade and the precision of Denkermann create a partnership built on one shared value:{" "}
              <strong style={{ color: "white" }}>no compromise on quality</strong>.
            </p>

            {/* Badges */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2.5rem" }}>
              {badges.map((badge, i) => (
                <span
                  key={i}
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 600,
                    fontSize: "0.7rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.7)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    padding: "0.375rem 0.75rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.375rem",
                  }}
                >
                  {badge.icon && <span>{badge.icon}</span>}
                  {badge.label}
                </span>
              ))}
            </div>

            {/* Highlights grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1rem",
              }}
            >
              {highlights.map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: "0.75rem",
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      width: "32px",
                      height: "32px",
                      background: "rgba(255,107,0,0.1)",
                      border: "1px solid rgba(255,107,0,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <item.icon size={14} color="#FF6B00" />
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontWeight: 700,
                        fontSize: "0.8rem",
                        letterSpacing: "0.05em",
                        textTransform: "uppercase",
                        color: "white",
                        marginBottom: "0.25rem",
                      }}
                    >
                      {item.title}
                    </div>
                    <div
                      style={{
                        fontFamily: "'Barlow', sans-serif",
                        fontSize: "0.8rem",
                        lineHeight: 1.5,
                        color: "rgba(255,255,255,0.5)",
                      }}
                    >
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
