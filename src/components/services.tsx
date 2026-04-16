import { Link } from "react-router-dom";

// import your images
import service1 from "../assets/servive1.jpg";
import service2 from "../assets/servive2.jpg";
import service3 from "../assets/servive3.jpg";

const services = [
  {
    title: "Construction & Infrastructure",
    description:
      "High-quality construction services including civil works, structural engineering, and large-scale infrastructure development.",
    image: service1,
  },
  {
    title: "Oil & Gas Exploration Support",
    description:
      "Reliable support services for oil and gas exploration, ensuring efficiency and safety in demanding environments.",
    image: service2,
  },
  {
    title: "Engineering Solutions",
    description:
      "Innovative engineering, maintenance, and project management solutions tailored to complex industrial needs.",
    image: service3,
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Core Services
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Delivering world-class construction and energy solutions backed by
            expertise, innovation, and safety.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-xl border shadow overflow-hidden hover:shadow-xl transition-shadow group bg-white"
            >

              {/* Image */}
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-amber-600/20" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>

                {/* Always goes to contact */}
                <Link
                  to="/contact"
                  className="text-amber-600 font-medium hover:underline"
                >
                  Learn More →
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;