import Image from "next/image";
import Link from "next/link";

const AppDownloadSection = () => {
  return (
    <section className="relative mb-16 overflow-hidden bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12">
          {/* Left Content */}
          <div className="space-y-6">
            <Link
              href="#"
              className="font-inter text-lg font-semibold text-brand-secondary transition-colors hover:text-brand-primary"
            >
              Lorem Ipsum
            </Link>

            <h2 className="font-roboto-condensed text-3xl font-bold text-brand-text sm:text-4xl md:text-5xl">
              Lorem Ipsum Dolor
              <br />
              Sit Amet
            </h2>

            <p className="font-inter text-gray-700">
              Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet
              morbi suspendisse convallis. Urna a urna lectus donec felis risus
              duis pellentesque. Pellentesque ultricies ipsum.
            </p>

            {/* App Store Buttons */}
            <div className="flex flex-wrap gap-4">
              {/* Google Play Button */}
              <Link href="#" className="transition-transform hover:scale-105">
                <Image
                  src="/app-store/google-play.svg"
                  alt="Get it on Google Play"
                  width={140}
                  height={42}
                  className="h-[42px] w-auto"
                />
              </Link>

              {/* App Store Button */}
              <Link href="#" className="transition-transform hover:scale-105">
                <Image
                  src="/app-store/app-store.svg"
                  alt="Download on the App Store"
                  width={140}
                  height={42}
                  className="h-[42px] w-auto"
                />
              </Link>
            </div>
          </div>

          {/* Right Content - Phone Image */}
          <div className="flex h-[500px] justify-center">
            <Image
              src="/app-store/phone-mockup.svg"
              alt="App mockup on phone"
              width={500}
              height={500}
              className="h-auto w-auto md:scale-150"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownloadSection;
