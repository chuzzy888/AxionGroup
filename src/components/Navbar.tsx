import { useState, RefObject } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import logo from "../assets/images/logo.jpeg";
import { Link } from "react-router-dom";

interface NavbarProps {
  scrollToSection: (ref: RefObject<HTMLElement>) => void;
  aboutRef: RefObject<HTMLElement>;
  servicesRef: RefObject<HTMLElement>;
  contactRef: RefObject<HTMLElement>;
}

const Navbar: React.FC<NavbarProps> = ({
  scrollToSection,
  aboutRef,
  servicesRef,
  contactRef,
}) => {
  // const [aboutDropdown, setAboutDropdown] = useState(false);
  // const [businessDropdown, setBusinessDropdown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-primary text-white p-6 font-inter">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to={"/"}>
          <div>
            <img src={logo} alt="Axion Group Logo" className="h-8" />
          </div>
        </Link>

        {/* Desktop Navbar Links */}
        <div className="lg:flex items-center gap-8 hidden font-light tracking-wide">
          <div
            className="relative group"
            // onMouseEnter={() => setAboutDropdown(true)}
            // onMouseLeave={() => setAboutDropdown(false)}
          >
            <p
              className="flex font-medium items-center cursor-pointer text-gray-900 hover:text-blue-700 transition-colors duration-300 font-josefin"
              onClick={() => scrollToSection(aboutRef)}
            >
              About Us
            </p>
            {/* {aboutDropdown && (
              <div className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-md z-50">
                <ul className="py-2">
                  <li className="dropdown-item">Our Story</li>
                  <li className="dropdown-item">Our Vision</li>
                  <li className="dropdown-item">Our Mission</li>
                  <li className="dropdown-item">Our Team</li>
                </ul>
              </div>
            )} */}
          </div>

          <div
            className="relative group"
            // onMouseEnter={() => setBusinessDropdown(true)}
            // onMouseLeave={() => setBusinessDropdown(false)}
          >
            <p
              className="flex font-medium items-center cursor-pointer text-gray-800 hover:text-blue-700 transition-colors duration-300 font-josefin"
              onClick={() => scrollToSection(servicesRef)}
            >
              Our Brands
            </p>
            {/* {businessDropdown && (
              <div className="absolute top-full left-0 w-48 bg-white text-black shadow-lg rounded-md z-50">
                <ul className="py-2">
                  <li className="dropdown-item">Pharmaceuticals</li>
                  <li className="dropdown-item">Hospitality</li>
                  <li className="dropdown-item">Logistics</li>
                  <li className="dropdown-item">Agriculture</li>
                  <li className="dropdown-item">Technology</li>
                </ul>
              </div>
            )} */}
          </div>

          <p
            className="navbar-link text-lightRed cursor-pointer hover:text-blue-700 font-medium font-josefin"
            onClick={() => scrollToSection(servicesRef)}
          >
            Media
          </p>
          {/* 
          <Link to={"/contact"}>
            <p className="navbar-link text-gray-800 cursor-pointer font-inter hover:text-blue-700 font-medium font-josefin">
              Contact
            </p>
          </Link> */}

          <p
            className="navbar-link text-gray-800 cursor-pointer font-inter hover:text-blue-700 font-medium font-josefin"
            onClick={() => scrollToSection(contactRef)}
          >
            Contact
          </p>
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? (
              <MdClose className="text-3xl" />
            ) : (
              <MdMenu className="text-3xl text-darkBlue" />
            )}
          </button>
        </div>
      </div>

      {/* Full-Screen Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden fixed inset-0 bg-white bg-opacity-10 backdrop-blur-md z-50 flex flex-col justify-center items-center text-center space-y-8 transition-transform duration-300 ease-in-out">
          {/* Close Icon */}
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 text-3xl text-lightRed"
          >
            <MdClose />
          </button>

          {/* Centered Menu Links */}
          <div className="text-black font-josefin font-black text-2xl tracking-wide space-y-8 ">
            <p
              className="cursor-pointer hover:text-red-800 text-red-500"
              onClick={() => {
                setMenuOpen(false);
              }}
            >
              Home
            </p>
            <p
              className="cursor-pointer hover:text-red-800"
              onClick={() => {
                scrollToSection(aboutRef);
                setMenuOpen(false);
              }}
            >
              About Us
            </p>
            <p
              className="cursor-pointer hover:text-red-800"
              onClick={() => {
                scrollToSection(servicesRef);
                setMenuOpen(false);
              }}
            >
              Media
            </p>
            <p
              className="cursor-pointer hover:text-red-800"
              onClick={() => {
                scrollToSection(contactRef);
                setMenuOpen(false);
              }}
            >
              Contact
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
