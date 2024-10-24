import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Images/logo.png";
import { FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa";
import { LuSendHorizonal } from "react-icons/lu";
import { RiTwitterXFill } from "react-icons/ri";

const Footer = () => {
  const [email, setEmail] = useState("");


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email);
    setEmail("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple regex for email validation
    return emailRegex.test(email);
  };

    const handleSubmit = (event) => {

    event.preventDefault();
    
    if (!validateEmail(email)) {
      alert("❌ Please enter a valid email address."); // Alert for invalid email
      return;
    }

    console.log(email); // Log the valid email
    alert("🙏 Thank you for subscribing to our newsletter!"); // Alert for successful submission
    setEmail(""); // Clear input after submission
  };

  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 text-gray-800 py-12 transition-all duration-300 ease-in-out">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4 transform hover:scale-105 transition-all duration-300">
            <h3 className="text-xl font-bold mb-4 text-[#2ec4b6]">About Us</h3>
            <p className="text-sm">
              Rentalog is the ultimate solution for landlords looking to
              simplify their rent management process.
            </p>
            <img
              className="bg-white rounded-xl h-12 w-auto hover:shadow-lg transition duration-300 ease-in-out cursor-pointer"

              className="bg-[white] mx-auto lg:mx-0 hover:cursor-pointer px-1 rounded-xl mb-2 h-[40px] w-[150px] hover:shadow-l hover:scale-105 transition duration-300 ease-in-out"
              src={logo}
              alt="Rentalog logo"
            />
          </div>

          <div className="transform hover:scale-105 transition-all duration-300">
            <h3 className="text-xl font-bold mb-4 text-[#2ec4b6]">Services</h3>
            <ul className="space-y-2">
              {["Property Listing", "Track Payment Record", "Rent Calculation", "Time Management"].map((item, index) => (
                <li key={index} className="hover:translate-x-2 transition-all duration-300 ease-in-out">
                  <Link to={`/dashboard/${item.toLowerCase().replace(/\s+/g, '')}`} className="text-sm hover:text-[#2ec4b6]">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="transform hover:scale-105 transition-all duration-300">
            <h3 className="text-xl font-bold mb-4 text-[#2ec4b6]">Important Links</h3>
            <ul className="space-y-2">
              {["Home", "About Us", "Contact Us", "Rentals", "Contributors"].map((item, index) => (
                <li key={index} className="hover:translate-x-2 transition-all duration-300 ease-in-out">
                  <a href={`#${item.toLowerCase().replace(/\s+/g, '')}`} className="text-sm hover:text-[#2ec4b6]">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="transform hover:scale-105 transition-all duration-300">
            <h3 className="text-xl font-bold mb-4 text-[#2ec4b6]">Newsletter</h3>
            <p className="text-sm mb-4">
              Subscribe to our <span className="font-bold">Newsletter</span> for latest updates and offers!
            </p>
            <form onSubmit={handleSubmit} className="flex group">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email..."
                className="flex-grow p-2 rounded-l-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#2ec4b6] transition-all duration-300"
              />
              <button
                type="submit"
                className="bg-[#2ec4b6] p-2 rounded-r-md group-hover:bg-[#25a090] transition-all duration-300 ease-in-out"
              >
                <LuSendHorizonal className="w-5 h-5 text-white" />
              </button>
            </form>
            <div className="flex space-x-4 mt-4 justify-center">
              {[
                { Icon: RiTwitterXFill, href: "https://twitter.com/gauravsingh1281" },
                { Icon: FaGithub, href: "https://github.com/gauravsingh1281" },
                { Icon: FaInstagram, href: "https://www.instagram.com/gauravsingh1281" },
                { Icon: FaLinkedin, href: "#" },
              ].map(({ Icon, href }, index) => (
                <a 
                  key={index} 
                  href={href} 
                  className="transform hover:scale-125 hover:text-[#2ec4b6] transition-all duration-300 ease-in-out"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-gray-300 text-center text-sm">
        <p className="animate-pulse">
          © {year} || All Rights Reserved || The Virtual World Maker
        </p>
      </div>
    </footer>
  );
};

export default Footer;