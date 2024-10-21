// src/components/Header.js

import "../Header-section/Header-section.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import carImg1 from "../../assets/Images/red-house.png";
import carImg2 from "../../assets/Images/carousel2.png";
import carImg3 from "../../assets/Images/carousel3.png";

const Header = () => {
  return (
    <>
      <div className="header-section mb-[80px]">
        <Navbar />

        <div id="home"></div>
        <Carousel 
          autoPlay={true} 
          infiniteLoop={true} 
          showStatus={false} 
          showThumbs={false} 
          stopOnHover={false} 
          swipeable={false} 
          animationHandler="fade"
        >
          <div>
            <img src={carImg1} className="h-screen object-cover" alt="Red House" />
          </div>
          <div>
            <img src={carImg2} className="h-screen object-cover" alt="Carousel 2" />
          </div>
          <div>
            <img src={carImg3} className="h-screen object-cover" alt="Carousel 3" />
          </div>
        </Carousel>
        
        <div className="header-text top-[15%] sm:top-[23%] absolute text-black">
          <h1 className="text-black">
            Welcome to <br /><span>Rentalog</span>
          </h1>
          <p className="header-desc text-black">
            Rentalog is the ultimate solution for landlords looking to simplify
            their rent management process. Keep track of your renters' personal
            details, their payment history, and much more with ease.
          </p>
          <Link to="/register">
            <button className="btn">Get Started</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
