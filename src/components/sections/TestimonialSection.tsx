"use client";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import { Button } from "../ui/button";

interface Testimonial {
  id: number;
  name: string;
  content: string;
  avatar: string;
  iconSrc: string;
}

const TestimonialSection = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Jane Cooper",
      content:
        "Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod.",
      avatar: "/avatar/avatar-1.png",
      iconSrc: "/testimonial/cloud.svg",
    },
    {
      id: 2,
      name: "Ralph Edwards",
      content:
        "Vehicula sit sit pharetra bibendum ut risus accumsan. Purus, in metus, enim, ipsum morbi euismod pellentesque. Mattis pharetra accumsan eget est mi enim, id. Sit quam tortor eu tellus non, in euismod integer.",
      avatar: "/avatar/avatar-2.png",
      iconSrc: "/testimonial/star.svg",
    },
    {
      id: 3,
      name: "Courtney Henry",
      content:
        "Viverra lacus suspendisse elit, adipiscing orci, non turpis etiam sapien. Viverra blandit sem neque pretium. Duis enim semper fermentum consequat aenean libero. Blandit porta leo condimentum dolor, nisi, aliquet ante laoreet.",
      avatar: "/avatar/avatar-3.png",
      iconSrc: "/testimonial/king.svg",
    },
    {
      id: 4,
      name: "Cameron Williamson",
      content:
        "Hendrerit augue ut nunc quis integer netus. Sed rhoncus magnis habitasse. Egestas amet habitasse tellus ornare. Hendrerit senectus. Mauris eget vitae praesent neque.",
      avatar: "/avatar/avatar-4.png",
      iconSrc: "/testimonial/clock.svg",
    },
  ];

  const [selectedCard, setSelectedCard] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleCardSelect = (index: number) => {
    setSelectedCard(index);
    // Add small delay to allow for state update
    setTimeout(() => {
      const container = scrollContainerRef.current;
      const selectedElement = container?.children[index];
      if (selectedElement) {
        selectedElement.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }, 0);
  };

  const handlePrevious = () => {
    const newIndex =
      selectedCard === 0 ? testimonials.length - 1 : selectedCard - 1;
    handleCardSelect(newIndex);
  };

  const handleNext = () => {
    const newIndex =
      selectedCard === testimonials.length - 1 ? 0 : selectedCard + 1;
    handleCardSelect(newIndex);
  };

  return (
    <section className="my-20 bg-brand-secondary">
      <div className="mx-auto flex flex-col gap-8 py-10 pl-4 lg:gap-16 lg:py-20 lg:pl-20">
        {/* Title and Button */}
        <div className="flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-center lg:gap-0 ">
          <div className="max-w-3xl space-y-2 text-white lg:space-y-4">
            <h2 className="text-2xl font-bold">Join other Sun harvesters</h2>
            <h1 className="font-roboto-condensed text-3xl font-bold  lg:text-5xl">
              LOREM IPSUM DOLOR SIT AMET
            </h1>
            <p className="mx-auto">
              Dui euismod iaculis libero, aliquet vitae et elementum porttitor.
              Eleifend mi tristique condimentum congue fusce nunc, donec magnis
              commodo.
            </p>
          </div>
          <div className="pr-0 lg:pr-20">
            <Button className="bg-white px-8 py-2 font-inter font-semibold text-brand-text transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-text hover:text-white hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50">
              Leorum Ipsum
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="relative flex w-full items-center justify-start gap-6  lg:justify-center">
          <div
            className="scrollbar-hide flex items-center gap-6 overflow-x-auto pl-5 pr-6"
            ref={scrollContainerRef}
          >
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="py-8">
                <Card
                  className={`flex h-[350px] w-[300px] shrink-0 cursor-pointer flex-col justify-center border-none bg-white transition-all duration-300 lg:h-[400px] lg:w-[364px] ${
                    index === selectedCard
                      ? "z-10 scale-110 shadow-xl"
                      : "scale-100 hover:scale-105"
                  }`}
                  onClick={() => handleCardSelect(index)}
                >
                  <CardContent className="">
                    <div className="mb-4 flex justify-start">
                      <Image
                        src={testimonial.iconSrc}
                        alt=""
                        width={32}
                        height={32}
                        className="h-8 w-8 lg:h-12 lg:w-12"
                      />
                    </div>
                  </CardContent>
                  <CardContent>
                    <p className="text-sm text-brand-text lg:text-base">
                      {testimonial.content}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <div className="flex items-center space-x-3">
                      <div className="relative h-8 w-8 overflow-hidden rounded-full lg:h-12 lg:w-12">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-xs font-semibold text-gray-900 lg:text-sm">
                          {testimonial.name}
                        </h3>
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-start space-x-4">
          <button
            onClick={handlePrevious}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-600 transition-colors hover:bg-gray-100"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button
            onClick={handleNext}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-600 transition-colors hover:bg-gray-100"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
