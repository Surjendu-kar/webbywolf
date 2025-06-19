import Image from "next/image";
import Link from "next/link";

interface BannerProps {
  backgroundImage: string;
  title: string;
  description?: string | string[];
  showLogo?: boolean;
  height?: string;
}

const Banner = ({
  backgroundImage,
  title,
  description,
  showLogo = true,
  height = "h-[700px]",
}: BannerProps) => {
  return (
    <section className={`relative w-full ${height}`}>
      {/* Background Image */}
      <Image
        src={backgroundImage}
        alt="Banner background"
        fill
        priority
        className="object-cover object-top"
      />

      {/* Logo */}
      {showLogo && (
        <div className="absolute left-5 top-5 z-10 bg-[#DBDBDB] px-4 py-2 md:px-6 lg:left-28 lg:top-10 lg:px-8">
          <Link
            href="/"
            className="font-roboto-condensed text-xl font-bold text-brand-text md:text-2xl lg:text-3xl"
          >
            LOGO
          </Link>
        </div>
      )}

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container mx-auto p-4 text-center text-white lg:p-0">
          <div className="mx-auto space-y-6">
            <h1 className="font-roboto-condensed  text-2xl font-bold leading-tight text-white md:text-5xl lg:text-5xl">
              {title}
            </h1>
            {description && (
              <div className="mx-auto max-w-3xl space-y-4 ">
                {Array.isArray(description) ? (
                  description.map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-base leading-relaxed md:text-lg"
                    >
                      {paragraph}
                    </p>
                  ))
                ) : (
                  <p className="text-base leading-relaxed md:text-lg">
                    {description}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
