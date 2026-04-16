import { Link } from "react-router-dom";

const AboutCTA = () => {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">

        <h2 className="text-3xl md:text-4xl font-bold text-amber-400 mb-6">
          About Wilcox Oil Company
        </h2>

        <p className="text-lg md:text-xl text-amber-200 mb-8">
          Wilcox Oil Company is a trusted leader in construction and energy solutions,
          delivering large-scale infrastructure projects with precision, safety, and innovation.
        </p>

        <Link to="/contact">
          <button className="inline-flex items-center justify-center gap-2 font-medium shadow-sm h-12 rounded-md bg-amber-600 text-black hover:bg-amber-500 px-8 text-lg transition">
            Learn More About Us
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

export default AboutCTA;