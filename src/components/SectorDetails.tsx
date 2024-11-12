import { useParams } from "react-router-dom";

import Navbar from "./Navbar";
import phc from "../assets/images/phc.jpg";
import autos from "../assets/images/ptp.jpg";
import lgc from "../assets/images/lgc.jpg";
import fms from "../assets/images/fms.jpeg";
import p1 from "../assets/images/p1.jpg";
import p2 from "../assets/images/p2.jpg";
import p3 from "../assets/images/p3.jpg";

import tech from "../assets/images/tech.jpg";
import realestate from "../assets/images/estate.jpeg";
import farmsImage from "../assets/images/agriculture.jpg";

import petroplus from "../assets/images/petro.jpg";

import homesImage from "../assets/images/him.jpg";
import { useRef } from "react";

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
  aboutsect: string;
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
    aboutsect:
      "Axion Logistics offers comprehensive logistics solutions, including heavy equipment leasing, oil and gas haulage, electrification, and marine transport.",

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
    aboutsect:
      "Axion Logistics offers comprehensive logistics solutions, including heavy equipment leasing, oil and gas haulage, electrification, and marine transport.",

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
    aboutsect:
      "Axion Logistics offers comprehensive logistics solutions, including heavy equipment leasing, oil and gas haulage, electrification, and marine transport.",

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
    aboutsect:
      "Axion Logistics offers comprehensive logistics solutions, including heavy equipment leasing, oil and gas haulage, electrification, and marine transport.",

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
    aboutsect:
      "Axion Logistics offers comprehensive logistics solutions, including heavy equipment leasing, oil and gas haulage, electrification, and marine transport.",

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
    aboutsect:
      "Axion Logistics offers comprehensive logistics solutions, including heavy equipment leasing, oil and gas haulage, electrification, and marine transport.Axion Logistics offers comprehensive logistics solutions, including heavy equipment leasing, oil and gas haulage, electrification, and marine transport.Axion Logistics offers comprehensive logistics solutions, including heavy equipment leasing, oil and gas haulage, electrification, and marine transport.",

    brandShowcase: [
      { image: p1, caption: "Tractor Leasing - $500/day" },
      { image: p2, caption: "Marine Transport - $1000/trip" },
      { image: p3, caption: "Marine Transport - $1000/trip" },
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
    aboutsect:
      "Axion Logistics offers comprehensive logistics solutions, including heavy equipment leasing, oil and gas haulage, electrification, and marine transport.",

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
    aboutsect:
      "Axion Logistics offers comprehensive logistics solutions, including heavy equipment leasing, oil and gas haulage, electrification, and marine transport.",

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
    aboutsect:
      "Axion Logistics offers comprehensive logistics solutions, including heavy equipment leasing, oil and gas haulage, electrification, and marine transport.",

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
function SectorDetails() {
  const { id } = useParams<{ id: string }>();
  const sector: Service | undefined = services.find(
    service => service.id === id
  );

  if (!sector) return <div>Sector not found</div>;
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
  return (
    <div>
      <Navbar
        scrollToSection={scrollToSection}
        aboutRef={aboutRef}
        servicesRef={servicesRef}
        contactRef={contactRef}
      />
      {/* Hero Section with Background Image */}
      <div className="bg-gray-100 py-16 px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 font-josefin">
            About Axion {sector.name}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-lato">
            {sector.description}
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Side - Image */}
          <div className="order-2 md:order-1 flex justify-center">
            <img
              src={sector.image}
              alt="Company Culture"
              className="rounded-md shadow-lg object-cover h-64 md:h-80 w-full max-w-md"
            />
          </div>

          {/* Right Side - Text */}
          <div className="order-1 md:order-2">
            <h2 className="text-2xl font-semibold text-center md:text-start text-gray-800 mb-4 font-josefin">
              Our Mission: Helping Millions of Organizations Grow Better
            </h2>
            <p className="text-gray-600">{sector.aboutProduct}</p>
          </div>
        </div>
      </div>

      {/* Sector Details Section */}
      <div className="p-">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          {/* About This Sector */}
          <h3 className="text-3xl font-bold text-gray-800 mt-6 mb-4 text-center border-b-2 border-gray-200 pb-2 font-josefin">
            About This Sector
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-6 px-28 text-center">
            {sector.aboutsect}
          </p>

          {/* Products */}
          {/* 
          <ul className="gap-10 list-disc pl-6 text-green-8]00 flex justify-center items-center flex-wrap ">
            {sector.products.map((product, index) => (
              <li key={index} className="text-lg ">
                {product}
              </li>
            ))}
          </ul> */}
        </div>

        {/* Brand Showcase Section */}
        <div className="bg-gray-100 my-8 py-16 px-4 flex flex-col items-center">
          <h3 className="text-3xl font-extrabold text-center my-8 text-gray-800 font-josefin">
            Brand Showcase
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl px-4">
            {sector.brandShowcase.map((item, index) => (
              <div
                key={index}
                className="text-center bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105"
              >
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-56 h-auto mx-auto mb-4 rounded-lg" // Increased width and added rounded corners
                />
                <p className="text-xl font-semibold text-gray-700">
                  {item.caption}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Figures Section */}
        <h3 className="text-2xl font-bold text-center my-8 text-darkBlue font-josefin">
          Key Figures
        </h3>
        <div className="bg-slate-200 py-16 px-4 flex justify-center items-center flex-col">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8  ">
            {sector.keyFigures.map((figure, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-md shadow-md text-center "
              >
                <p className="text-3xl font-bold mb-2">{figure.value}</p>
                <p className="text-gray-600">{figure.header}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectorDetails;
