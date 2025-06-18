import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

const NoLimitsSection = () => {
  return (
    <section className="container relative mx-auto h-[680px] px-4 lg:px-0">
      <div className="flex">
        {/* Left Content */}
        <div className="w-[400px]">
          <div className="space-y-6">
            <h3 className="font-inter text-lg font-semibold text-brand-secondary">
              NO LIMITS
            </h3>
            <h2 className="font-roboto-condensed text-3xl font-bold text-brand-text sm:text-4xl md:text-5xl">
              LOREM IPSUM DOLOR SIT AMET
            </h2>
            <p className="font-inter text-gray-700">
              Lorem ipsum dolor sit amet consectetur. Nisl faucibus vitae
              porttitor quis arcu. Ipsum nullam.
            </p>
            <Button className="bg-brand-primary px-8 py-2 font-inter font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-secondary hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50">
              Leorum Ipsum
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Right Images Section */}
        <div className="flex-1">
          {/* Top left image */}
          <div className="right-120 absolute top-[30px] h-[210px] w-[140px]">
            <Image
              src="/motorcycles/night-riders.webp"
              alt="Night motorcycle riders"
              fill
              className="object-cover object-left"
            />
          </div>

          {/* Top right image */}
          <div className="absolute right-0 top-0 h-[240px] w-[460px]">
            <Image
              src="/motorcycles/group-front.webp"
              alt="Motorcycle group front view"
              fill
              className="object-contain"
            />
          </div>

          {/* Middle left image */}
          <div className="right-160 absolute top-[180px] h-[240px] w-[135px]">
            <Image
              src="/motorcycles/group-ride.webp"
              alt="Group motorcycle ride"
              fill
              className="object-contain"
            />
          </div>

          {/* Middle right large image */}
          <div className="absolute right-0 top-[255px] h-[320px] w-[620px]">
            <Image
              src="/motorcycles/sunset-riders.webp"
              alt="Sunset motorcycle riders"
              fill
              className="object-cover"
            />
          </div>

          {/* Bottom row images */}
          <div className="absolute bottom-0 right-0 flex items-end  gap-4">
            <div className="relative bottom-0 right-4 h-[150px] w-[125px]">
              <Image
                src="/motorcycles/group-1.webp"
                alt="Motorcycle parts"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative bottom-0 right-1.5 h-[240px] w-[460px]">
              <Image
                src="/motorcycles/group-2.webp"
                alt="Rider gear"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative bottom-0  h-[80px] w-[138px]">
              <Image
                src="/motorcycles/motorcycles-1.webp"
                alt="Rider gear"
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="relative bottom-0  h-[80px] w-[465px]">
              <Image
                src="/motorcycles/motorcycles-3.webp"
                alt="Rider gear"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NoLimitsSection;
