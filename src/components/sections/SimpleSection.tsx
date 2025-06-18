import { ArrowRight } from "lucide-react";
import Image from "next/image";
import GradientBar from "../ui/GradientBar";
import { Button } from "../ui/button";

const SimpleSection = () => {
  const items = [
    { label: "Lorem Ipsum" },
    { label: "Lorem Ipsum" },
    { label: "Lorem Ipsum" },
    { label: "Lorem Ipsum" },
    { label: "Lorem Ipsum" },
    { label: "Lorem Ipsum" },
  ];

  return (
    <section className=" mr:0 relative my-10  bg-[#F8F8F8] lg:my-20 lg:mr-16">
      <div className=" mx-auto flex flex-col justify-between gap-6 p-0 lg:flex-row lg:py-16  lg:pr-16">
        {/* Left Content - Image */}
        <div className="relative bottom-0 h-[400px] w-full lg:bottom-[90px] lg:w-[45%]">
          <Image
            src="/motorcycles/rider.webp"
            alt="Motorcycle riders"
            fill
            className="object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="w-full space-y-6 px-4 lg:w-[45%] lg:px-0">
          <h3 className="font-inter text-lg font-semibold text-brand-secondary">
            Lorem ipsum
          </h3>
          <h2 className="font-roboto-condensed text-3xl font-bold text-brand-text sm:text-4xl md:text-5xl">
            LOREM IPSUM DOLOR SIT AMET CONSECTETUR. ENIM DONEC.
          </h2>
          <p className="font-inter text-gray-700">
            Lorem ipsum dolor sit amet consectetur. Vel pellentesque odio enim
            amet non.
          </p>

          {/* Grid of Lorem Ipsum items */}
          <div className="grid grid-cols-2 gap-4 py-4">
            {items.map((item, index) => (
              <div
                key={index}
                className="text-md font-inter font-semibold text-brand-text"
              >
                {item.label}
              </div>
            ))}
          </div>

          <Button className="mb-8 bg-brand-primary px-8 py-2 font-inter font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-secondary hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50">
            Leorum Ipsum
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>

      <div className="w-[90%]">
        <GradientBar />
      </div>
    </section>
  );
};

export default SimpleSection;
