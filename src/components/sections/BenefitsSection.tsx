import GradientBar from "@/components/ui/GradientBar";
import Image from "next/image";
import Link from "next/link";

interface BenefitItemProps {
  title: string;
  details: string;
}

const BenefitItem = ({ title, details }: BenefitItemProps) => {
  return (
    <div className="flex items-start gap-2 lg:gap-4">
      <div className="mt-0.75 flex-shrink-0">
        <Image
          src="/benefits-icon.svg"
          alt="Benefit icon"
          width={24}
          height={24}
          className="text-brand-primary"
        />
      </div>
      <div className="space-y-2">
        <h3 className="font-inter text-lg font-semibold text-brand-text">
          {title}
        </h3>
        <p className="font-inter leading-6 text-gray-700 lg:leading-normal">
          {details}
        </p>
      </div>
    </div>
  );
};

const BenefitsSection = () => {
  const benefits = [
    {
      title:
        "Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.",
      details:
        "Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non viverra. Risus quam mattis senectus vitae interdum odio ornare gravida vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor.",
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.",
      details:
        "Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non viverra. Risus quam mattis senectus vitae interdum odio ornare gravida vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor.",
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.",
      details:
        "Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non viverra. Risus quam mattis senectus vitae interdum odio ornare gravida vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor.",
    },
  ];

  return (
    <section className="py-16 md:py-24 lg:px-0 lg:pl-28">
      {/* Main content grid */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
        {/* Left content */}
        <div className="space-y-8 px-4 lg:px-0">
          {/* Top blue link text */}
          <Link
            href="#"
            className="mb-2 inline-block pt-4 font-inter text-lg font-semibold text-brand-secondary transition-colors hover:text-brand-primary lg:mb-4 lg:pt-0"
          >
            Lorem ipsum dolor sit amet
          </Link>

          <h2 className="font-roboto-condensed text-3xl font-bold text-brand-text sm:text-4xl lg:text-5xl">
            LOREM IPSUM DOLOR SIT
            <br />
            AMET CONSECTETUR. EU
            <br />
            ELIT.
          </h2>

          <p className="font-inter text-gray-700">
            Lorem ipsum dolor sit amet consectetur. Mauris ullamcorper etiam leo
            eleifend condimentum in vitae faucibus. Amet massa malesuada sit
            pretium. Donec pharetra erat lacus suspendisse ornare.
          </p>

          {/* Benefit items */}
          <div className="space-y-4 lg:space-y-8">
            {benefits.map((benefit, index) => (
              <BenefitItem
                key={index}
                title={benefit.title}
                details={benefit.details}
              />
            ))}
          </div>
        </div>

        {/* Right content - Image */}
        <div className="relative h-[400px] w-full md:h-[400px] lg:h-[650px]">
          <Image
            src="/benefits-image.webp"
            alt="Two people having conversation"
            fill
            className="object-cover object-top lg:object-contain"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>

      <div className="mt-0 lg:mt-20" />
      {/* Bottom decorative bar */}
      <GradientBar />
    </section>
  );
};

export default BenefitsSection;
