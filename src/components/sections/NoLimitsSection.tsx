import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

const NoLimitsSection = () => {
  return (
    <section className="h-[750px] overflow-hidden bg-[#F1F5F9] pt-10 lg:h-[765px] lg:pt-20">
      <div className="container relative mx-auto flex px-4 lg:px-0 ">
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
          <div className="lg:right-120 right-71 md:right-85 top-70 absolute h-[150px] w-[120px] md:h-[150px] md:w-[130px] lg:top-[30px] lg:h-[210px] lg:w-[140px]">
            <Image
              src="/motorcycles/night-riders.webp"
              alt="Night motorcycle riders"
              fill
              className="object-cover object-left"
            />
          </div>

          {/* Top right image */}
          <div className="top-70 absolute right-0 h-[150px] w-[280px] md:h-[150px] md:w-[330px] lg:top-0 lg:h-[240px] lg:w-[460px]">
            <Image
              src="/motorcycles/group-front.webp"
              alt="Motorcycle group front view"
              fill
              className="object-cover"
            />
          </div>

          {/* Middle left image */}
          <div className="lg:right-160 top-108.5 md:top-109 right-78 md:right-103 absolute h-[150px] w-[120px] md:h-[150px] md:w-[130px] lg:top-[180px] lg:h-[240px] lg:w-[135px]">
            <Image
              src="/motorcycles/group-ride.webp"
              alt="Group motorcycle ride"
              fill
              className="object-cover"
            />
          </div>

          {/* Middle right large image */}
          <div className="top-108.5 md:top-109 absolute right-0 h-[150px] w-[310px] md:h-[150px] md:w-[400px] lg:top-[255px] lg:h-[320px] lg:w-[620px]">
            <Image
              src="/motorcycles/sunset-riders.webp"
              alt="Sunset motorcycle riders"
              fill
              className="object-cover"
            />
          </div>

          {/* Bottom row images */}
          <div className="md:-bottom-100 -bottom-112  absolute right-0 flex items-end gap-4">
            <div className="relative -right-9 bottom-0 h-[120px] w-[100px] md:h-[90px] md:w-[112px] lg:right-4 lg:h-[150px] lg:w-[125px]">
              <Image
                src="/motorcycles/group-1.webp"
                alt="Motorcycle parts"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative -right-6 bottom-0 h-[120px] w-[180px] md:h-[90px] md:w-[320px] lg:right-1.5 lg:h-[240px] lg:w-[460px]">
              <Image
                src="/motorcycles/group-2.webp"
                alt="Rider gear"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative -right-3 bottom-0 h-[120px] w-[70px] md:h-[90px] md:w-[104px] lg:right-0 lg:h-[80px] lg:w-[138px]">
              <Image
                src="/motorcycles/motorcycles-1.webp"
                alt="Rider gear"
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="relative bottom-0 h-[120px] w-[70px] md:h-[90px] md:w-[267px] lg:h-[80px] lg:w-[465px]">
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
