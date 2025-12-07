// Services.jsx

import { servicesData } from "./servicesData";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <section className="py-20 bg-[#032E22] text-white rounded-2xl">
      <div className="max-w-6xl mx-auto px-4">
        
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              desc={service.desc}
              highlight={service.highlight}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
