import { Shield, Globe, Award } from "lucide-react";

import safetyImg from "../assets/safety.jpg";
import sustainabilityImg from "../assets/safety2.jpg";
import ceoImg from "../assets/ceo.jpg";
import engineer1Img from "../assets/engineer1.jpg";
import engineer2Img from "../assets/engineer2.jpg";



const journeyData = [
  {
    year: "2005",
    text: "Expanded operations across major infrastructure projects in Nigeria",
  },
  {
    year: "2010",
    text: "Achieved strong industry recognition for safety and execution",
  },
  {
    year: "2015",
    text: "Launched advanced engineering and construction capabilities",
  },
  {
    year: "2020",
    text: "Completed 150+ major infrastructure and energy projects",
  },
  {
    year: "2024",
    text: "Leading digital transformation in construction operations",
  },
];

const About = () => {
  return (
    <main className="pt-16">

      {/* HERO */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">

          <h1 className="text-4xl md:text-5xl font-bold text-amber-400 mb-6">
            About Wilcox Oil Company
          </h1>

          <p className="text-lg md:text-xl text-amber-200 max-w-3xl mx-auto">
            Wilcox Oil Company is a leading construction and energy solutions provider,
            delivering large-scale infrastructure projects with precision, safety, and innovation.
          </p>

        </div>
      </section>

      {/* SAFETY / SUSTAINABILITY (IMAGES IMPORTED) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-3xl font-bold mb-6">
              Commitment to Safety & Sustainability
            </h2>

            <div className="space-y-6 text-gray-600">
              <p>
                Wilcox Oil operates under strict safety policies ensuring zero harm to people and environment.
              </p>
              <p>
                We use modern engineering practices to reduce environmental impact.
              </p>
              <p>
                Our certifications validate our global standard operations.
              </p>
            </div>
          </div>

          {/* IMPORTED IMAGE */}
          <div>
            <img
              src={sustainabilityImg}
              className="rounded-lg shadow-lg"
              alt="Sustainability operations"
            />
          </div>

        </div>
      </section>

      {/* OPTIONAL SAFETY IMAGE SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">

          <div>
            <img
              src={safetyImg}
              className="rounded-lg shadow-lg"
              alt="Safety operations"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">
              Safety Culture
            </h2>

            <p className="text-gray-600">
              Safety is the foundation of every Wilcox Oil project, ensuring
              zero-harm operations across all construction and energy sites.
            </p>
          </div>

        </div>
      </section>

      <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Leadership Team
          </h2>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Meet the experienced professionals leading Wilcox Oil Company into the future.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* CEO */}
          <div className="rounded-xl border shadow text-center hover:shadow-lg transition p-6">

            <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden bg-gray-200">
              <img
                src={ceoImg}
                alt="CEO"
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              Chief Executive Officer
            </h3>

            <p className="text-sm text-gray-600">
              Leads Wilcox Oil Company with a vision for innovation, safety,
              and large-scale infrastructure development.
            </p>

          </div>

          {/* Engineer 1 */}
          <div className="rounded-xl border shadow text-center hover:shadow-lg transition p-6">

            <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden bg-gray-200">
              <img
                src={engineer1Img}
                alt="Engineer 1"
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              Senior Project Engineer
            </h3>

            <p className="text-sm text-gray-600">
              Specializes in construction planning, execution, and field operations
              across major infrastructure projects.
            </p>

          </div>

          {/* Engineer 2 */}
          <div className="rounded-xl border shadow text-center hover:shadow-lg transition p-6">

            <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden bg-gray-200">
              <img
                src={engineer2Img}
                alt="Engineer 2"
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              Subsea & Systems Engineer
            </h3>

            <p className="text-sm text-gray-600">
              Focuses on infrastructure systems, equipment reliability,
              and operational efficiency in energy projects.
            </p>

          </div>

        </div>
      </div>

    </section>

    <section className="py-20 bg-amber-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Journey
          </h2>
          <p className="text-lg text-amber-100 max-w-2xl mx-auto">
            Key milestones that have shaped Wilcox Oil Company into a trusted leader in construction and energy infrastructure.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {journeyData.map((item) => (
            <div
              key={item.year}
              className="rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm shadow"
            >
              <div className="p-6">
                <div className="text-2xl font-bold text-white mb-2">
                  {item.year}
                </div>
                <p className="text-amber-100">{item.text}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Text Side */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Commitment to Sustainability & Safety
            </h2>

            <div className="space-y-6">

              {/* Item 1 */}
              <div className="flex items-start space-x-3">
                <Shield className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Zero-Harm Safety Culture
                  </h3>
                  <p className="text-gray-600">
                    Our strict safety systems ensure maximum protection for workers, equipment, and communities.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-start space-x-3">
                <Globe className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Environmental Stewardship
                  </h3>
                  <p className="text-gray-600">
                    We apply responsible engineering practices to reduce environmental impact across all projects.
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex items-start space-x-3">
                <Award className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Industry Certifications
                  </h3>
                  <p className="text-gray-600">
                    Certified compliance with global safety and construction standards including ISO frameworks.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Image Side */}
          <div className="relative">
            <img
              src={safetyImg}
              alt="Safety operations"
              className="rounded-lg shadow-lg w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-amber-600/10 rounded-lg" />
          </div>

        </div>

      </div>
    </section>

    </main>
  );
};

export default About;