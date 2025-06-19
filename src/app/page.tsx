"use client";

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
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import { Toaster } from "react-hot-toast";

function Home() {
  const bannerDescription = [
    "Lorem ipsum dolor sit amet consectetur. Mattis justo euismod volutpat vestibulum nisi at ac risus amet. Mi accumsan sagittis justo pellentesque id sed. Id tellus id luctus id. At quis nunc libero urna arcu vulputate sed ut. Nisi porta massa diam condimentum nulla quam.",
    "Lorem ipsum dolor sit amet consectetur. Volutpat in dictum nec condimentum ultrices non. Ornare semper in tincidunt pellentesque eras mauris in vitae. At viverra quis eu malesuada vel et porttitor. Nulla luctus quam lacus lacus non at. Tincidunt morbi feugiat a pulvinar euismod natoque nulla ligula. Tincidunt cursus vitae leo.",
  ];

  return (
    <main className="mx-auto min-h-screen max-w-[1536px] overflow-hidden">
      <Toaster position="top-center" />

      {/* Hero Section - No animation needed as it's above the fold */}
      <HeroSection />

      {/* Feature Section */}
      <ScrollAnimation direction="right">
        <FeatureSection />
      </ScrollAnimation>

      {/* Benefits Section */}
      <ScrollAnimation direction="left">
        <BenefitsSection />
      </ScrollAnimation>

      {/* First Banner */}
      <ScrollAnimation direction="up">
        <Banner
          backgroundImage="/banner/banner-motorcycle-rain.webp"
          title="LOREM IPSUM DOLOR SIT AMET CONSECTETUR. QUIS ADIPISCING PURUS EGESTAS ALIQUAM VIVERRA MI."
          description={bannerDescription}
        />
      </ScrollAnimation>

      {/* Brand Section */}
      <ScrollAnimation direction="down">
        <BrandSection />
      </ScrollAnimation>

      {/* Card Grid Section */}
      <ScrollAnimation direction="right">
        <CardGridSection />
      </ScrollAnimation>

      {/* Second Banner */}
      <ScrollAnimation direction="up">
        <Banner
          backgroundImage="/banner/banner-2.webp"
          title="DOLOR SIT AMET CONSECTETUR. QUIS ADIPISCING PURUS EGESTAS ALIQUAM VIVERRA MI. DOLOR SIT AMET CONSECTETUR. QUIS ADIPISCING"
          height="h-[600px]"
        />
      </ScrollAnimation>

      {/* Quote Section */}
      <ScrollAnimation direction="left">
        <QuoteSection />
      </ScrollAnimation>

      {/* App Download Section */}
      <ScrollAnimation direction="right">
        <AppDownloadSection />
      </ScrollAnimation>

      {/* No Limits Section */}
      <ScrollAnimation direction="up">
        <NoLimitsSection />
      </ScrollAnimation>

      {/* Simple Section */}
      <ScrollAnimation direction="left">
        <SimpleSection />
      </ScrollAnimation>

      {/* Testimonial Section */}
      <ScrollAnimation direction="right">
        <TestimonialSection />
      </ScrollAnimation>

      {/* Process Section */}
      <ScrollAnimation direction="down">
        <ProcessSection />
      </ScrollAnimation>

      {/* Double Image Section */}
      <ScrollAnimation direction="left">
        <DoubleImageSection />
      </ScrollAnimation>

      {/* Slider Section */}
      <ScrollAnimation direction="right">
        <SliderSection />
      </ScrollAnimation>

      {/* FAQ Section */}
      <ScrollAnimation direction="up">
        <FaqSection />
      </ScrollAnimation>

      {/* Bottom Hero Section */}
      <ScrollAnimation direction="down">
        <BottomSection />
      </ScrollAnimation>
    </main>
  );
}

export default Home;
