import { Link } from "react-router-dom";
import bgImage from '../assets/hero2 - Copy.avif'

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">

      {/* Background */}
     <div
  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: `url(${bgImage})`,
  }}
/>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl px-4 sm:px-6 lg:px-8">

        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Powering Energy,
          <span className="block text-amber-400">
            Building Infrastructure
          </span>
        </h1>

        <p className="text-lg md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
          Wilcox Oil Company delivers high-quality construction and energy
          solutions, combining engineering excellence with industry-leading
          safety standards across every project.
        </p>

        <Link to="/contact">
          <button className="inline-flex items-center justify-center gap-2 font-medium transition-colors shadow h-12 rounded-md bg-amber-600 hover:bg-amber-700 text-white px-8 text-lg">
           Contact us
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2 h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
              <path strokeLinecap="round" strokeLinejoin="round" d="m12 5 7 7-7 7" />
            </svg>
          </button>
        </Link>

      </div>
    </section>
  );
};

export default Hero;