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
    <section className="container relative mx-auto my-20 bg-[#F8F8F8] p-10 pb-0 pl-0">
      <div className="flex flex-col justify-between gap-6 lg:flex-row">
        {/* Left Content - Image */}
        <div className="relative bottom-[90px] h-[400px] w-full lg:w-[45%]">
          <Image
            src="/motorcycles/rider.webp"
            alt="Motorcycle riders"
            fill
            className="object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="w-full space-y-6 lg:w-[45%]">
          <h3 className="font-inter text-lg font-semibold text-brand-secondary">
            Lorem ipsum
          </h3>
          <h2 className="font-roboto-condensed text-3xl font-bold text-brand-text sm:text-4xl md:text-5xl">
            LOREM IPSUM DOLOR SIT AMET CONSECTETUR. ENIM DONEC.
          </h2>
          <p className="font-inter text-gray-700">
            Lorem ipsum dolor sit amet consectetur. Vel pellentesque odio enim
            aenean non. Ipsum sit ut tortor nulla. Nulla integer eget lectus nec
            et.
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
      <GradientBar />
    </section>
  );
};

export default SimpleSection;
