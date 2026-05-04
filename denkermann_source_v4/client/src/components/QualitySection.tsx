import { useEffect, useRef, useState } from "react";
import { Factory, FlaskConical, ClipboardCheck, Network } from "lucide-react";

const qualityPoints = [
  {
    icon: Factory,
    title: "ISO 9001 Certified Production",
    desc: "Our Polish manufacturing facility operates under a full ISO 9001 quality management system, ensuring consistent output and traceability at every stage of production.",
    badge: "ISO 9001",
  },
  {
    icon: FlaskConical,
    title: "European Laboratory Testing",
    desc: "Every product batch is tested in accredited European labs against ISO 3968, ISO 4548, and ISO 5011 standards for filtration performance, pressure resistance, and durability.",
    badge: "Lab Certified",
  },
  {
    icon: ClipboardCheck,
    title: "OEM Cross-Reference Validated",
    desc: "All part numbers are cross-referenced and validated against original manufacturer specifications to ensure direct interchangeability with no modifications required.",
    badge: "OEM Validated",
  },
  {
    icon: Network,
    title: "Pan-European Distribution",
    desc: "Distributed across 30+ countries through a network of authorised automotive parts distributors and wholesale partners, with Denkermann Palestine serving the regional market.",
    badge: "30+ Countries",
  },
];

export default function QualitySection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="quality"
      ref={ref}
      style={{
        background: "#0f0f0f",
        padding: "6rem 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative orange glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,107,0,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem", position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            gap: "5rem",
            alignItems: "start",
          }}
          className="grid-cols-1 lg:grid-cols-3"
        >
          {/* Left: header + badge */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
              position: "sticky",
              top: "100px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
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
                Quality Assurance
              </span>
            </div>

            <h2
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
                lineHeight: 1,
                textTransform: "uppercase",
                color: "white",
                marginBottom: "1.5rem",
              }}
            >
              BUILT ON{" "}
              <span style={{ color: "#FF6B00", fontStyle: "italic" }}>STANDARDS</span>
            </h2>

            <p
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontSize: "0.9rem",
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.5)",
                marginBottom: "2.5rem",
              }}
            >
              Denkermann's quality system is built on European norms — every product is validated before it reaches the market.
            </p>

            {/* Quality badge */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "2rem",
              }}
            >
              <div
                style={{
                  width: "160px",
                  height: "160px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  border: "2px solid rgba(255,107,0,0.3)",
                  boxShadow: "0 0 40px rgba(255,107,0,0.1)",
                }}
              >
                <img
                  src="https://denkermap-mwr9pxu8.manus.space/manus-storage/quality_badge_a13e4896.png"
                  alt="German Quality Standard Badge"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>

            {/* Stats */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              {[
                { value: "100%", label: "Tested" },
                { value: "ISO", label: "Certified" },
                { value: "OEM", label: "Equivalent" },
                { value: "EU", label: "Standards" },
              ].map((stat, i) => (
                <div
                  key={i}
                  style={{
                    background: "#1a1a1a",
                    border: "1px solid rgba(255,255,255,0.06)",
                    padding: "1rem",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 900,
                      fontSize: "1.5rem",
                      color: "#FF6B00",
                      lineHeight: 1,
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Barlow', sans-serif",
                      fontSize: "0.65rem",
                      color: "rgba(255,255,255,0.4)",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      marginTop: "0.25rem",
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: quality points */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
            }}
          >
            {qualityPoints.map((point, i) => (
              <div
                key={i}
                style={{
                  background: "#1a1a1a",
                  border: "1px solid rgba(255,255,255,0.06)",
                  padding: "2rem",
                  display: "flex",
                  gap: "1.5rem",
                  alignItems: "flex-start",
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateX(0)" : "translateX(40px)",
                  transition: `opacity 0.7s ease ${i * 0.15}s, transform 0.7s ease ${i * 0.15}s`,
                  borderLeft: "3px solid #FF6B00",
                }}
              >
                {/* Icon */}
                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    background: "rgba(255,107,0,0.1)",
                    border: "1px solid rgba(255,107,0,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <point.icon size={22} color="#FF6B00" />
                </div>

                {/* Content */}
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      marginBottom: "0.625rem",
                      flexWrap: "wrap",
                      gap: "0.5rem",
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontWeight: 800,
                        fontSize: "1.1rem",
                        textTransform: "uppercase",
                        color: "white",
                        letterSpacing: "0.05em",
                        margin: 0,
                      }}
                    >
                      {point.title}
                    </h3>
                    <span
                      style={{
                        background: "rgba(255,107,0,0.1)",
                        border: "1px solid rgba(255,107,0,0.3)",
                        color: "#FF6B00",
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontWeight: 600,
                        fontSize: "0.65rem",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        padding: "0.2rem 0.5rem",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {point.badge}
                    </span>
                  </div>
                  <p
                    style={{
                      fontFamily: "'Barlow', sans-serif",
                      fontSize: "0.9rem",
                      lineHeight: 1.65,
                      color: "rgba(255,255,255,0.55)",
                      margin: 0,
                    }}
                  >
                    {point.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
