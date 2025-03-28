import { servicesData } from "@/lib/siteData";

export default function Services() {
  return (
    <section
      id="services"
      className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-[70px]"
    >
      {servicesData.map((service, index) =>
        service.title && service.description ? (
          <div
            key={index}
            className="relative bg-customDark p-8 pr-14 md:px-10 md:py-12 xl:px-12 xl:py-14 rounded-3xl shadow-customShadow hover:shadow-customShadowHover transition ease-out duration-150 dark:bg-customDarkDarker"
          >
            <div className="relative font-poppins font-semibold stroke-text-white text-5xl md:text-6xl xl:text-7xl mb-3 lg:mb-4 after:content-[''] after:absolute after:top-0 after:right-0 after:-bottom-[9px] after:left-0 after:bg-gradient-to-t after:from-customDark after:to-transparent dark:after:from-customDarkDarker">
              {service.title}
            </div>
            <h5 className="font-normal text-white">{service.description}</h5>
          </div>
        ) : (
          <div
            key={index}
            className="relative bg-white p-8 pr-14 md:px-10 md:py-12 xl:px-12 xl:py-14 rounded-3xl shadow-customShadow hover:shadow-customShadowHover transition ease-out duration-150 dark:bg-charcoal"
          >
            <div className="text-charcoal/40 text-4xl mb-6 md:mb-8 lg:mb-12 dark:text-white/40">
              <i className={service.icon}></i>
            </div>
            <h5 className="font-outfit font-medium text-charcoal text-xl dark:text-white">
              {service.title}
            </h5>
          </div>
        )
      )}
    </section>
  );
}
