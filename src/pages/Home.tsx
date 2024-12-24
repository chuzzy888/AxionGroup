import React, { useState, useRef } from "react";
import Navbar from "../components/Navbar";
import heroImg from "../assets/images/hm.jpg";

import hr from "../assets/images/him.jpg";
import phc from "../assets/images/phc.jpg";
import autos from "../assets/images/ptp.jpg";
import lgc from "../assets/images/lgc.jpg";
import fms from "../assets/images/mat.jpeg";
import bghe from "../assets/images/bghe.jpg";

import teamMember1 from "../assets/images/dj.jpeg";
import tech from "../assets/images/tech.jpg";
import realestate from "../assets/images/estate.jpeg";
import farmsImage from "../assets/images/agriculture.jpg";

import petroplus from "../assets/images/petro.jpg";

import homesImage from "../assets/images/him.jpg";

import { Bounce, Fade, Slide } from "react-awesome-reveal";
import {
  FaCheckCircle,
  FaLightbulb,
  FaPeopleArrows,
  FaHeart,
  FaBullseye,
  FaEye,
  FaLongArrowAltRight,
} from "react-icons/fa";
import { FiArrowDownRight, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { Link } from "react-router-dom";

interface BrandShowcaseItem {
  image: string;
  caption: string;
}

interface KeyFigure {
  header: string;
  value: string;
}

interface Service {
  id: string;
  name: string;
  image: string;
  products: string[];
  description: string;
  aboutProduct: string;
  brandShowcase: BrandShowcaseItem[];
  keyFigures: KeyFigure[];
}

const services: Service[] = [
  {
    id: "pharmaceuticals",
    name: "Pharmaceuticals",
    image: phc,
    products: [
      "Anti-Infectives",
      "Analgesics",
      "Anti-Malarials",
      "Cardiovascular Medications",
    ],
    description:
      "High-quality, affordable pharmaceuticals catering to various health needs.",
    aboutProduct:
      "Axion Pharmaceuticals provides affordable branded generics, manufacturing anti-infectives, cardiovascular medications, and more in partnership with ISO-certified facilities.",
    brandShowcase: [
      { image: "product1.jpg", caption: "Size: 500mg, Price: $10" },
      { image: "product2.jpg", caption: "Size: 250mg, Price: $7" },
    ],
    keyFigures: [
      { header: "Annual Production", value: "1M Units" },
      { header: "Global Reach", value: "100+ Countries" },
      { header: "New Products", value: "15 Developed Annually" },
    ],
  },
  {
    id: "Real Estate",
    name: "Real Estate",
    image: realestate,
    products: ["Luxury Apartments", "Commercial Spaces", "Residential Villas"],
    description: "Premium real estate projects located in key urban areas.",
    aboutProduct:
      "Axion Homes offers luxurious apartments and residential villas across Nigeria, aiming for sustainable urban housing in prime locations with high accessibility.",
    brandShowcase: [
      { image: "estate1.jpg", caption: "Price: $250,000" },
      { image: "estate2.jpg", caption: "Price: $180,000" },
    ],
    keyFigures: [
      { header: "Projects Completed", value: "50+" },
      { header: "Residential Units", value: "2000+" },
      { header: "Cities Covered", value: "10 Major Cities" },
    ],
  },
  {
    id: "Foam Products",
    name: "Foam Products",
    image: fms,
    products: ["Therapeutic Mattress", "Orthopedic Mattress"],
    description:
      "Innovative foam products designed for comfort and therapeutic benefits.",
    aboutProduct:
      "Axion Foam Products produce therapeutic mattresses with advanced designs that adapt to body shapes, enhancing comfort and health for users.",
    brandShowcase: [
      { image: "mattress1.jpg", caption: "Single Size - $200" },
      { image: "mattress2.jpg", caption: "Queen Size - $400" },
    ],
    keyFigures: [
      { header: "Mattresses Sold Annually", value: "500K Units" },
      { header: "Distribution Centers", value: "50 Nationwide" },
      { header: "Customer Satisfaction Rate", value: "98%" },
    ],
  },
  {
    id: "Oil and Gas",
    name: "Oil and Gas",
    image: petroplus,
    products: ["PMS", "AGO", "DPK"],
    description:
      "Comprehensive petroleum products and services, from import to distribution.",
    aboutProduct:
      "Axion Petroplus provides import, distribution, and delivery of petroleum products like PMS, AGO, and DPK, serving various sectors including power, telecom, and transport.",
    brandShowcase: [
      { image: "petrol1.jpg", caption: "Diesel (AGO) - $3.00/L" },
      { image: "petrol2.jpg", caption: "Kerosene (DPK) - $1.50/L" },
    ],
    keyFigures: [
      { header: "Annual Distribution", value: "500M Litres" },
      { header: "Client Industries", value: "100+ Clients" },
      { header: "Service Locations", value: "Nationwide" },
    ],
  },
  {
    id: "Agriculture",
    name: "Agriculture",
    image: farmsImage,
    products: ["Rice", "Maize", "Tomatoes", "Beans"],
    description:
      "Sustainable agriculture with a focus on staple crops and farming innovation.",
    aboutProduct:
      "Axion Farms engages in crop farming, tool supply, and training services, applying modern agricultural practices to enhance productivity and sustainability.",
    brandShowcase: [
      { image: "farm1.jpg", caption: "Organic Tomatoes - $1/kg" },
      { image: "farm2.jpg", caption: "Premium Rice - $2/kg" },
    ],
    keyFigures: [
      { header: "Hectares Cultivated", value: "10,000+" },
      { header: "Annual Yield", value: "5M Tons" },
      { header: "Market Reach", value: "Nationwide" },
    ],
  },
  {
    id: "Logistics",
    name: "Logistics",
    image: lgc,
    products: [
      "Heavy Equipment Leasing",
      "Marine Transport",
      "Road Construction",
    ],
    description:
      "Full-service logistics solutions from equipment leasing to road construction.",
    aboutProduct:
      "Axion Logistics offers comprehensive logistics solutions, including heavy equipment leasing, oil and gas haulage, electrification, and marine transport.",
    brandShowcase: [
      { image: "logistics1.jpg", caption: "Tractor Leasing - $500/day" },
      { image: "logistics2.jpg", caption: "Marine Transport - $1000/trip" },
    ],
    keyFigures: [
      { header: "Vehicles Operated", value: "500+" },
      { header: "Contracts Completed", value: "150+" },
      { header: "Customer Satisfaction", value: "99%" },
    ],
  },
  {
    id: "Hospitality",
    name: "Hospitality",
    image: homesImage,
    products: ["Luxury Suites", "Event Halls", "Conference Rooms"],
    description:
      "Luxury hospitality experiences tailored to comfort and convenience.",
    aboutProduct:
      "Axion Suites provide high-end hospitality services with fully furnished rooms, event halls, and dining services, all in a serene setting.",
    brandShowcase: [
      { image: "suite1.jpg", caption: "Deluxe Suite - $150/night" },
      { image: "suite2.jpg", caption: "Conference Room - $200/day" },
    ],
    keyFigures: [
      { header: "Rooms Available", value: "150+" },
      { header: "Event Spaces", value: "10+" },
      { header: "Customer Reviews", value: "4.8/5 Stars" },
    ],
  },
  {
    id: "Automotive",
    name: "Automotive",
    image: autos,
    products: ["Luxury Cars", "SUVs", "Trucks"],
    description:
      "Leading supplier of luxury and utility vehicles with a focus on quality and service.",
    aboutProduct:
      "Axion Autos offers a wide range of high-quality vehicles through strategic alliances with top manufacturers, providing luxury cars, SUVs, and trucks to meet diverse needs.",
    brandShowcase: [
      { image: "car1.jpg", caption: "Luxury Car - $50,000" },
      { image: "car2.jpg", caption: "SUV - $35,000" },
    ],
    keyFigures: [
      { header: "Cars Sold Annually", value: "2000+" },
      { header: "Service Centers", value: "25 Locations" },
      { header: "Customer Rating", value: "4.9/5" },
    ],
  },
  {
    id: "Technology",
    name: "Technology",
    image: tech,
    products: [
      "Software Solutions",
      "IT Consultancy",
      "Cybersecurity Services",
    ],
    description: "Innovative technology solutions and services for businesses.",
    aboutProduct:
      "Axion Technologies delivers cutting-edge IT services, including software development, consultancy, and cybersecurity to streamline business operations.",
    brandShowcase: [
      {
        image: "tech1.jpg",
        caption: "Software Solution - Starting at $10,000",
      },
      { image: "tech2.jpg", caption: "Cybersecurity Service - $5,000" },
    ],
    keyFigures: [
      { header: "Projects Delivered", value: "100+" },
      { header: "Global Clients", value: "50+" },
      { header: "Annual Revenue", value: "$5M+" },
    ],
  },
];

export default function Home() {
  const [visibleServices, setVisibleServices] = useState(6); // State to control how many services to show

  const aboutRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    if (ref.current) {
      // Scroll to the section
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });

      // Add the flash class
      ref.current.classList.add("flash");

      // Remove the flash class after 1 second (animation duration)
      setTimeout(() => {
        ref.current?.classList.remove("flash");
      }, 1000);
    }
  };
  const handleViewAll = () => {
    setVisibleServices(services.length); // Show all services when the button is clicked
  };
  return (
    <div>
      <Navbar
        scrollToSection={scrollToSection}
        aboutRef={aboutRef}
        servicesRef={servicesRef}
        contactRef={contactRef}
      />

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat py-12 lg:py-0 lg:h-screen h-[500px] flex items-center"
        style={{
          backgroundImage: `url(${bghe})`, // Replace with your image path
        }}
      >
        {/* Overlay for reduced brightness */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content Wrapper */}
        <div className="container mx-auto px-6 lg:px-16 flex flex-col items-start justify-center h-full text-white z-10">
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight max-w-3xl font-josefin">
            Drive Innovation <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">
              Across Boundaries
            </span>
          </h1>

          {/* Subheading */}
          <p className="mt-4 text-base sm:text-lg lg:text-xl max-w-lg font-josefin">
            Explore our advanced solutions in healthcare, energy, logistics, and
            more, designed to break barriers and bring the world closer.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href="#explore"
              onClick={() => scrollToSection(aboutRef)}
              className="flex items-center px-6 py-3 font-josefin  bg-white text-teal-700 rounded-full font-semibold hover:bg-gray-200 transition duration-300 transform hover:scale-105"
            >
              Learn More
              <FiArrowDownRight className="text-2xl ml-2" />
            </a>
            <a
              href="#contact"
              onClick={() => scrollToSection(contactRef)}
              className="px-6 py-3 font-josefin hidden md:block bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-darkBlue hover:text-white transition duration-300 transform hover:scale-105"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}

      <section
        className="bg-gray-100 text-darkBlue py-16 px-6"
        ref={aboutRef}
        id="about"
      >
        <Fade duration={1000} delay={200}>
          <div className="container mx-auto flex flex-col lg:flex-row flex-col-reverse items-center gap-10">
            <div className="lg:w-1/2">
              <img
                src={hr}
                alt="About Axion Group"
                className="lg:w-3/4 w-full h-auto mx-auto lg:mx-0 rounded-lg shadow-md"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6 font-josefin">
                About Axion Group
              </h2>
              <p className="text-base mb-4 font-josefin">
                Axion Group Limited is a conglomerate with diverse subsidiaries,
                including Axion Pharmaceuticals, Axion Farms, Axion Suites,
                Axion Logistics, Axion PetropIus, Axion Technologies, Axion
                Homes, Axion Foam Products, and Axion Autos, with locations in
                Nigeria and the USA.
              </p>
              <p className="text-base mb-4 font-josefin">
                The group operates across various sectors such as Oil & Gas,
                Pharmaceuticals, and Hospitality, focusing on innovation and
                creating superior value for stakeholders. We are dedicated to
                excellence and aim to bridge markets with our expertise and
                commitment to quality.
              </p>
              <p className="text-base font-josefin">
                Since its inception in 2011, Axion Group has been driven by core
                values of integrity, customer focus, excellence, and innovation.
                Our mission is to empower businesses by delivering top-notch
                solutions across industries.
              </p>
            </div>
          </div>
        </Fade>
      </section>

      <Slide direction="up" duration={1000} triggerOnce>
        <section className="bg-white text-darkBlue py-16 px-6">
          <div className="container mx-auto">
            <section className="bg-gray- text-darkBlue ">
              <div className="container ">
                {/* Header */}
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-gray-800 mb-4 font-josefin">
                    Vision & Mission
                  </h2>
                  <p className="text-base text-gray-600 font-josefin">
                    Dedicated to innovation, integrity, and excellence across
                    industries.
                  </p>
                </div>

                {/* Vision & Mission Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                  {/* Vision */}
                  <div className="p-8 bg-lightRed text-white rounded-lg shadow-lg relative overflow-hidden">
                    {/* Icon & Background Graphic */}
                    <div className="absolute top-0 right-0 opacity-10 text-[150px] my-[-25px]">
                      <FaEye />
                    </div>
                    <div className="relative z-10">
                      <FaEye className="text-6xl mb-4 text-white inline-block" />
                      <h3 className="text-3xl font-bold mb-4 font-josefin">
                        Our Vision
                      </h3>
                      <p className="text-base font-josefin">
                        To be a world-class company with quality products in
                        every home, delivering superior customer satisfaction
                        and great value to shareholders.
                      </p>
                    </div>
                  </div>

                  {/* Mission */}
                  <div className="p-8 bg-darkBlue text-white rounded-lg shadow-lg relative overflow-hidden">
                    {/* Icon & Background Graphic */}
                    <div className="absolute top-0 right-0 opacity-10 text-9xl">
                      <FaBullseye />
                    </div>
                    <div className="relative z-10">
                      <FaBullseye className="text-6xl mb-4 text-white inline-block" />
                      <h3 className="text-3xl font-bold mb-4 font-josefin">
                        Our Mission
                      </h3>
                      <p className="text-base font-josefin">
                        To build and sustain a one-stop destination in
                        hospitality and healthcare services, among others,
                        through superior value delivery and innovative
                        partnerships.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Core Values Section */}
            <Fade duration={1000} delay={200} triggerOnce>
              <div className="relative">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={hr}
                    alt="Background"
                    className="w-full h-full object-cover opacity-70"
                  />
                </div>

                {/* Content on top of the background */}
                <div className="relative z-10 bg-gray-900 bg-opacity-70 py-12 px-8">
                  <h3 className="text-3xl font-bold text-center text-white mb-8 font-josefin">
                    Our Core Values
                  </h3>

                  <p className="text-center text-white text-lg max-w-2xl mx-auto mb-8 font-josefin">
                    Each product in Axion’s platform is connected to the same
                    underlying smart ecosystem. Although our solutions are
                    powerful on their own, the real magic happens when you use
                    them together.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Value Item */}
                    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                      <div className="bg-green-500 p-4 rounded-full mb-4">
                        <FaHeart className="text-white text-3xl" />
                      </div>
                      <h4 className="text-xl font-bold text-darkBlue mb-2 font-josefin">
                        Passion
                      </h4>
                      <p className="text-gray-600 text-center font-josefin">
                        We create experiences and lifestyles with our service
                        offerings, consistently striving to excel.
                      </p>
                    </div>

                    {/* Repeat for other values */}
                    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                      <div className="bg-purple-500 p-4 rounded-full mb-4">
                        <FaCheckCircle className="text-white text-3xl" />
                      </div>
                      <h4 className="text-xl font-bold text-darkBlue mb-2 font-josefin">
                        Integrity
                      </h4>
                      <p className="text-gray-600 text-center font-josefin">
                        We uphold our promises with utmost efficiency, ensuring
                        trust and transparency in all our dealings.
                      </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                      <div className="bg-yellow-500 p-4 rounded-full mb-4">
                        <FaLightbulb className="text-white text-3xl" />
                      </div>

                      <h4 className="text-xl font-bold text-darkBlue mb-2 font-josefin">
                        Innovation
                      </h4>
                      <p className="text-gray-600 text-center font-josefin">
                        Constantly reinventing our business approaches to
                        optimize customer value and stay ahead in the market.
                      </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center ">
                      <div className="bg-indigo-500 p-4 rounded-full mb-4">
                        <FaPeopleArrows className="text-white text-3xl" />
                      </div>

                      <h4 className="text-xl font-bold text-darkBlue mb-2 font-josefin">
                        Adaptability
                      </h4>
                      <p className="text-gray-600 text-center font-josefin">
                        Our flexible, can-do spirit allows us to cater to the
                        unique needs of our customers, adapting quickly to
                        changes.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom Section with solid background */}
              </div>
            </Fade>
          </div>
        </section>
      </Slide>

      {/* Key Management Team Section */}
      <Fade duration={1000} delay={200} triggerOnce>
        <section className="bg-gray-100 text-darkBlue py-16 px-6">
          <div className="container mx-auto flex flex-col md:flex-row items-center">
            {/* Image Section */}
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <div className="relative">
                <img
                  src={heroImg}
                  alt="Dr. Jude Obaikor"
                  className="rounded-lg shadow-lg object-cover w-full h-full"
                />
                <div className="absolute top-4 left-4 bg-darkBlue text-white px-4 py-2 rounded-md font-josefin">
                  <h3 className="text-lg font-bold">
                    11+ <br /> YEARS OF ACTIVE SERVICE
                  </h3>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="md:w-1/2">
              <h2 className="text-4xl font-bold text-gray-800 mb-4 font-josefin">
                We Are A Key Player In Several Sectors
              </h2>
              <p className="text-base text-gray-600 mb-6 font-josefin ">
                Since its inception in 2011, Axion Group Limited conducted its
                business transactions in accordance with its core values of
                integrity, customer focus, excellence, efficiency, and
                continuous innovation to create and sustain value across
                customer relationships. We seek to become "best in class"
                provider of Hospitality & Healthcare detailing services across
                corporate organizations, transportation companies, and
                government agencies.
              </p>
              <div className="flex items-center font-josefin">
                <img
                  src={teamMember1}
                  alt="Dr. Jude Obaikor"
                  className="w-16 h-16 rounded-full mr-4 object-cover"
                />
                <div>
                  <h3 className="text-xl font-bold">Dr. Jude Obaikor</h3>
                  <p className="text-sm text-gray-500">
                    CEO Axion Group of Companies
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fade>

      {/* Services Section */}
      <section ref={servicesRef} className="py-12">
        <Bounce duration={1000}>
          <div className="container mx-auto ">
            <h2 className="text-4xl font-bold text-center mb-4 font-josefin">
              Our Services
            </h2>
            <p className="text-center text-gray-600 mb-12 font-josefin px-5">
              Axion Group delivers a diverse range of services across multiple
              sectors, ensuring quality, innovation, and excellence.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-5 md:mx-10 lg:mx-20">
              {services.slice(0, visibleServices).map(service => (
                <Link to={`/sector/${service.id}`} key={service.id}>
                  <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
                    />
                    <div className="text-center text-darkBlue px-4">
                      <h3 className="text-lg font-bold mb-2 font-josefin">
                        {service.name}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* View All Button */}
            {visibleServices < services.length && (
              <div className="flex justify-center mt-6">
                <button
                  onClick={handleViewAll}
                  className="flex items-center border border-gray-300 shadow rounded-md overflow-hidden"
                >
                  {/* Text Section */}
                  <span className="px-3 py-2 bg-white text-darkBlue font-semibold text-sm font-josefin">
                    View All
                  </span>
                  {/* Icon Section */}
                  <span className="p-3 bg-darkBlue text-white">
                    <FaLongArrowAltRight className="text-lg" />
                  </span>
                </button>
              </div>
            )}
          </div>
        </Bounce>
      </section>

      {/* <section
        id="contact"
        className="bg-gray-100 text-darkBlue py-16 px-6"
        ref={contactRef}
      >
        <Fade duration={1000} delay={200}>
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Contact Us
              </h2>
              <p className="text-base text-gray-600">
                We would love to hear from you. Reach out to us via phone,
                email, or visit our office.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <span className="flex justify-center items-center p-3 bg-darkBlue rounded-full">
                      <FaMapMarkerAlt className="text-2xl text-yellow-400" />
                    </span>
                    <p className="text-base">
                      7, Axion Road, Off Port-Harcout Road Owerri
                    </p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="flex justify-center items-center p-3 bg-darkBlue rounded-full">
                      <FaPhone className="text-2xl text-yellow-400" />
                    </span>
                    <p className="text-base">+234 8180 001 124</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="flex justify-center items-center p-3 bg-darkBlue rounded-full">
                      <FaEnvelope className="text-2xl text-yellow-400" />
                    </span>
                    <p className="text-base">info@axiongroupltd.com</p>
                  </div>
                </div>

                <div className="h-64 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.084632793127!2d144.9648734153174!3d-37.81821717975185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xc24e6ff9f1f1bbd!2s123%20Business%20Ave%2C%20Suite%204%2C%20Lagos%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1615394996483!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    title="Google Maps"
                  ></iframe>
                </div>
              </div>

              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name*"
                    className="w-full p-3 border border-gray-300 rounded"
                  />
                  <input
                    type="email"
                    placeholder="Your Email*"
                    className="w-full p-3 border border-gray-300 rounded"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full p-3 border border-gray-300 rounded"
                />
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-yellow-400 text-gray-900 p-3 rounded font-semibold hover:bg-yellow-500 transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </Fade>
      </section> */}

      <section className="bg-gray-50 py-16 px-4  font-josefin" ref={contactRef}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 font-josefin">
            Connect with one of our global offices
          </h2>
          <div className="flex flex-col md:flex-row items-stretch md:space-x-8">
            {/* Map Section */}
            <div className="flex-1 mb-8 md:mb-0 h-[300px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31773.945773367526!2d6.9930739!3d5.4558887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10425bb41e1dda25%3A0x602179bb4979e021!2sAxion%20Honors!5e0!3m2!1sen!2sng!4v1731513886964!5m2!1sen!2sng"
                width="100%"
                height="132%"
                className="rounded-lg shadow-lg"
                allowFullScreen={true}
                loading="lazy"
                title="Office Location"
              ></iframe>
            </div>

            {/* Contact Information Section */}
            <div className="bg-white rounded-lg shadow-lg p-8 w-full md:w-1/3 h-full">
              <h3 className="text-xl font-bold mb-4 font-josefin">
                Global Headquarters
              </h3>
              <div className="flex items-start mb-4">
                <FiMapPin className="text-teal-500 text-2xl mr-3" />
                <p className="text-gray-600">
                  7, Axion Road
                  <br />
                  Off Port-Harcout Road <br />
                  Owerri Nigeria
                </p>
              </div>
              <div className="flex items-start mb-4">
                <FiPhone className="text-teal-500 text-2xl mr-3" />
                <div>
                  <p className="font-semibold text-gray-800 font-josefin">
                    Phone / Fax
                  </p>
                  <p className="text-gray-600">
                    +234 8113105555
                    <br />
                    (+234 8116705555 )
                  </p>
                  {/* <p className="text-gray-600 mt-2">Fax: +234 8113 805555</p> */}
                </div>
              </div>
              <div className="flex items-start">
                <FiMail className="text-teal-500 text-2xl mr-3" />
                <div>
                  <p className="font-semibold text-gray-800 font-josefin">
                    Press / Media / Blogger Information
                  </p>
                  <p className="font-semibold text-gray-800 mt-2 font-josefin">
                    Leave Us A Mail*{" "}
                  </p>
                  <a
                    href="mailto:info@axiongroupltd.com"
                    className="text-blue-600 hover:underline"
                  >
                    info@axiongroupltd.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
