import { useEffect, useRef, useState } from "react";

const filterSpecs = [
  {
    code: "A21",
    name: "Oil Filter",
    color: "#FF6B00",
    specs: [
      { label: "Thread Size", value: "M20 × 1.5" },
      { label: "Bypass Pressure", value: "0.8 – 1.2 bar" },
      { label: "Media Type", value: "Synthetic / Cellulose" },
      { label: "Anti-Drain Valve", value: "Yes" },
      { label: "Operating Temp.", value: "–30°C to +150°C" },
      { label: "Service Interval", value: "15,000 km" },
      { label: "Pressure Relief Valve", value: "Included" },
      { label: "Gasket Material", value: "NBR Rubber" },
    ],
  },
  {
    code: "A14",
    name: "Air Filter",
    color: "#FF6B00",
    specs: [
      { label: "Filtration Efficiency", value: "99.5%" },
      { label: "Pressure Drop", value: "< 2.5 kPa" },
      { label: "Media Type", value: "Multi-Layer Paper" },
      { label: "Dust Capacity", value: "High" },
      { label: "Frame Material", value: "Reinforced Plastic" },
      { label: "Service Interval", value: "20,000 km" },
      { label: "Test Standard", value: "ISO 5011" },
      { label: "Operating Temp.", value: "–40°C to +120°C" },
    ],
  },
  {
    code: "A12",
    name: "Fuel Filter",
    color: "#FF6B00",
    specs: [
      { label: "Max Flow Rate", value: "120 L/h" },
      { label: "Burst Pressure", value: "10 bar" },
      { label: "Compatibility", value: "Petrol & Diesel" },
      { label: "Micron Rating", value: "10 µm" },
      { label: "Housing Material", value: "Steel / Aluminium" },
      { label: "Service Interval", value: "30,000 km" },
      { label: "Operating Pressure", value: "Up to 8 bar" },
      { label: "Test Standard", value: "ISO 19438" },
    ],
  },
  {
    code: "A11",
    name: "Cabin Filter",
    color: "#FF6B00",
    specs: [
      { label: "Filtration Efficiency", value: "99.0%" },
      { label: "Particle Size", value: "< 2.5 µm" },
      { label: "Media Type", value: "Multi-Layer / Carbon" },
      { label: "Pollen Blocking", value: "Yes" },
      { label: "Odour Elimination", value: "Carbon Variant" },
      { label: "Service Interval", value: "15,000 km" },
      { label: "Test Standard", value: "ISO 11155" },
      { label: "Operating Temp.", value: "–30°C to +80°C" },
    ],
  },
];

export default function SpecsSection() {
  const [visible, setVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const active = filterSpecs[activeTab];

  return (
    <section
      id="specs"
      ref={ref}
      style={{
        background: "#111111",
        padding: "6rem 0",
        position: "relative",
      }}
    >
      {/* Background grid pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,107,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,0,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div
          style={{
            marginBottom: "3rem",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
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
              Technical Specifications
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
            PRODUCT{" "}
            <span style={{ color: "#FF6B00", fontStyle: "italic" }}>SPECIFICATIONS</span>
          </h2>
        </div>

        {/* Tab selector */}
        <div
          style={{
            display: "flex",
            gap: "0",
            marginBottom: "2.5rem",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            opacity: visible ? 1 : 0,
            transition: "opacity 0.7s ease 0.2s",
          }}
        >
          {filterSpecs.map((filter, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              style={{
                background: "none",
                border: "none",
                borderBottom: activeTab === i ? "2px solid #FF6B00" : "2px solid transparent",
                color: activeTab === i ? "#FF6B00" : "rgba(255,255,255,0.4)",
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: "0.875rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                padding: "0.875rem 1.5rem",
                cursor: "pointer",
                transition: "color 0.2s ease, border-color 0.2s ease",
                marginBottom: "-1px",
              }}
            >
              {filter.name} <span style={{ opacity: 0.5, fontSize: "0.75rem" }}>({filter.code})</span>
            </button>
          ))}
        </div>

        {/* Specs content */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "3rem",
            alignItems: "start",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.5s ease, transform 0.5s ease",
          }}
          className="grid-cols-1 lg:grid-cols-2"
        >
          {/* Specs table */}
          <div>
            <div
              style={{
                background: "#1a1a1a",
                border: "1px solid rgba(255,255,255,0.06)",
                overflow: "hidden",
              }}
            >
              {/* Table header */}
              <div
                style={{
                  background: "rgba(255,107,0,0.08)",
                  borderBottom: "1px solid rgba(255,107,0,0.2)",
                  padding: "1rem 1.5rem",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <span
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 700,
                      fontSize: "1.25rem",
                      textTransform: "uppercase",
                      color: "white",
                    }}
                  >
                    {active.name}
                  </span>
                </div>
                <span
                  style={{
                    background: "#FF6B00",
                    color: "white",
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 700,
                    fontSize: "0.75rem",
                    letterSpacing: "0.1em",
                    padding: "0.25rem 0.625rem",
                  }}
                >
                  {active.code}
                </span>
              </div>

              {/* Spec rows */}
              {active.specs.map((spec, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "0.875rem 1.5rem",
                    borderBottom: i < active.specs.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none",
                    background: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.015)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Barlow', sans-serif",
                      fontSize: "0.875rem",
                      color: "rgba(255,255,255,0.5)",
                    }}
                  >
                    {spec.label}
                  </span>
                  <span
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 600,
                      fontSize: "0.9rem",
                      color: "white",
                      textAlign: "right",
                    }}
                  >
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual + info */}
          <div>
            {/* Product image */}
            <div
              style={{
                position: "relative",
                overflow: "hidden",
                marginBottom: "1.5rem",
                border: "1px solid rgba(255,107,0,0.15)",
              }}
            >
              <img
                src={activeTab === 0 ? "https://d2xsxph8kpxj0f.cloudfront.net/310419663030895245/Mwr9PxU8EVJFVVnyKZNgKp/denkermann_oil_filter_product-nZtvKosu6nef7w9rwrvPZz.webp" : activeTab === 1 ? "https://d2xsxph8kpxj0f.cloudfront.net/310419663030895245/Mwr9PxU8EVJFVVnyKZNgKp/denkermann_air_filter_product-RTWDfCeiaBJSaxSw2C2Vk8.webp" : activeTab === 2 ? "https://d2xsxph8kpxj0f.cloudfront.net/310419663030895245/Mwr9PxU8EVJFVVnyKZNgKp/denkermann_fuel_filter_product-aJMcTrMybCiGLSvDvqgHnK.webp" : "https://d2xsxph8kpxj0f.cloudfront.net/310419663030895245/Mwr9PxU8EVJFVVnyKZNgKp/denkermann_cabin_filter_product-M9p2TSvDmMQjmAe9yZetoe.webp"}
                alt={active.name}
                style={{
                  width: "100%",
                  height: "220px",
                  objectFit: "cover",
                  filter: "brightness(0.75)",
                  display: "block",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(135deg, rgba(10,10,10,0.5) 0%, transparent 60%)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "1rem",
                  left: "1rem",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 900,
                    fontSize: "2rem",
                    color: "white",
                    textTransform: "uppercase",
                    lineHeight: 1,
                  }}
                >
                  {active.name}
                </div>
                <div
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 600,
                    fontSize: "0.7rem",
                    letterSpacing: "0.2em",
                    color: "#FF6B00",
                    textTransform: "uppercase",
                  }}
                >
                  Series {active.code}
                </div>
              </div>
            </div>

            {/* Info cards */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              {[
                { label: "OEM Compatible", value: "Yes" },
                { label: "Quality Standard", value: "European" },
                { label: "Origin", value: "Poland" },
                { label: "Certification", value: "ISO 9001" },
              ].map((item, i) => (
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
                      fontSize: "1.1rem",
                      color: "#FF6B00",
                      marginBottom: "0.25rem",
                    }}
                  >
                    {item.value}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Barlow', sans-serif",
                      fontSize: "0.7rem",
                      color: "rgba(255,255,255,0.4)",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {item.label}
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
