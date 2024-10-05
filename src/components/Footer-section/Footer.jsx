import logo from "../../assets/Images/logo.png";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
let date = new Date();
let year = date.getFullYear();

const Footer = () => {
  return (
    <>
    <div className="flex flex-col bg-primaryGreen text-textWhite px-5 py-2">
      <div className="flex justify-center flex-wrap gap-10">
        <div className="flex flex-col justify-center items-center text-center lg:items-start lg:text-start basis-[200px] mx-5 my-2">
          <img
            className="bg-[white] px-1 rounded-xl mb-2 h-[40px] w-[150px] hover:shadow-l hover:scale-105 transition duration-300 ease-in-out"
            src={logo}
            alt="logo"
          />
          <p className="my-2">
            Rentalog is the ultimate solution for landlords looking to simplify
            their rent management process.{" "}
          </p>
        </div>
        <div className="flex flex-col justify-center items-center text-center lg:items-start lg:text-start basis-[150px] mx-5 my-2">
          <ul>
            <li className="font-semibold pb-2">Services</li>
            <li>Property Listing</li>
            <li>Track Payment record</li>
            <li>Rent Calculation</li>
            <li>Time Management</li>
          </ul>
        </div>
        <div className="flex flex-col justify-center items-center text-center lg:items-start lg:text-start basis-[150px] mx-5 my-2">
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
                <FaXTwitter className="w-8 h-8 hover:shadow-2xl hover:scale-110 transition duration-300 ease-in-out" />
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
      <div className="h-10"></div>
      <hr className="my-1 mx-10" />
      <div className="self-center text-center"> {year} || All Rights Reserved || The Virtual World Maker</div>
    </div>
  );
};

export default Footer;
