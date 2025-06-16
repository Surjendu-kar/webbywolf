import Image from "next/image";

const BrandSection = () => {
  const brands = [
    // Row 1
    {
      name: "Hero",
      logo: "/brand/Hero_Moto.svg",
      width: 65,
      height: 40,
    },
    {
      name: "Honda",
      logo: "/brand/Honda_Logo.svg",
      width: 90,
      height: 40,
    },
    {
      name: "Bajaj",
      logo: "/brand/Bajaj-Auto.svg",
      width: 140,
      height: 40,
    },
    {
      name: "TVS",
      logo: "/brand/TVS_Motor.svg",
      width: 150,
      height: 40,
    },
    // Row 2
    {
      name: "Royal Enfield",
      logo: "/brand/royal-enfield.svg",
      width: 170,
      height: 40,
    },
    {
      name: "Yamaha",
      logo: "/brand/yamaha.svg",
      width: 130,
      height: 60,
    },
    {
      name: "KTM",
      logo: "/brand/KTM.svg",
      width: 110,
      height: 60,
    },
    {
      name: "Ather",
      logo: "/brand/Ather.svg",
      width: 140,
      height: 40,
    },
    // Row 3
    {
      name: "Ola Electric",
      logo: "/brand/Ola-Electric.svg",
      width: 160,
      height: 40,
    },
    {
      name: "Revolt",
      logo: "/brand/revolt.svg",
      width: 130,
      height: 40,
    },
    {
      name: "Ultraviolette",
      logo: "/brand/Ultraviolette.svg",
      width: 190,
      height: 40,
    },
    {
      name: "Tork Motors",
      logo: "/brand/tork-motors.svg",
      width: 70,
      height: 40,
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="mb-16 text-center font-roboto-condensed text-3xl font-bold text-brand-text sm:text-4xl md:text-5xl">
          LOREM IPSUM DOLOR SIT AMET
          <br />
          CONSECTETUR. COMMODO LEO AMET.
        </h2>

        {/* Brands Grid */}
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:gap-12">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="flex items-center justify-center transition-transform duration-300 hover:scale-105"
              >
                <Image
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  width={brand.width}
                  height={brand.height}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandSection;
