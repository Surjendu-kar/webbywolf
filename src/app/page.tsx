"use client";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import AppDownloadSection from "@/components/sections/AppDownloadSection";
import Banner from "@/components/sections/Banner";
import BenefitsSection from "@/components/sections/BenefitsSection";
import BottomSection from "@/components/sections/BottomSection";
import BrandSection from "@/components/sections/BrandSection";
import CardGridSection from "@/components/sections/CardGridSection";
import DoubleImageSection from "@/components/sections/DoubleImageSection";
import FaqSection from "@/components/sections/FaqSection";
import FeatureSection from "@/components/sections/FeatureSection";
import HeroSection from "@/components/sections/HeroSection";
import NoLimitsSection from "@/components/sections/NoLimitsSection";
import ProcessSection from "@/components/sections/ProcessSection";
import QuoteSection from "@/components/sections/QuoteSection";
import SimpleSection from "@/components/sections/SimpleSection";
import SliderSection from "@/components/sections/SliderSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import { Toaster } from "react-hot-toast";

function Home() {
  const bannerDescription = [
    "Lorem ipsum dolor sit amet consectetur. Mattis justo euismod volutpat vestibulum nisi at ac risus amet. Mi accumsan sagittis justo pellentesque id sed. Id tellus id luctus id. At quis nunc libero urna arcu vulputate sed ut. Nisi porta massa diam condimentum nulla quam.",
    "Lorem ipsum dolor sit amet consectetur. Volutpat in dictum nec condimentum ultrices non. Ornare semper in tincidunt pellentesque eras mauris in vitae. At viverra quis eu malesuada vel et porttitor. Nulla luctus quam lacus lacus non at. Tincidunt morbi feugiat a pulvinar euismod natoque nulla ligula. Tincidunt cursus vitae leo.",
  ];

  return (
    <main className="mx-auto min-h-screen max-w-[1536px]">
      <Toaster position="top-center" />

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

      {/* Process Section */}
      <ProcessSection />

      {/* Double Image Section */}
      <DoubleImageSection />

      {/* Slider Section */}
      <SliderSection />

      {/* FAQ Section */}
      <FaqSection />

      {/* Bottom Hero Section */}
      <BottomSection />
    </main>
  );
}

export default Home;
