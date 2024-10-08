import logo from "../../assets/Images/logo.png";
import { FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="flex grow flex-col bg-primaryGreen text-textWhite px-10 py-[35px]">
      <div className="flex justify-center flex-wrap grow">
        <div className="flex flex-col justify-center items-center text-center lg:items-start lg:text-start basis-[300px] mx-10 my-5">
          <img
            className="bg-[white] px-1 rounded-xl mb-2 h-[58px] w-[200px] hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out"
            src={logo}
            alt="logo"
          />
          <p className="my-6 hover:text-yellow-200 transition-colors duration-300">
            Rentalog is the ultimate solution for landlords looking to simplify
            their rent management process.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center text-center lg:items-start lg:text-start basis-[180px] mx-10 my-5">
          <ul>
            <li className="font-semibold pb-4 hover:text-yellow-200 transition-colors duration-300">Services</li>
            {["Property Listing", "Track Payment record", "Rent Calculation", "Time Management"].map((service, index) => (
              <li key={index} className="group">
                <span className="block py-2 transform transition duration-500 ease-in-out group-hover:scale-110 group-hover:translate-x-2 group-hover:text-yellow-200">
                  {service}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col justify-center items-center text-center lg:items-start lg:text-start basis-[150px] mx-10 my-5">
          <ul>
            {[
              { href: "/", text: "Home" },
              { href: "#AboutUs", text: "About Us" },
              { href: "#ContactUs", text: "Contact Us" },
              { href: "#Service", text: "Rentals" }
            ].map((item, index) => (
              <li key={index} className="font-semibold group">
                <a 
                  href={item.href} 
                  className="block py-2 transform transition duration-500 ease-in-out group-hover:scale-110 group-hover:translate-x-2 group-hover:text-yellow-200"
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col justify-center items-center text-center lg:items-start lg:text-start basis-[150px] mx-10 my-5">
          <h3 className="text-xl font-semibold hover:text-yellow-200 transition-colors duration-300">Contact Us</h3>
          <div className="flex space-x-3 pt-2">
            {[
              { href: "https://twitter.com/gauravsingh1281", Icon: FaTwitter, hoverColor: "hover:text-blue-400" },
              { href: "https://github.com/gauravsingh1281", Icon: FaGithub, hoverColor: "hover:text-gray-400" },
              { href: "https://www.instagram.com/gauravsingh1281", Icon: FaInstagram, hoverColor: "hover:text-pink-400" }
            ].map(({ href, Icon, hoverColor }, index) => (
              <a 
                key={index}
                href={href} 
                className={`transform transition duration-500 ease-in-out hover:scale-125 hover:rotate-12 ${hoverColor}`}
              >
                <Icon className="w-8 h-8" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <hr className="my-5 mx-20" />
      <div className="self-center text-center group">
        <span className="group-hover:text-yellow-200 transition-colors duration-300">
          © {year} || All Rights Reserved || The Virtual World Maker
        </span>
      </div>
    </div>
  );
};

export default Footer;