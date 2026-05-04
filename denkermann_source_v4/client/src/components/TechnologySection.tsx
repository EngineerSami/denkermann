import { useEffect, useRef, useState } from "react";
import { Settings, FlaskConical, ShieldCheck, Globe } from "lucide-react";

const features = [
  {
    number: "01",
    icon: Settings,
    title: "OEM Equivalent Design",
    desc: "Each filter is reverse-engineered from OEM specifications to guarantee a perfect fit and identical performance to the original manufacturer's part.",
  },
  {
    number: "02",
    icon: FlaskConical,
    title: "Lab-Tested Media",
    desc: "Filter media is tested in accredited European laboratories for filtration efficiency, pressure drop, and burst strength against ISO 3968, ISO 4548, and ISO 5011 standards.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Anti-Contamination",
    desc: "Advanced sealing systems and anti-drain-back valves prevent oil starvation and contamination at startup, protecting your engine from the very first moment.",
  },
  {
    number: "04",
    icon: Globe,
    title: "Wide Vehicle Coverage",
    desc: "Over 15,000 references covering European, Asian, and American vehicles from 1990 to present models — one trusted source for your entire workshop.",
  },
];

export default function TechnologySection() {
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
      id="technology"
      ref={ref}
      style={{
        position: "relative",
        padding: "6rem 0",
        overflow: "hidden",
        background: "#0a0a0a",
      }}
    >
      {/* Background: engine image with heavy overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/manus-storage/engine_closeup_2aa3b812.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.08,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(135deg, rgba(10,10,10,0.98) 0%, rgba(10,10,10,0.85) 100%)",
        }}
      />

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "3rem",
            alignItems: "flex-end",
            marginBottom: "4rem",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
          className="grid-cols-1 lg:grid-cols-2"
        >
          <div>
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
                Why Denkermann
              </span>
            </div>
            <h2
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                lineHeight: 1,
                textTransform: "uppercase",
                color: "white",
                margin: 0,
              }}
            >
              TECHNOLOGY{" "}
              <span style={{ color: "#FF6B00", fontStyle: "italic" }}>THAT PROTECTS</span>
            </h2>
          </div>
          <p
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontSize: "1rem",
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.5)",
              margin: 0,
            }}
          >
            At Denkermann, we believe that premium filtration should be accessible to every driver. Our Polish engineering team designs each product to deliver OEM-level performance at a competitive price point.
          </p>
        </div>

        {/* Feature cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1px",
            background: "rgba(255,255,255,0.06)",
          }}
          className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature, i) => {
            const [hovered, setHovered] = useState(false);
            return (
              <div
                key={i}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                style={{
                  background: hovered ? "rgba(255,107,0,0.06)" : "#0a0a0a",
                  padding: "2.5rem 2rem",
                  transition: "background 0.3s ease",
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(30px)",
                  transitionDelay: `${i * 0.1}s`,
                  borderTop: hovered ? "2px solid #FF6B00" : "2px solid transparent",
                  position: "relative",
                }}
              >
                {/* Number */}
                <div
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 900,
                    fontSize: "3.5rem",
                    color: "rgba(255,107,0,0.08)",
                    lineHeight: 1,
                    position: "absolute",
                    top: "1.5rem",
                    right: "1.5rem",
                  }}
                >
                  {feature.number}
                </div>

                {/* Icon */}
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    background: "rgba(255,107,0,0.1)",
                    border: "1px solid rgba(255,107,0,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1.5rem",
                    transition: "background 0.3s ease",
                  }}
                >
                  <feature.icon size={20} color="#FF6B00" />
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 800,
                    fontSize: "1.1rem",
                    textTransform: "uppercase",
                    color: "white",
                    letterSpacing: "0.05em",
                    marginBottom: "0.75rem",
                  }}
                >
                  {feature.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontSize: "0.875rem",
                    lineHeight: 1.65,
                    color: "rgba(255,255,255,0.5)",
                    margin: 0,
                  }}
                >
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Full lineup banner */}
        <div
          style={{
            marginTop: "4rem",
            position: "relative",
            overflow: "hidden",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.7s ease 0.5s, transform 0.7s ease 0.5s",
          }}
        >
          <img
            src="https://d36hbw14aib5lz.cloudfront.net/310419663030895245/Mwr9PxU8EVJFVVnyKZNgKp/filters_lineup_a1d9f64c.jpg?Expires=1777913139&Signature=ibttdyq9gUMV0dexz8c-lpKJv4e7S-6d9LChTDJnqi26sIQinw3nXiTfeiHgXLRNL-xkOy0ZpOuVReT~DReNUJrxvrKkEL1SGLK-z1~c9quObp-nshcK6h8986tfTr8ff61L8Qbeu0Jg4JNMw4IUl8NP9jLbQlCzqfA3amc8oAM3CkBMdD~cxmek06KITMuFj9v2uEe4S1469Gpyqq1LwPs77Knk1FZQKUAe3oX62awGDe7IkKrJtVmte4LApkRLUPGT5tAEjHe4MOlQfkR1uLnAS1cT-AdGc5t3z~fEF0YnFJlg-2z01slgFDxeqBm5yI4TUCNcC5N1oq2kvhXdSg__&Key-Pair-Id=K1MP89RTKNH4J"
            alt="Denkermann Complete Filter Lineup"
            style={{
              width: "100%",
              height: "300px",
              objectFit: "cover",
              filter: "brightness(0.6)",
              display: "block",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(90deg, rgba(10,10,10,0.9) 0%, rgba(10,10,10,0.3) 60%, rgba(10,10,10,0.1) 100%)",
              display: "flex",
              alignItems: "center",
              padding: "0 3rem",
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.7rem",
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "#FF6B00",
                  marginBottom: "0.5rem",
                }}
              >
                Complete Range
              </p>
              <h3
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  textTransform: "uppercase",
                  color: "white",
                  lineHeight: 1,
                  marginBottom: "0.5rem",
                }}
              >
                THE FULL{" "}
                <span style={{ color: "#FF6B00", fontStyle: "italic" }}>LINEUP</span>
              </h3>
              <p
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "0.75rem",
                  letterSpacing: "0.15em",
                  color: "rgba(255,255,255,0.4)",
                  textTransform: "uppercase",
                }}
              >
                Oil Filter · Air Filter · Fuel Filter — Complete Protection System
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
