import { useEffect, useRef, useState } from "react";
import { trpc } from "@/lib/trpc";
import { MapPin, Phone, Mail, Send, CheckCircle, AlertCircle } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    label: "Location",
    value: "Palestine",
    sub: "Serving the Palestinian & regional market",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+970 XX XXX XXXX",
    sub: "Available during business hours",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@denkermann.ps",
    sub: "We respond within 24 hours",
  },
];

export default function ContactSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    product: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const submitInquiry = trpc.contact.submit.useMutation({
    onSuccess: () => {
      setSubmitted(true);
      setForm({ name: "", email: "", phone: "", company: "", product: "", message: "" });
    },
    onError: (err: { message?: string }) => {
      setError(err.message || "Something went wrong. Please try again.");
    },
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!form.name || !form.email || !form.message) {
      setError("Please fill in all required fields.");
      return;
    }
    submitInquiry.mutate(form);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.1)",
    color: "white",
    fontFamily: "'Barlow', sans-serif",
    fontSize: "0.9rem",
    padding: "0.75rem 1rem",
    outline: "none",
    transition: "border-color 0.2s ease",
    boxSizing: "border-box",
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "'Barlow Condensed', sans-serif",
    fontWeight: 600,
    fontSize: "0.7rem",
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    color: "rgba(255,255,255,0.5)",
    display: "block",
    marginBottom: "0.375rem",
  };

  return (
    <section
      id="contact"
      ref={ref}
      style={{
        background: "#0a0a0a",
        padding: "6rem 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('https://denkermap-mwr9pxu8.manus.space/manus-storage/brochure_background_cb80e242.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.05,
        }}
      />

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "4rem",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.75rem",
              marginBottom: "1rem",
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
              Get In Touch
            </span>
            <div style={{ width: "32px", height: "2px", background: "#FF6B00" }} />
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
            REQUEST A{" "}
            <span style={{ color: "#FF6B00", fontStyle: "italic" }}>QUOTE</span>
          </h2>
          <p
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontSize: "1rem",
              color: "rgba(255,255,255,0.45)",
              marginTop: "1rem",
              maxWidth: "500px",
              margin: "1rem auto 0",
              lineHeight: 1.6,
            }}
          >
            Contact Denkermann Palestine for product inquiries, pricing, and distribution information.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            gap: "3rem",
            alignItems: "start",
          }}
          className="grid-cols-1 lg:grid-cols-3"
        >
          {/* Contact info */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-30px)",
              transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginBottom: "2.5rem" }}>
              {contactInfo.map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: "1rem",
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      background: "rgba(255,107,0,0.1)",
                      border: "1px solid rgba(255,107,0,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <item.icon size={18} color="#FF6B00" />
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontWeight: 600,
                        fontSize: "0.65rem",
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        color: "rgba(255,255,255,0.35)",
                        marginBottom: "0.25rem",
                      }}
                    >
                      {item.label}
                    </div>
                    <div
                      style={{
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontWeight: 700,
                        fontSize: "1rem",
                        color: "white",
                        marginBottom: "0.125rem",
                      }}
                    >
                      {item.value}
                    </div>
                    <div
                      style={{
                        fontFamily: "'Barlow', sans-serif",
                        fontSize: "0.8rem",
                        color: "rgba(255,255,255,0.35)",
                      }}
                    >
                      {item.sub}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Domain badge */}
            <div
              style={{
                background: "#1a1a1a",
                border: "1px solid rgba(255,107,0,0.2)",
                padding: "1.25rem",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 900,
                  fontSize: "1.25rem",
                  color: "#FF6B00",
                  letterSpacing: "0.1em",
                  marginBottom: "0.25rem",
                }}
              >
                DENKERMANN.PS
              </div>
              <div
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontSize: "0.75rem",
                  color: "rgba(255,255,255,0.35)",
                }}
              >
                Official Palestinian Distributor
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div
            style={{
              background: "#1a1a1a",
              border: "1px solid rgba(255,255,255,0.06)",
              padding: "2.5rem",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(30px)",
              transition: "opacity 0.7s ease 0.3s, transform 0.7s ease 0.3s",
            }}
          >
            {submitted ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "3rem",
                  textAlign: "center",
                  gap: "1rem",
                }}
              >
                <CheckCircle size={48} color="#FF6B00" />
                <h3
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 800,
                    fontSize: "1.75rem",
                    textTransform: "uppercase",
                    color: "white",
                    margin: 0,
                  }}
                >
                  INQUIRY SENT!
                </h3>
                <p
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontSize: "0.9rem",
                    color: "rgba(255,255,255,0.55)",
                    lineHeight: 1.6,
                    maxWidth: "360px",
                  }}
                >
                  Thank you for your inquiry. Our team at Denkermann Palestine will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  style={{
                    background: "transparent",
                    border: "1px solid rgba(255,107,0,0.4)",
                    color: "#FF6B00",
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 700,
                    fontSize: "0.75rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    padding: "0.625rem 1.5rem",
                    cursor: "pointer",
                    marginTop: "0.5rem",
                  }}
                >
                  SEND ANOTHER
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "1.25rem",
                    marginBottom: "1.25rem",
                  }}
                  className="grid-cols-1 sm:grid-cols-2"
                >
                  <div>
                    <label style={labelStyle}>Full Name *</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your full name"
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "#FF6B00")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                      required
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Email Address *</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="your@email.com"
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "#FF6B00")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                      required
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Phone Number</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+970 XX XXX XXXX"
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "#FF6B00")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Company / Workshop</label>
                    <input
                      type="text"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      placeholder="Your company name"
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "#FF6B00")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: "1.25rem" }}>
                  <label style={labelStyle}>Product of Interest</label>
                  <select
                    value={form.product}
                    onChange={(e) => setForm({ ...form, product: e.target.value })}
                    style={{ ...inputStyle, appearance: "none" }}
                    onFocus={(e) => (e.target.style.borderColor = "#FF6B00")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                  >
                    <option value="" style={{ background: "#1a1a1a" }}>Select a product...</option>
                    <option value="A21" style={{ background: "#1a1a1a" }}>Oil Filter — Series A21</option>
                    <option value="A14" style={{ background: "#1a1a1a" }}>Air Filter — Series A14</option>
                    <option value="A12" style={{ background: "#1a1a1a" }}>Fuel Filter — Series A12</option>
                     <option value="A11" style={{ background: "#1a1a1a" }}>Cabin Filter — Series A11</option>
                     <option value="all" style={{ background: "#1a1a1a" }}>All Products / General Inquiry</option>
                  </select>
                </div>

                <div style={{ marginBottom: "1.75rem" }}>
                  <label style={labelStyle}>Message *</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us about your requirements, quantities, vehicle types, or any other details..."
                    rows={5}
                    style={{ ...inputStyle, resize: "vertical" }}
                    onFocus={(e) => (e.target.style.borderColor = "#FF6B00")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                    required
                  />
                </div>

                {error && (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      color: "#ff4444",
                      fontFamily: "'Barlow', sans-serif",
                      fontSize: "0.875rem",
                      marginBottom: "1rem",
                    }}
                  >
                    <AlertCircle size={16} />
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={submitInquiry.isPending}
                  style={{
                    background: "#FF6B00",
                    color: "white",
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 700,
                    fontSize: "0.875rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    padding: "1rem 2.5rem",
                    border: "none",
                    cursor: submitInquiry.isPending ? "not-allowed" : "pointer",
                    opacity: submitInquiry.isPending ? 0.7 : 1,
                    transition: "background 0.2s ease, transform 0.2s ease",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    width: "100%",
                    justifyContent: "center",
                  }}
                  onMouseEnter={(e) => {
                    if (!submitInquiry.isPending) {
                      e.currentTarget.style.background = "#FF8C33";
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#FF6B00";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <Send size={16} />
                  {submitInquiry.isPending ? "SENDING..." : "SEND INQUIRY"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
