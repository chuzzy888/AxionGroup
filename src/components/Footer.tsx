import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";
import logo from "../assets/images/lgft.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 font-lato">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="font-bold mb-4">Contact Us</h2>
            <ul className="space-y-2">
              <li>Breeze Tools</li>
              <li> Content Writer</li>
              <li> Email Writer</li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold mb-4">Our Brand</h2>
            <ul className="space-y-2">
              <li>Axion Pharmaceuticals</li>
              <li>Axion Suites</li>
              <li>Axion Foam Products</li>
              <li>Axion Petroplus</li>
              <li>Axion Farms</li>
              <li>Axion Homes</li>
              <li>Axion Autos</li>
              <li>Axion Logistics</li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li>Contact Us</li>
              <li>Our Story</li>
              <li>About Us</li>
              <li>Our Brand</li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold mb-4">Partners</h2>
            <ul className="space-y-2">
              <li>All Partner Programs</li>
              <li>Solutions Partner Program</li>
              <li>App Partner Program</li>
              <li>HubSpot for Startups</li>
              <li>Affiliate Program</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-gray-700"></div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo */}
          <div className="text-lg font-bold mb-4 md:mb-0">
            <img src={logo} alt="Axion Logo" className="h-10" />
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4 text-2xl">
            <a href="#" className="hover:text-gray-400">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaLinkedinIn />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaYoutube />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaTiktok />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-4">
          <p className="text-sm">© 2024 Axion, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
