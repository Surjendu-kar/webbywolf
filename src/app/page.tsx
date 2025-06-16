import Header from "@/components/layout/Header";
import BannerOne from "@/components/sections/BannerOne";
import BenefitsSection from "@/components/sections/BenefitsSection";
import BrandSection from "@/components/sections/BrandSection";
import FeatureSection from "@/components/sections/FeatureSection";
import HeroSection from "@/components/sections/HeroSection";

function Home() {
  return (
    <main className="min-h-screen">
      {/* Header with transparent background */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Feature Section */}
      <FeatureSection />

      {/* Benefits Section */}
      <BenefitsSection />

      {/* Banner One */}
      <BannerOne />

      {/* Brand Section */}
      <BrandSection />
    </main>
  );
}

export default Home;
