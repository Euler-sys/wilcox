import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

import {
  Linkedin,
  Twitter,
  Facebook,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-amber-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src={logo}
                alt="Wilcox Oil Company"
                className="w-10 h-10"
              />
              <div>
                <h3 className="font-bold text-lg text-amber-400">
                  Wilcox Oil
                </h3>
                <p className="text-sm text-amber-300">
                  Construction & Energy
                </p>
              </div>
            </div>

            <p className="text-amber-200 text-sm leading-relaxed">
              Wilcox Oil Company delivers world-class construction and energy
              solutions, building critical infrastructure with safety,
              precision, and innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-amber-400">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-amber-200 hover:text-amber-400 text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-amber-200 hover:text-amber-400 text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-amber-200 hover:text-amber-400 text-sm">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-amber-200 hover:text-amber-400 text-sm">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-amber-400">
              Contact Info
            </h4>

            <ul className="space-y-4 text-sm text-amber-200">

              <li className="flex items-center space-x-2">
                <Phone size={16} />
                <span>+1 (570) 656-9728</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaWhatsapp size={16} />
                <span>+1 (570) 656-9728</span>
              </li>

              <li className="flex items-center space-x-2">
                <Mail size={16} />
                <span>wilcoxoilcompany@gmail.com</span>
              </li>

              <li className="flex items-start space-x-2">
                <MapPin size={16} className="mt-1" />
                <span>PO BOX 580 RULE, TX 79547</span>
              </li>

            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-amber-400">
              Follow Us
            </h4>

            <div className="flex space-x-4">

              <a
                href="#"
                className="bg-gray-900 hover:bg-amber-600 p-2 rounded-full transition text-amber-300 hover:text-black"
              >
                <Linkedin size={18} />
              </a>

              <a
                href="#"
                className="bg-gray-900 hover:bg-amber-600 p-2 rounded-full transition text-amber-300 hover:text-black"
              >
                <Twitter size={18} />
              </a>

              <a
                href="#"
                className="bg-gray-900 hover:bg-amber-600 p-2 rounded-full transition text-amber-300 hover:text-black"
              >
                <Facebook size={18} />
              </a>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-amber-900 mt-8 pt-8 text-center">
          <p className="text-amber-300 text-sm">
            © 2026 Wilcox Oil Company. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;