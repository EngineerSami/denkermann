import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Technology", href: "#technology" },
  { label: "Quality", href: "#quality" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: "background 0.3s ease, box-shadow 0.3s ease",
        background: scrolled
          ? "rgba(10,10,10,0.97)"
          : "rgba(10,10,10,0.6)",
        backdropFilter: "blur(12px)",
        boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.5)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,107,0,0.15)" : "1px solid transparent",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "68px",
        }}
      >
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); handleNavClick("#hero"); }}
          style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", textDecoration: "none", gap: "3px" }}
        >
          {/* Original Denkermann logo image — full orange, transparent background */}
          <img
            src="https://denkermap-mwr9pxu8.manus.space/manus-storage/denkermann_logo_brand_ef707aa8.png"
            alt="Denkermann"
            style={{ height: "32px", width: "auto", display: "block" }}
          />
          {/* Palestine label — matches Denkermann logo style */}
          <span style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 900,
            fontStyle: "italic",
            fontSize: "0.85rem",
            letterSpacing: "0.06em",
            color: "#FF6B00",
            textTransform: "uppercase",
            lineHeight: 1,
            paddingLeft: "1px",
          }}>PALESTINE</span>
        </a>

        {/* Desktop nav links */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2rem",
          }}
          className="hidden md:flex"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 600,
                fontSize: "0.8rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.75)",
                textDecoration: "none",
                transition: "color 0.2s ease",
                position: "relative",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#FF6B00")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.75)")}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
            style={{
              background: "#FF6B00",
              color: "white",
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 700,
              fontSize: "0.75rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              padding: "0.5rem 1.25rem",
              textDecoration: "none",
              transition: "background 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#FF8C33")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#FF6B00")}
          >
            GET QUOTE
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none",
            border: "none",
            color: "white",
            cursor: "pointer",
            padding: "0.25rem",
          }}
          className="flex md:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            background: "rgba(10,10,10,0.98)",
            borderTop: "1px solid rgba(255,107,0,0.2)",
            padding: "1rem 1.5rem 1.5rem",
          }}
          className="md:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              style={{
                display: "block",
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 600,
                fontSize: "1rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.8)",
                textDecoration: "none",
                padding: "0.75rem 0",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
                transition: "color 0.2s ease",
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
            style={{
              display: "block",
              background: "#FF6B00",
              color: "white",
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 700,
              fontSize: "0.875rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              padding: "0.75rem 1.25rem",
              textDecoration: "none",
              textAlign: "center",
              marginTop: "1rem",
            }}
          >
            GET QUOTE
          </a>
        </div>
      )}
    </nav>
  );
}
