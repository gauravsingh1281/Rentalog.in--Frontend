import { useState,useEffect,useRef } from "react";
import rentBoardImg from "../.././assets/Images/rent-board.png";
import "./AboutUs-section.css";
import Lottie from "lottie-react";
import rent from "./rent.json";
import about1 from "../../assets/Images/about-1.svg"
import about2 from "../../assets/Images/about-2.jpg"
import about3 from "../../assets/Images/about-3.jpg"
import about4 from "../../assets/Images/about-4.jpg"

import { AboutCard, AboutCard2 } from './AboutCard';


const AboutUs = () => {
  

  

  return (
    <div className="aboutUs-section">
      <div id="AboutUs" ></div>

      <div className="flex flex-col md:flex-row items-start w-full">

        {/* About Us Content */}
        <div className="md:w-full flex flex-col">
          <h2 className=" text-2xl md:text-5xl font-bold my-3 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent" >
            About Us
          </h2>

          <div className='flex flex-col'>
            <AboutCard
              image={about1}
              heading={"Simplified Rental Property Management"}
              desc={"Rentalog is a web application designed to simplify rental property management for landlords. With an intuitive interface, it helps landlords keep track of essential information about their properties and tenants in a secure and organized way."} />
            <AboutCard2
              image={about2}
              heading={"Efficient Tenant Management"}
              desc={"Landlords can easily store and access important details about their tenants, including names, addresses, and rental payment history. This ensures that all relevant information is readily available, helping landlords stay on top of their responsibilities."} />
            <AboutCard
              image={about3}
              heading={"Rent Collection and Financial Tracking"}
              desc={"Rentalog streamlines the process of collecting and tracking monthly rent payments. By providing clear financial insights, landlords can effortlessly monitor their income and make data-driven decisions to optimize their rental business."} />
            <AboutCard2
              image={about4}
              heading={"User-Friendly Interface & Support"}
              desc={"Rentalog’s user-friendly interface makes it simple to navigate and access all necessary information quickly. Plus, landlords can rely on the dedicated support team for any questions or assistance, ensuring a smooth and hassle-free experience."} />
          </div>


        </div>
      </div>
    </div>
  );
};



export default AboutUs;
