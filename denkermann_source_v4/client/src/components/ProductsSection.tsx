import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

const products = [
  {
    code: "A21",
    name: "Oil Filter",
    subtitle: "ÖLFILTER · FILTRE À HUILE",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663030895245/Mwr9PxU8EVJFVVnyKZNgKp/denkermann_oil_filter_product-nZtvKosu6nef7w9rwrvPZz.webp",
    description:
      "High-efficiency cellulose and synthetic media engineered for maximum engine protection. Features an anti-drain-back valve and pressure relief valve for reliable cold-start performance.",
    specs: [
      { label: "Thread Size", value: "M20 × 1.5" },
      { label: "Bypass Pressure", value: "0.8 – 1.2 bar" },
      { label: "Media Type", value: "Synthetic / Cellulose" },
      { label: "Anti-Drain Valve", value: "Yes" },
      { label: "Operating Temp.", value: "–30°C to +150°C" },
      { label: "Service Interval", value: "15,000 km" },
    ],
    accent: "#FF6B00",
  },
  {
    code: "A14",
    name: "Air Filter",
    subtitle: "LUFTFILTER · FILTRE À AIR",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663030895245/Mwr9PxU8EVJFVVnyKZNgKp/denkermann_air_filter_product-RTWDfCeiaBJSaxSw2C2Vk8.webp",
    description:
      "Multi-layer filtration media capturing 99.5% of airborne particles. Optimised for maximum airflow and engine longevity, with a reinforced plastic frame for precise fitment.",
    specs: [
      { label: "Filtration Efficiency", value: "99.5%" },
      { label: "Pressure Drop", value: "< 2.5 kPa" },
      { label: "Media Type", value: "Multi-Layer Paper" },
      { label: "Dust Capacity", value: "High" },
      { label: "Frame Material", value: "Reinforced Plastic" },
      { label: "Service Interval", value: "20,000 km" },
    ],
    accent: "#FF6B00",
  },
  {
    code: "A12",
    name: "Fuel Filter",
    subtitle: "KRAFTSTOFFFILTER · FILTRE À CARBURANT",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663030895245/Mwr9PxU8EVJFVVnyKZNgKp/denkermann_fuel_filter_product-aJMcTrMybCiGLSvDvqgHnK.webp",
    description:
      "Protects injectors and fuel pump from contamination. Compatible with both petrol and diesel systems. High dirt-holding capacity with a 10 µm micron rating for superior fuel cleanliness.",
    specs: [
      { label: "Max Flow Rate", value: "120 L/h" },
      { label: "Burst Pressure", value: "10 bar" },
      { label: "Compatibility", value: "Petrol & Diesel" },
      { label: "Micron Rating", value: "10 µm" },
      { label: "Housing Material", value: "Steel / Aluminium" },
      { label: "Service Interval", value: "30,000 km" },
    ],
    accent: "#FF6B00",
  },
  {
    code: "A11",
    name: "Cabin Filter",
    subtitle: "INNENRAUMFILTER · FILTRE D'HABITACLE",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663030895245/Mwr9PxU8EVJFVVnyKZNgKp/denkermann_cabin_filter_product-M9p2TSvDmMQjmAe9yZetoe.webp",
    description:
      "Filters pollen, dust, fine particles, and airborne contaminants from the vehicle cabin. Provides clean, healthy air for driver and passengers. Available in standard and activated-carbon variants for odour elimination.",
    specs: [
      { label: "Filtration Efficiency", value: "99.0%" },
      { label: "Particle Size", value: "< 2.5 µm" },
      { label: "Media Type", value: "Multi-Layer / Carbon" },
      { label: "Pollen Blocking", value: "Yes" },
      { label: "Odour Elimination", value: "Carbon Variant" },
      { label: "Service Interval", value: "15,000 km" },
    ],
    accent: "#FF6B00",
  },
];

function ProductCard({ product, index, visible }: { product: typeof products[0]; index: number; visible: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#1a1a1a",
        border: `1px solid ${hovered ? "#FF6B00" : "rgba(255,255,255,0.06)"}`,
        overflow: "hidden",
        transition: "border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease",
        transform: visible
          ? hovered ? "translateY(-8px)" : "translateY(0)"
          : "translateY(40px)",
        opacity: visible ? 1 : 0,
        transitionDelay: `${index * 0.15}s`,
        boxShadow: hovered ? "0 20px 50px rgba(255,107,0,0.12)" : "none",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Image */}
      <div style={{ position: "relative", overflow: "hidden", height: "260px" }}>
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.5s ease",
            transform: hovered ? "scale(1.05)" : "scale(1)",
            filter: "brightness(0.8)",
          }}
        />
        {/* Gradient overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(0deg, rgba(26,26,26,1) 0%, transparent 60%)",
          }}
        />
        {/* Product code badge */}
        <div
          style={{
            position: "absolute",
            top: "1rem",
            left: "1rem",
            background: "#FF6B00",
            padding: "0.25rem 0.625rem",
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 700,
            fontSize: "0.7rem",
            letterSpacing: "0.15em",
            color: "white",
          }}
        >
          SERIES {product.code}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: "1.5rem", flex: 1, display: "flex", flexDirection: "column" }}>
        {/* Subtitle */}
        <p
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 600,
            fontSize: "0.65rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "rgba(255,107,0,0.7)",
            marginBottom: "0.375rem",
          }}
        >
          {product.subtitle}
        </p>

        {/* Name */}
        <h3
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 800,
            fontSize: "1.75rem",
            textTransform: "uppercase",
            color: "white",
            lineHeight: 1,
            marginBottom: "0.75rem",
          }}
        >
          {product.name}
        </h3>

        {/* Description */}
        <p
          style={{
            fontFamily: "'Barlow', sans-serif",
            fontSize: "0.875rem",
            lineHeight: 1.65,
            color: "rgba(255,255,255,0.55)",
            marginBottom: "1.25rem",
            flex: 1,
          }}
        >
          {product.description}
        </p>

        {/* Specs grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "0",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            paddingTop: "1rem",
            marginBottom: "1.25rem",
          }}
        >
          {product.specs.map((spec, i) => (
            <div
              key={i}
              style={{
                padding: "0.5rem 0",
                borderBottom: "1px solid rgba(255,255,255,0.04)",
              }}
            >
              <div
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontSize: "0.65rem",
                  color: "rgba(255,255,255,0.35)",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  marginBottom: "0.125rem",
                }}
              >
                {spec.label}
              </div>
              <div
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.875rem",
                  color: "white",
                }}
              >
                {spec.value}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <button
          onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: "transparent",
            border: "1px solid rgba(255,107,0,0.3)",
            color: "#FF6B00",
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 700,
            fontSize: "0.75rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            padding: "0.625rem 1rem",
            cursor: "pointer",
            transition: "background 0.2s ease, border-color 0.2s ease",
            width: "100%",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(255,107,0,0.1)";
            e.currentTarget.style.borderColor = "#FF6B00";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.borderColor = "rgba(255,107,0,0.3)";
          }}
        >
          INQUIRE ABOUT {product.code}
          <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
}

export default function ProductsSection() {
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
      id="products"
      ref={ref}
      style={{
        background: "#0a0a0a",
        padding: "6rem 0",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}>
        {/* Section header */}
        <div
          style={{
            marginBottom: "3.5rem",
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
              Product Range
            </span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1rem" }}>
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
              FILTRATION{" "}
              <span style={{ color: "#FF6B00", fontStyle: "italic" }}>SOLUTIONS</span>
            </h2>
            <p
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontSize: "0.9rem",
                color: "rgba(255,255,255,0.45)",
                maxWidth: "360px",
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              Four core filter families engineered for maximum protection of your engine, fuel system, and cabin air quality.
            </p>
          </div>
        </div>

        {/* Product cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1.5rem",
          }}
          className="grid-cols-1 md:grid-cols-2 xl:grid-cols-4"
        >
          {products.map((product, i) => (
            <ProductCard key={product.code} product={product} index={i} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}
