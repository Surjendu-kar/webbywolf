import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

const BottomSection = () => {
  return (
    <section className="container mx-auto flex flex-col  items-center justify-center gap-5 py-10 lg:py-20">
      {/* Logo */}
      <div className=" flex-shrink-0 bg-[#DBDBDB] px-4 py-2 md:px-6 lg:px-8">
        <span className="font-roboto-condensed text-xl font-bold text-brand-text md:text-2xl lg:text-3xl">
          LOGO
        </span>
      </div>

      {/* Heading */}
      <h1 className="max-w-3xl text-center font-roboto-condensed text-4xl font-bold uppercase text-brand-text lg:text-5xl">
        LOREM IPSUM DOLOR SIT AMET CONSECTETUR. DUI.
      </h1>

      {/* Description */}
      <p className=" max-w-md text-center text-gray-700">
        Lorem ipsum dolor sit amet consectetur. Nisi faucibus vitae porttitor
        pharetra tempor quis arcu. Ipsum nullam.
      </p>

      {/* Button */}
      <Button className="bg-brand-primary px-8 py-2 font-inter font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-secondary hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50">
        Leorum Ipsum
        <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
    </section>
  );
};

export default BottomSection;
