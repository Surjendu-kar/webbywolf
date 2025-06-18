"use client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface SlideData {
  id: number;
  image: string;
  title: string;
  description: string;
}

const SliderSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: SlideData[] = [
    {
      id: 1,
      image: "/motorcycles/group-riders.webp",
      title: "Artist & Investor",
      description:
        "Enim sagittis, sit porttitor morbi lobortis amet, libero adipiscing auctor. Malesuada tristique libero, id netus tincidunt. Egestas ac arcu amet nisl quis est ...",
    },
    {
      id: 2,
      image: "/motorcycles/rider.webp",
      title: "Professional Rider",
      description:
        "Lorem ipsum dolor sit amet consectetur. Malesuada tristique libero, id netus tincidunt. Egestas ac arcu amet nisl quis estlibero, id netus tincidunt...",
    },
    {
      id: 3,
      image: "/motorcycles/sunset-riders.webp",
      title: "Sunset Adventurers",
      description:
        "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud libero, id netus tincidunt...",
    },
    {
      id: 4,
      image: "/motorcycles/rider.webp",
      title: "Professional Rider",
      description:
        "Lorem ipsum dolor sit amet consectetur. Malesuada tristique libero, id netus tincidunt. Egestas ac arcu amet nisl quis estlibero, id netus tincidunt...",
    },
    {
      id: 5,
      image: "/motorcycles/sunset-riders.webp",
      title: "Sunset Adventurers",
      description:
        "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud libero, id netus tincidunt...",
    },
  ];

  return (
    <section className="container mx-auto my-20">
      {/* Header */}
      <div className="px-4 text-left lg:px-0 lg:text-center">
        <h1 className="font-roboto-condensed text-3xl font-bold text-brand-text lg:text-5xl">
          LOREM IPSUM DOLOR SIT AMET
        </h1>
        <p className="mt-6  text-gray-600">
          Aliquet sed nulla tincidunt pulvinar sed fames sit facilisis dictumst.
          Ornare faucibus quis velit fringilla aliquam ultricies. Malesuada ut
          aliquam at ac est nisi, interdum etiam dignissim. Sed ut vestibulum
          eget purus ornare. Risus elit et fringilla habitant ut facilisi.
        </p>
      </div>

      {/* Slider Container */}
      <div className="relative mx-auto flex flex-col items-center justify-center gap-8 py-10 lg:flex-row lg:justify-start lg:gap-0 lg:py-20">
        {/* Image Container */}
        <div className="w-full  lg:w-[680px] ">
          <div className="relative h-[300px]  lg:h-[400px]">
            <Image
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              fill
              className="object-cover transition-opacity duration-500"
            />
          </div>
        </div>

        {/* Content Box */}
        <div className="relative -mt-16 flex w-11/12 flex-col justify-center rounded-sm bg-white p-6 shadow-lg md:p-10 lg:-left-20 lg:mt-0 lg:w-[680px]">
          <h2 className="text-xl font-bold text-brand-text md:text-2xl">
            {slides[currentSlide].title}
          </h2>
          <p className="mt-4 text-sm text-gray-600 md:text-base">
            {slides[currentSlide].description}
          </p>
          <button className="mt-6 flex items-center text-brand-primary hover:text-brand-secondary">
            Read Full Story
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="mt-8 flex justify-center gap-1 lg:mt-0">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 w-2 cursor-pointer rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "w-8 bg-brand-primary"
                : "bg-[#80B0ED] hover:scale-110"
            }`}
            aria-label={`Go to slide ${slide.id}`}
          />
        ))}
      </div>
    </section>
  );
};

export default SliderSection;
