interface FooterColumnProps {
  title: string;
  links: string[];
}

const FooterColumn = ({ title, links }: FooterColumnProps) => (
  <div className="flex flex-col space-y-4 lg:space-y-8">
    <h3 className="font-inter text-base font-semibold text-white">{title}</h3>
    <div className="flex flex-col gap-2 lg:gap-4">
      {links.map((link, index) => (
        <a
          key={index}
          href="#"
          className="font-inter text-sm text-gray-400 transition-colors hover:text-white"
        >
          {link}
        </a>
      ))}
    </div>
  </div>
);

const Footer = () => {
  const footerColumns = [
    {
      title: "Lorem Ipsum",
      links: ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"],
    },
    {
      title: "Lorem Ipsum",
      links: ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"],
    },
    {
      title: "Lorem Ipsum",
      links: ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"],
    },
    {
      title: "Lorem Ipsum",
      links: ["Lorem Ipsum"],
    },
  ];

  return (
    <footer className="mt-10 bg-[#171E2B] px-4 py-10 lg:mt-20 lg:px-0">
      <div className="container mx-auto flex flex-col gap-8 lg:gap-0">
        {/* Logo */}
        <div className="inline-flex max-w-24 justify-center bg-[#DBDBDB] px-4 py-2 md:max-w-28 md:px-6 lg:max-w-32 lg:px-8">
          <span className="font-roboto-condensed text-xl font-bold text-brand-text md:text-3xl">
            LOGO
          </span>
        </div>

        {/* Links Container */}
        <div className="mx-auto flex w-full max-w-3xl flex-wrap justify-between gap-8">
          {footerColumns.map((column, index) => (
            <FooterColumn
              key={index}
              title={column.title}
              links={column.links}
            />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
