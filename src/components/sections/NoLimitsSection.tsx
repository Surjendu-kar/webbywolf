import Image from "next/image";
import Link from "next/link";

const NoLimitsSection = () => {
  return (
    <section className="container relative mx-auto max-h-[670px] px-4">
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
          <div className="absolute left-[49%] top-[30px] h-[200px] w-[200px]">
            <Image
              src="/motorcycles/night-riders.webp"
              alt="Night motorcycle riders"
              fill
              className="object-contain"
            />
          </div>

          {/* Top right image */}
          <div className="absolute right-[50px] top-0 h-[230px] w-[400px]">
            <Image
              src="/motorcycles/group-front.webp"
              alt="Motorcycle group front view"
              fill
              className="object-cover"
            />
          </div>

          {/* Middle left image */}
          <div className="absolute left-[34%] top-[180px] h-[220px] w-[250px]">
            <Image
              src="/motorcycles/group-ride.webp"
              alt="Group motorcycle ride"
              fill
              className="object-contain"
            />
          </div>

          {/* Middle right large image */}
          <div className="absolute right-[50px] top-[250px] h-[300px] w-[590px]">
            <Image
              src="/motorcycles/sunset-riders.webp"
              alt="Sunset motorcycle riders"
              fill
              className="object-cover"
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
            <div className="bottom-13 relative right-6 h-[200px] w-[450px]">
              <Image
                src="/motorcycles/group-2.webp"
                alt="Rider gear"
                fill
                className="object-cover"
              />
            </div>
            <div className="-bottom-25 relative right-5 h-[50px] w-[180px]">
              <Image
                src="/motorcycles/motorcycles-1.webp"
                alt="Rider gear"
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="-bottom-25 relative right-5 h-[50px] w-[390px]">
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
