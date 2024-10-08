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
      console.log(`Error with newsletter input: ${error}`);
    }
  };

  return (
    <div className="flex flex-col bg-[#3c6e71] text-textWhite px-5 py-2">
      <div className="flex justify-center flex-wrap gap-10">
        
        <div className="flex  justify-center items-center text-center lg:items-start lg:text-start basis-[200px] mx-5 my-2">
          <div>
          <h3 className="font-bold mb-4">About Us</h3>
          <p className="my-2 pb-1">
            Rentalog is the ultimate solution for landlords looking to simplify
            their rent management process.{" "}
          </p>
        
          <img
            className="bg-[white] hover:cursor-pointer px-1 rounded-xl mb-2 h-[40px] w-[150px] hover:shadow-l hover:scale-105 transition duration-300 ease-in-out"
            src={logo}
            alt="logo"
          />
          
          </div>
        </div>
        
        <div className="flex  justify-center items-center text-center lg:items-start lg:text-start basis-[150px] mx-5 my-2">
           <div>

          <h3 className="font-bold mb-4">Services</h3>
          <ul>
            <li>Property Listing</li>
            <li>Track Payment record</li>
            <li>Rent Calculation</li>
            <li>Time Management</li>
          </ul>

          </div>
        </div>
        <div className="flex justify-center items-center font-medium text-center lg:items-start lg:text-start basis-[150px] mx-5 my-2 ">
           <div>

           <h3 className="font-bold mb-4">Important Links</h3>
          <ul >
            <li className=" hover:scale-110 transition duration-300 ease-in-out">
              <a href="/">Home</a>
            </li>
            <li className=" hover:scale-110 transition duration-300 ease-in-out">
              <a href="#AboutUs">About Us</a>
            </li>
            <li className=" hover:scale-110 transition duration-300 ease-in-out">
              <a href="#ContactUs">Contact Us</a>
            </li>
            <li className=" hover:scale-110 transition duration-300 ease-in-out">
              <a href="#Service">Rentals</a>
            </li>
          </ul>

          </div>
        </div>
        <div className="flex justify-center items-center text-center lg:items-start lg:text-start basis-[150px] mx-5 my-2">
          <div>

          <h3 className="text-lg font-semibold mb-4">Newsletter</h3>

          <p className="mt-4 text-sm font-[300]">
            Subscribe to our{" "}
            <span className="text-[#9ef01a] font-bold text-justify">
              Newsletter
            </span>{" "}
            for latest updates and offers!
          </p>
          
          <div className="flex flex-row items-center space-x-4 mt-4 relative">
            <input
              type="email"
              id="newsletter"
              maxLength={35}
              value={email}
              placeholder="Enter Email..."
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSubmit(e)}
              className="text-[#090303] text-sm font-[500] p-2 rounded-md focus:outline-none focus:ring"
            />
            <button
              onClick={handleSubmit}
              className="absolute right-1 p-2 bg-[#1ABC9C] text-white rounded-md hover:bg-gray-dark hover:text-[#1abc9c] hover:border hover:border-[#1abc9c] transition duration-3 ease-in-out"
            >
              <LuSendHorizonal />
            </button>

            
          </div>

          <div className="flex gap-4 mt-2 justify-center">
            <a href="https://twitter.com/gauravsingh1281">
              <FaTwitter className="w-6 h-6 hover:shadow-2xl hover:scale-110 transition duration-300 ease-in-out hover:text-[#1DA1F2]" />
            </a>
            <a href="https://github.com/gauravsingh1281">
              <FaGithub className="w-6 h-6 hover:shadow-2xl hover:scale-110 transition duration-300 ease-in-out hover:text-black" />
            </a>
            <a href="https://www.instagram.com/gauravsingh1281">
              <FaInstagram className="w-6 h-6 hover:shadow-2xl hover:scale-110 transition duration-300 ease-in-out hover:text-[#FF69B4]" />
            </a>
          </div>
          

          </div>
        </div>
      </div>
      <div className="h-10"></div>
      <hr className="my-1 mx-10 border-1 border-t border-gray-light" />
      
       
      <div className=" self-center text-center">
        {" "}
  
        {year} || All Rights Reserved || The Virtual World Maker
        </div>
         
        
        

  
      
    </div>
  );
};



export default Footer;



