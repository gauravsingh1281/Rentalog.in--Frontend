import { useState } from "react";
import logo from "../../assets/Images/logo.png";
import { FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";
import { LuSendHorizonal } from "react-icons/lu";
let date = new Date();
let year = date.getFullYear();

const Footer = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = (event) => {
    try {
      event.preventDefault();
      console.log(email);
      setEmail("");
    } catch (error) {
      console.log(`Error with newsletter input: ${error}`)
    }
  }
  
  return (
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
        <div className="flex flex-col justify-center items-center text-center lg:items-start lg:text-start basis-[150px] mx-5 my-2">
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <div className="flex space-x-4 pt-2">
            <a href="https://twitter.com/gauravsingh1281">
              <FaTwitter className="w-6 h-6 hover:shadow-2xl hover:scale-110 transition duration-300 ease-in-out hover:text-[#1DA1F2]" />
            </a>
            <a href="https://github.com/gauravsingh1281">
              <FaGithub className="w-6 h-6 hover:shadow-2xl hover:scale-110 transition duration-300 ease-in-out hover:text-[#333]" />
            </a>
            <a href="https://www.instagram.com/gauravsingh1281">
              <FaInstagram className="w-6 h-6 hover:shadow-2xl hover:scale-110 transition duration-300 ease-in-out hover:text-[#FF69B4]" />
            </a>
          </div>
          <div className="flex flex-row items-center space-x-4 mt-4 relative">
            <input 
              type="email"
              id="newsletter" 
              maxLength={35} 
              value={email} 
              placeholder="Enter Email..." 
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSubmit(e)}
              className="text-[#555] text-sm font-[500] p-2 rounded-md focus:outline-none focus:ring"/>
            <button onClick={handleSubmit} className="absolute right-1 p-2 bg-[#1ABC9C] text-white rounded-md hover:bg-[#fff] hover:text-[#1abc9c] hover:border hover:border-[#1abc9c] transition duration-3 ease-in-out"><LuSendHorizonal /></button>
          </div>
            <p className="mt-4 text-sm font-[300]">Subscribe to our <span className="text-[#cd4347] font-[500] text-justify">Newsletter</span> for latest updates and offers!</p>
        </div>
      </div>
      <div className="h-10"></div>
      <hr className="my-1 mx-10" />
      <div className="self-center text-center"> {year} || All Rights Reserved || The Virtual World Maker</div>
    </div>
  );
};

export default Footer;
