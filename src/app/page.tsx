"use client";

import Header from "@/components/layout/Header";
import AppDownloadSection from "@/components/sections/AppDownloadSection";
import Banner from "@/components/sections/Banner";
import BenefitsSection from "@/components/sections/BenefitsSection";
import BrandSection from "@/components/sections/BrandSection";
import CardGridSection from "@/components/sections/CardGridSection";
import FeatureSection from "@/components/sections/FeatureSection";
import HeroSection from "@/components/sections/HeroSection";
import NoLimitsSection from "@/components/sections/NoLimitsSection";
import QuoteSection from "@/components/sections/QuoteSection";
import SimpleSection from "@/components/sections/SimpleSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import { Toaster } from "react-hot-toast";

function Home() {
  const bannerDescription = [
    "Lorem ipsum dolor sit amet consectetur. Mattis justo euismod volutpat vestibulum nisi at ac risus amet. Mi accumsan sagittis justo pellentesque id sed. Id tellus id luctus id. At quis nunc libero urna arcu vulputate sed ut. Nisi porta massa diam condimentum nulla quam.",
    "Lorem ipsum dolor sit amet consectetur. Volutpat in dictum nec condimentum ultrices non. Ornare semper in tincidunt pellentesque eras mauris in vitae. At viverra quis eu malesuada vel et porttitor. Nulla luctus quam lacus lacus non at. Tincidunt morbi feugiat a pulvinar euismod natoque nulla ligula. Tincidunt cursus vitae leo.",
  ];

  return (
    <main className="min-h-screen">
      <Toaster position="top-center" />

      {/* Header with transparent background */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Feature Section */}
      <FeatureSection />

      {/* Benefits Section */}
      <BenefitsSection />

      {/* First Banner */}
      <Banner
        backgroundImage="/banner/banner-motorcycle-rain.webp"
        title="LOREM IPSUM DOLOR SIT AMET CONSECTETUR. QUIS ADIPISCING PURUS EGESTAS ALIQUAM VIVERRA MI."
        description={bannerDescription}
      />

      {/* Brand Section */}
      <BrandSection />

      {/* Card Grid Section */}
      <CardGridSection />

      {/* Second Banner */}
      <Banner
        backgroundImage="/banner/banner-2.webp"
        title="DOLOR SIT AMET CONSECTETUR. QUIS ADIPISCING PURUS EGESTAS ALIQUAM VIVERRA MI. DOLOR SIT AMET CONSECTETUR. QUIS ADIPISCING"
        height="h-[600px]"
      />

      {/* Quote Section */}
      <QuoteSection />

      {/* App Download Section */}
      <AppDownloadSection />

      {/* No Limits Section */}
      <NoLimitsSection />

      {/* Simple Section */}
      <SimpleSection />

      {/* Testimonial Section */}
      <TestimonialSection />
    </main>
  );
}

export default Home;
