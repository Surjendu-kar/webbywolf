import Image from "next/image";
import Link from "next/link";

const CardGridSection = () => {
  const cards = [
    {
      image: "/vlog/vlog-1.webp",
      title: "Lorem ipsum dolor sit amet consectetur.",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisl. Nunc montes molestie a vitae vulputate. Phaselius in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nisl montes rhoncus enim venenatis bibendum.",
      link: "#",
    },
    {
      image: "/vlog/vlog-2.webp",
      title: "Lorem ipsum dolor sit amet consectetur.",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisl. Nunc montes molestie a vitae vulputate. Phaselius in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nisl montes rhoncus enim venenatis bibendum.",
      link: "#",
    },
    {
      image: "/vlog/vlog-3.webp",
      title: "Lorem ipsum dolor sit amet consectetur.",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisl. Nunc montes molestie a vitae vulputate. Phaselius in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nisl montes rhoncus enim venenatis bibendum.",
      link: "#",
    },
    {
      image: "/vlog/vlog-4.webp",
      title: "Lorem ipsum dolor sit amet consectetur.",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisl. Nunc montes molestie a vitae vulputate. Phaselius in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nisl montes rhoncus enim venenatis bibendum.",
      link: "#",
    },
  ];

  return (
    <section className="">
      <div className="container mx-auto flex flex-col gap-16">
        {/* Section Title */}
        <div className="max-w-2xl space-y-4">
          <Link
            href="#"
            className="inline-block font-inter text-lg font-semibold text-brand-secondary transition-colors hover:text-brand-primary"
          >
            Lorem ipsum dolor sit amet
          </Link>
          <h2 className="font-roboto-condensed text-3xl font-bold text-brand-text sm:text-4xl md:text-5xl">
            LOREM IPSUM DOLOR SIT
          </h2>
          <h3 className="text-md font-inter text-brand-text">
            Lorem ipsum dolor sit amet consectetur. Amet sodales sociis
            facilisis donec dui. Mi porttitor ut aliquam mattis maecenas eget
            integer in nam. Non nisl iaculis at felis aliquet. Hendrerit tellus
            at purus lectus.
          </h3>
        </div>

        {/* Cards Grid */}
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
            {cards.map((card, index) => (
              <Link
                key={index}
                href={card.link}
                className="group overflow-hidden rounded-lg border border-[#F1F0F0] transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="">
                  {/* Card Image */}
                  <div className="relative h-[250px] w-full overflow-hidden">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Card Content */}
                  <div className="space-y-3 p-4">
                    <h3 className="font-inter text-lg font-semibold text-brand-text">
                      {card.title}
                    </h3>
                    <p className="font-inter text-sm leading-relaxed text-gray-700">
                      {card.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardGridSection;
