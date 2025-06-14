import Image from "next/image";
import Link from "next/link";

const BannerOne = () => {
  return (
    <section className="relative h-[700px] w-full">
      {/* Background Image */}
      <Image
        src="/banner-motorcycle-rain.webp"
        alt="Motorcycle riding in the rain at night"
        fill
        priority
        className="object-cover object-top "
      />

      {/* Logo */}
      <div className="absolute left-5 top-5 z-10 bg-[#DBDBDB] px-4 py-2 md:px-6 lg:left-28 lg:top-20 lg:px-8">
        <Link
          href="/"
          className="font-roboto-condensed text-xl font-bold text-brand-text md:text-2xl lg:text-3xl"
        >
          LOGO
        </Link>
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container mx-auto p-4 text-center text-white lg:p-0">
          <div className="mx-auto  space-y-6">
            <h1 className="font-roboto-condensed text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-5xl">
              LOREM IPSUM DOLOR SIT AMET CONSECTETUR. QUIS
              <br />
              ADIPISCING PURUS EGESTAS ALIQUAM VIVERRA MI.
            </h1>
            <div className="mx-auto max-w-3xl space-y-4">
              <p className="text-base leading-relaxed  md:text-lg">
                Lorem ipsum dolor sit amet consectetur. Mattis justo euismod
                volutpat vestibulum nisi at ac risus amet. Mi accumsan sagittis
                justo pellentesque id sed. Id tellus id luctus id. At quis nunc
                libero urna arcu vulputate sed ut. Nisi porta massa diam
                condimentum nulla quam.
              </p>
              <p className="text-base leading-relaxed  md:text-lg">
                Lorem ipsum dolor sit amet consectetur. Volutpat in dictum nec
                condimentum ultrices non. Ornare semper in tincidunt
                pellentesque eras mauris in vitae. At viverra quis eu malesuada
                vel et porttitor. Nulla luctus quam lacus lacus non at.
                Tincidunt morbi feugiat a pulvinar euismod natoque nulla ligula.
                Tincidunt cursus vitae leo.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>
    </section>
  );
};

export default BannerOne;
