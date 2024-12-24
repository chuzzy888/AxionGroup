import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";
import logo from "../assets/images/lgft.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 font-josefin">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="font-bold mb-4">Contact Us</h2>
            <ul className="space-y-2">
              <a href="mailto:info@axiongroupltd.com">
                {" "}
                <li className="text-blue-400">info@axiongroupltd.com</li>
              </a>
              <li>7, Off Port-Harcout Road Owerri</li>
              <li> +234-8113- 405555</li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold mb-4">Our Brand</h2>
            <ul className="space-y-2">
              {" "}
              <li className="hover:text-red-500">
                <Link to={"/sector/pharmaceuticals"}>
                  Axion Pharmaceuticals{" "}
                </Link>
              </li>{" "}
              <li className="hover:text-red-500">
                {" "}
                <Link to={"/sector/Hospitality"}>Axion Suites </Link>
              </li>
              <li className="hover:text-red-500">
                {" "}
                <Link to={"/sector/Foam%20Products"}>Axion Foam Products </Link>
              </li>
              <li className="hover:text-red-500">
                {" "}
                <Link to={"/sector/Oil%20and%20Gas"}> Axion Petroplus </Link>
              </li>
              <li className="hover:text-red-500">
                <Link to={"/sector/Agriculture"}>Axion Farms</Link>{" "}
              </li>
              <li className="hover:text-red-500">
                <Link to={"/sector/Real%20Estate"}>Axion Homes</Link>{" "}
              </li>
              <li className="hover:text-red-500">
                <Link to={"/sector/Automotive"}>Axion Autos</Link>
              </li>
              <li className="hover:text-red-500">
                <Link to={"/sector/Logistics"}>Axion Logistics</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li className="hover:text-red-500">Contact Us</li>
              <li className="hover:text-red-500">Our Story</li>
              <li className="hover:text-red-500">About Us</li>
              <li className="hover:text-red-500">Our Brand</li>
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
            <a
              href="https://www.facebook.com/profile.php?id=100063891948711"
              className="hover:text-gray-400"
              target="_blank"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/axiongroup?igsh=aXFremE2bndwMXE5 "
              className="hover:text-gray-400"
              target="_blank"
            >
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
            <a
              href="https://www.tiktok.com/@axiongroupworld?_t=8rMIpkoOhwW&_r=1"
              className="hover:text-gray-400"
              target="_blank"
            >
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
