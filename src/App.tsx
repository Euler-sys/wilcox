import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import "animate.css";

import Header from "./components/header";
import Footer from "./components/footer";

import Hero from "./components/hero";
import Stats from "./components/stats";
import Services from "./components/services";
import AboutCTA from "./components/aboutCta";

import About from "./pages/about";
import Contact from "./pages/contact";

const Home = () => {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <AboutCTA />
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="font-sans">

        <Header />

        <Routes>

          {/* HOME PAGE */}
          <Route
            path="/"
            element={<Home />}
          />

          {/* ABOUT PAGE */}
          <Route
            path="/about"
            element={<About />}
          />
          <Route
            path="/contact"
            element={<Contact />}
          />

        </Routes>

        <Footer />

      </div>
    </Router>
  );
};

export default App;