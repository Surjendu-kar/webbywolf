import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import GradientBar from "../ui/GradientBar";

const DoubleImageSection = () => {
  return (
    <section className="relative  my-56 bg-[#F8F8F8]">
      {/* Main content box */}
      <div className="container relative mx-auto  pt-16 lg:h-[724px]">
        {/* Top right image - positioned outside the box */}
        <div className="absolute -top-24 right-0 h-[570px] w-[570px]  lg:-top-32">
          <Image
            src="/bike-booking.webp"
            alt="Business discussion"
            fill
            className="object-cover"
          />
        </div>

        {/* Content container */}
        <div className="w-full space-y-6 py-8 lg:w-1/2">
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

        {/* Bottom content box with image */}
        <div className="-bottom-30 absolute left-0 w-[546px] shadow-lg">
          <div className="space-y-6 bg-white p-8">
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

      <div className="w-[90%]">
        <GradientBar />
      </div>
    </section>
  );
};

export default DoubleImageSection;
