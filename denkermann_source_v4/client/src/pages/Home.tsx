import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import TechnologySection from "@/components/TechnologySection";
import SpecsSection from "@/components/SpecsSection";
import QualitySection from "@/components/QualitySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div
      style={{
        background: "#0a0a0a",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <TechnologySection />
      <SpecsSection />
      <QualitySection />
      <ContactSection />
      <Footer />
    </div>
  );
}
