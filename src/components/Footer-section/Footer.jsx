import logo from "../../assets/Images/logo.png";
import { FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";
let date = new Date();
let year = date.getFullYear();
const Footer = () => {
  return (
    <>
      <div className="flex grow flex-col bg-primaryGreen text-textWhite px-10 py-[35px] dark:bg-darkMode-green dark:text-darkMode-textColor">
        <div className="flex justify-center flex-wrap grow">
          <div className="flex flex-col justify-center items-center text-center lg:items-start lg:text-start basis-[300px] mx-10 my-5">
            <img
              className="bg-[white] px-1 rounded-xl mb-2 h-[58px] w-[200px] hover:shadow-l hover:scale-105 transition duration-300 ease-in-out"
              src={logo}
              alt="logo"
            />
            <p className="my-6">
              Rentalog is the ultimate solution for landlords looking to simplify
              their rent management process.{" "}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center text-center lg:items-start lg:text-start basis-[180px] mx-10 my-5">
            <ul>
              <li className="font-semibold pb-4">Services</li>
              <li>Property Listing</li>
              <li>Track Payment record</li>
              <li>Rent Calculation</li>
              <li>Time Management</li>
            </ul>
          </div>
          <div className="flex flex-col justify-center items-center text-center lg:items-start lg:text-start basis-[150px] mx-10 my-5">
            <ul>
              <li className="font-semibold hover:scale-110 transition duration-300 ease-in-out">
                <a href="/">Home</a>
              </li>
              <li className="font-semibold hover:scale-110 transition duration-300 ease-in-out">
                <a href="#AboutUs">About Us</a>
              </li>
              <li className="font-semibold hover:scale-110 transition duration-300 ease-in-out">
                <a href="#ContactUs">Contact Us</a>
              </li>
              <li className="font-semibold hover:scale-110 transition duration-300 ease-in-out">
                <a href="#Service">Rentals</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-center items-center text-center lg:items-start lg:text-start basis-[150px] mx-10 my-5">
            <h3 className="text-xl font-semibold">Contact Us</h3>
            <div className="flex space-x-3 pt-2">
              <a href="https://twitter.com/gauravsingh1281">
                <FaTwitter className="w-8 h-8 hover:shadow-2xl hover:scale-110 transition duration-300 ease-in-out" />
              </a>
              <a href="https://github.com/gauravsingh1281">
                <FaGithub className="w-8 h-8 hover:shadow-2xl hover:scale-110 transition duration-300 ease-in-out" />
              </a>
              <a href="https://www.instagram.com/gauravsingh1281">
                <FaInstagram className="w-8 h-8 hover:shadow-2xl hover:scale-110 transition duration-300 ease-in-out" />
              </a>
            </div>
          </div>
        </div>
        <hr className="my-5 mx-20" />
        <div className="self-center text-center">© <span>{year}</span> || All Rights Reserved || The Virtual World Maker</div>
      </div>
    </>
  );
};

export default Footer;
