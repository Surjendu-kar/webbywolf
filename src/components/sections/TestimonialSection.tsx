import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
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

  const handlePrevious = () => {
    setSelectedCard((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setSelectedCard((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="my-20 bg-brand-secondary">
      <div className="container mx-auto flex flex-col gap-20 py-20">
        <div className="flex items-center justify-between">
          <div className="max-w-3xl text-white">
            <h2 className="text-2xl font-bold">Join other Sun harvesters</h2>
            <h1 className="mt-4 font-roboto-condensed text-3xl font-bold  lg:text-5xl">
              LOREM IPSUM DOLOR SIT AMET
            </h1>
            <p className="mx-auto mt-6">
              Dui euismod iaculis libero, aliquet vitae et elementum porttitor.
              Eleifend mi tristique condimentum congue fusce nunc, donec magnis
              commodo.
            </p>
          </div>
          <div>
            <Button className="bg-white px-8 py-2 font-inter font-semibold text-brand-text transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-text hover:text-white hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50">
              Leorum Ipsum
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="flex items-center justify-center gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className={`flex h-[400px] w-[300px] cursor-pointer flex-col justify-between border-none bg-white transition-all duration-300 ${
                index === selectedCard
                  ? "scale-110 shadow-xl"
                  : "scale-100 hover:scale-105"
              }`}
              onClick={() => setSelectedCard(index)}
            >
              <CardContent className="pt-2">
                <div className="mb-4 flex justify-start">
                  <Image
                    src={testimonial.iconSrc}
                    alt=""
                    width={32}
                    height={32}
                    className="h-12 w-12"
                  />
                </div>
                <p className="text-brand-text">{testimonial.content}</p>
              </CardContent>
              <CardFooter>
                <div className="flex items-center space-x-3">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900">
                      {testimonial.name}
                    </h3>
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
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
