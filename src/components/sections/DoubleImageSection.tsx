import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import GradientBar from "../ui/GradientBar";

const DoubleImageSection = () => {
  return (
    <section className="relative my-16 bg-[#F8F8F8] lg:my-56">
      {/* Main content box */}
      <div className="container relative mx-auto  h-full pt-4 lg:h-[724px] lg:pt-16">
        {/* Content container */}
        <div className="w-full space-y-6 px-4 py-8 lg:w-1/2 lg:px-0 lg:py-0">
          <h1 className="font-roboto-condensed text-3xl font-bold text-brand-secondary lg:text-5xl">
            LOREM IPSUM DOLOR SIT AMET CONSECTETUR. DIGNISSIM TELLUS.
          </h1>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet consectetur. In malesuada morbi mi
            blandit laoreet urna sapien quam pulvinar. Dolor aliquet est tortor
            tincidunt ultricies feugiat mauris. Aliquam platea turpis porta nisl
            felis. Massa in facilisis semper libero eget eu quisque bibendum
            platea. Tortor fames.
          </p>
          <Button
            variant="default"
            className="bg-brand-primary px-8 py-2 font-inter text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-secondary hover:shadow-lg"
          >
            Leorum ipsum
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        {/* Top right image - positioned outside the box */}
        <div className="relative -top-0 right-0 h-[600px] w-full lg:absolute lg:-top-32 lg:h-[570px]  lg:w-[570px]">
          <Image
            src="/bike-booking.webp"
            alt="Business discussion"
            fill
            className="object-cover"
          />
        </div>

        {/* Bottom content box with image */}
        <div className="lg:-bottom-30 relative bottom-0 left-0 w-full shadow-none lg:absolute lg:w-[546px] lg:shadow-lg">
          <div className="space-y-6 bg-white p-4 lg:p-8">
            <h2 className="text-xl font-medium text-gray-900">
              Lorem ipsum dolor sit
            </h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur. Habitant vestibulum vitae
              amet habitasse semper.
            </p>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur. Egestas congue mattis ut
              placerat vitae amet suspendisse fermentum velit. Nibh dolor nunc
              id tristique sit.
            </p>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur. Hac netus consectetur amet
              quisque scelerisque facilisi. Ultricies lectus viverra pharetra
              commodo.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-[90%]">
        <GradientBar />
      </div>
    </section>
  );
};

export default DoubleImageSection;
