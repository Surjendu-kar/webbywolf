import GradientBar from "@/components/ui/GradientBar";
import { ArrowRight, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const FeatureSection = () => {
  return (
    <section className="py-16 md:py-24 lg:px-0 lg:pl-28">
      <div className="p-0 shadow-2xl lg:p-10 lg:pb-0 lg:pr-14">
        {/* Main content grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left content */}

          <div className="space-y-8 px-4 lg:px-0">
            {/* Top blue link text */}
            <Link
              href="#"
              className="mb-2 inline-block pt-4 font-inter text-lg font-semibold text-brand-secondary transition-colors hover:text-brand-primary lg:mb-4 lg:pt-0"
            >
              Lorem ipsum dolor sit
            </Link>

            <h2 className="font-roboto-condensed text-3xl font-bold text-brand-text sm:text-4xl lg:text-5xl">
              LOREM IPSUM
              <br />
              DOLOR SIT AMET
            </h2>

            <p className="font-inter text-gray-700">
              Lorem ipsum dolor sit amet consectetur. Amet sodales sociis
              facilisis donec dui. Mi porttitor ut aliquam mattis maecenas eget
              integer in nam. Non nisi iaculis at felis aliquet. Hendrerit
              tellus at purus lectus.
            </p>

            {/* Feature items */}
            <div className="space-y-6">
              {/* Feature item 1 */}
              <div className="flex gap-6">
                <div className="h-24 w-24 flex-shrink-0 overflow-hidden">
                  <Image
                    src="/motorcycles/motorcycles-2.webp"
                    alt="Motorcycle rider"
                    width={96}
                    height={96}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-inter text-gray-700">
                    Lorem ipsum dolor sit amet consectetur. Vestibulum ornare
                    fermentum feugiat.
                  </p>
                </div>
              </div>

              {/* Feature item 2 */}
              <div className="flex gap-6">
                <div className="h-24 w-24 flex-shrink-0 overflow-hidden">
                  <Image
                    src="/motorcycles/motorcycles-3.webp"
                    alt="Motorcycle workshop"
                    width={96}
                    height={96}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-inter text-gray-700">
                    Lorem ipsum dolor sit amet consectetur. Dictum at ac tellus
                    faucibus urna ullamcorper id dui cursus. Venenatis.
                  </p>
                </div>
              </div>

              {/* Feature item 3 */}
              <div className="flex gap-6">
                <div className="h-24 w-24 flex-shrink-0 overflow-hidden">
                  <Image
                    src="/motorcycles/motorcycles-4.webp"
                    alt="Motorcycle service"
                    width={96}
                    height={96}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-inter text-gray-700">
                    Lorem ipsum dolor sit amet consectetur. Vestibulum nisl
                    morbi metus gravida eu facilisi enim. Ut diam auctor tortor
                    tincidunt.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right content - Large motorcycle image */}
          <div className="relative h-[400px] w-full md:h-[500px] lg:h-[700px]">
            <Image
              src="/motorcycles/motorcycles-1.webp"
              alt="Motorcycles lineup"
              fill
              className="object-cover "
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* CTA Button and Phone */}
        <div className="flex items-center justify-center gap-4 py-6 lg:justify-start lg:pb-8">
          <Link
            href="#"
            className="flex items-center gap-2 rounded bg-brand-primary px-8 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-secondary hover:shadow-lg"
          >
            Leorum Ipsum
            <ArrowRight className="h-5 w-5" />
          </Link>
          <a
            href="tel:123456789"
            className="flex items-center gap-2 text-brand-primary transition-colors hover:text-brand-secondary"
          >
            <Phone className="h-5 w-5" />
            <span className="font-semibold">123456789</span>
          </a>
        </div>
      </div>

      {/* Bottom decorative bar */}
      <GradientBar />
    </section>
  );
};

export default FeatureSection;
