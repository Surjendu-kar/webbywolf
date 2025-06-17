import Image from "next/image";
import Link from "next/link";

const NoLimitsSection = () => {
  return (
    <section className="container relative mx-auto max-h-[660px] px-4">
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
            <Link
              href="#"
              className="inline-block font-inter text-lg font-semibold text-brand-secondary hover:text-brand-primary"
            >
              Loerum Ipsum →
            </Link>
          </div>
        </div>

        {/* Right Images Section */}
        <div className="flex-1">
          {/* Top left image */}
          <div className="absolute left-[54%] top-[40px] h-[180px] w-[115px]">
            <Image
              src="/motorcycles/night-riders.webp"
              alt="Night motorcycle riders"
              fill
              className="object-cover object-left"
            />
          </div>

          {/* Top right image */}
          <div className="absolute right-[50px] top-0 h-[230px] w-[400px]">
            <Image
              src="/motorcycles/group-front.webp"
              alt="Motorcycle group front view"
              fill
              className="object-contain"
            />
          </div>

          {/* Middle left image */}
          <div className="absolute left-[38%] top-[180px] h-[200px] w-[250px]">
            <Image
              src="/motorcycles/group-ride.webp"
              alt="Group motorcycle ride"
              fill
              className="object-contain"
            />
          </div>

          {/* Middle right large image */}
          <div className="absolute right-[50px] top-[230px] h-[300px] w-[540px]">
            <Image
              src="/motorcycles/sunset-riders.webp"
              alt="Sunset motorcycle riders"
              fill
              className="object-contain"
            />
          </div>

          {/* Bottom row images */}
          <div className="absolute bottom-0 left-0 flex gap-4">
            <div className="relative bottom-0.5 h-[150px] w-[180px]">
              <Image
                src="/motorcycles/group-1.webp"
                alt="Motorcycle parts"
                fill
                className="object-contain"
              />
            </div>
            <div className="bottom-13 relative right-2 h-[200px] w-[480px]">
              <Image
                src="/motorcycles/group-2.webp"
                alt="Rider gear"
                fill
                className="object-cover"
              />
            </div>
            <div className="-bottom-18 relative  h-[76px] w-[100px]">
              <Image
                src="/motorcycles/motorcycles-1.webp"
                alt="Rider gear"
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="-bottom-18 relative  h-[76px] w-[420px]">
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
