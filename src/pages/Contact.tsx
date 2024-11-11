import {
  FaEnvelope,
  FaPhoneAlt,
  FaLocationArrow,
  FaComments,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-gray-200 p-3 lg:p-16">
      {/* Left Side: Contact Form */}
      <div className="lg:w-1/2 bg-white shadow-lg rounded-lg p-8 mb-8 lg:mb-0 lg:mr-8">
        <h2 className="text-2xl font-bold mb-4">Contact Axion Sales Team</h2>
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                First name
              </label>
              <input
                type="text"
                placeholder="First name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Last name
              </label>
              <input
                type="text"
                placeholder="Last name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              />
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="you@axion.com"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">
              Phone number
            </label>
            <input
              type="tel"
              placeholder="+1 555 000 000"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              placeholder="Let us know how we can assist you..."
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            ></textarea>
          </div>

          <fieldset className="mt-4">
            <legend className="block text-sm font-medium text-gray-700 mb-2">
              Which Axion solutions are you interested in?
            </legend>
            <div className="grid grid-cols-2 gap-2">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" /> Axion Pharmaceuticals
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" /> Axion Suites
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" /> Axion Foam Products
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" /> Axion Petroplus
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" /> Axion Homes
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" /> Other
              </label>
            </div>
          </fieldset>

          <div className="flex justify-center items-center bg-gray-50 p-5 mt-4">
            <button
              type="submit"
              className="w-1/2 bg-blue-600 text-white font-semibold rounded-md py-2  hover:bg-blue-700"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

      {/* Right Side: Contact Information */}

      <div
        className="lg:w-1/2 bg-cover bg-no-repeat p-3 lg:p-16"
        style={{ backgroundImage: 'url("/assets/images/hm.jpg")' }}
      >
        <h1 className="text-3xl font-bold mb-4">Get in Touch</h1>
        <p className="text-darkBlue mb-8">
          Have questions about our services? Fill out the form or reach out
          directly to our team.
        </p>

        <div className="text-gray-800 mb-4">
          <h3 className="font-semibold mb-2 flex items-center">
            <span className="flex justify-center items-center p-3 mr-2 bg-white rounded-full">
              <FaEnvelope />
            </span>
            Email Sales
          </h3>
          <p>
            <a href="mailto:sales@axion.com" className="text-blue-600">
              sales@axiongroup.com
            </a>
          </p>
        </div>
        <hr className="my-4 border-gray-500" />

        <div className="text-gray-800 mb-4">
          <h3 className="font-semibold mb-2 flex items-center">
            <span className="flex justify-center items-center p-3 mr-2 bg-white rounded-full">
              <FaComments />
            </span>
            Live Chat
          </h3>
          <p>Chat with our support team 24/7 for quick assistance.</p>
          <a href="#" className="text-blue-600">
            Start Live Chat
          </a>
        </div>
        <hr className="my-4 border-gray-500" />

        <div className="text-gray-800 mb-4">
          <h3 className="font-semibold mb-2 flex items-center">
            <span className="flex justify-center items-center p-3 mr-2 bg-white rounded-full">
              <FaPhoneAlt />
            </span>
            Call Us
          </h3>
          <p>Mon - Fri, 9:00 AM - 6:00 PM</p>
          <p className="text-sm">+1 800 123 4567</p>
        </div>
        <hr className="my-4 border-gray-500" />

        <div className="text-gray-800 mb-4">
          <h3 className="font-semibold mb-2 flex items-center">
            <span className="flex justify-center items-center p-3 mr-2 bg-white rounded-full">
              <FaLocationArrow />
            </span>
            Visit Us
          </h3>
          <p>123 Axion Avenue, Tech Park, CA</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
