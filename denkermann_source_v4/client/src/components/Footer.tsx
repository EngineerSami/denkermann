export default function Footer() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      style={{
        background: "#050505",
        borderTop: "1px solid rgba(255,107,0,0.15)",
        padding: "3rem 0 2rem",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: "3rem",
            marginBottom: "3rem",
          }}
          className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
        >
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  background: "#FF6B00",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 900,
                  fontSize: "1.1rem",
                  color: "white",
                }}
              >
                D
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 800,
                    fontSize: "1rem",
                    letterSpacing: "0.05em",
                    color: "white",
                    textTransform: "uppercase",
                    lineHeight: 1,
                  }}
                >
                  DENKER<span style={{ color: "#FF6B00" }}>MANN</span>
                </div>
                <div
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 600,
                    fontSize: "0.55rem",
                    letterSpacing: "0.25em",
                    color: "#FF6B00",
                    textTransform: "uppercase",
                  }}
                >
                  PALESTINE
                </div>
              </div>
            </div>
            <p
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontSize: "0.85rem",
                lineHeight: 1.65,
                color: "rgba(255,255,255,0.4)",
                marginBottom: "1.25rem",
                maxWidth: "280px",
              }}
            >
              Official Palestinian distributor of Denkermann automotive filters. Polish manufacturing. European quality standards.
            </p>
            <div
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: "0.875rem",
                letterSpacing: "0.1em",
                color: "#FF6B00",
              }}
            >
              DENKERMANN.PS
            </div>
          </div>

          {/* Products */}
          <div>
            <h4
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: "0.75rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.4)",
                marginBottom: "1rem",
              }}
            >
              Products
            </h4>
            {[
{ label: "Oil Filter — A21", href: "#products" },
               { label: "Air Filter — A14", href: "#products" },
               { label: "Fuel Filter — A12", href: "#products" },
               { label: "Cabin Filter — A11", href: "#products" },
              { label: "Specifications", href: "#specs" },
            ].map((link, i) => (
              <a
                key={i}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                style={{
                  display: "block",
                  fontFamily: "'Barlow', sans-serif",
                  fontSize: "0.875rem",
                  color: "rgba(255,255,255,0.5)",
                  textDecoration: "none",
                  marginBottom: "0.5rem",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#FF6B00")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Company */}
          <div>
            <h4
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: "0.75rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.4)",
                marginBottom: "1rem",
              }}
            >
              Company
            </h4>
            {[
              { label: "About Us", href: "#about" },
              { label: "Technology", href: "#technology" },
              { label: "Quality Assurance", href: "#quality" },
              { label: "Contact", href: "#contact" },
            ].map((link, i) => (
              <a
                key={i}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                style={{
                  display: "block",
                  fontFamily: "'Barlow', sans-serif",
                  fontSize: "0.875rem",
                  color: "rgba(255,255,255,0.5)",
                  textDecoration: "none",
                  marginBottom: "0.5rem",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#FF6B00")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Standards */}
          <div>
            <h4
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: "0.75rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.4)",
                marginBottom: "1rem",
              }}
            >
              Standards
            </h4>
            {["ISO 9001 Certified", "OEM Equivalent", "European Lab Tested", "Made in Poland"].map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  marginBottom: "0.5rem",
                }}
              >
                <div
                  style={{
                    width: "4px",
                    height: "4px",
                    background: "#FF6B00",
                    borderRadius: "50%",
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontSize: "0.875rem",
                    color: "rgba(255,255,255,0.5)",
                  }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            paddingTop: "1.5rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <p
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontSize: "0.8rem",
              color: "rgba(255,255,255,0.25)",
              margin: 0,
            }}
          >
            © {new Date().getFullYear()} Denkermann Palestine. All rights reserved. | DENKERMANN.PS
          </p>
          <p
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "0.75rem",
              letterSpacing: "0.1em",
              color: "rgba(255,255,255,0.2)",
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            Polish Manufacturing · European Quality · Palestinian Distribution
          </p>
        </div>
      </div>
    </footer>
  );
}
