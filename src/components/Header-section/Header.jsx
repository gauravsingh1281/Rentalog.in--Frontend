import "../Header-section/Header-section.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import carImg1 from "../../assets/Images/red-house.png"
import carImg2 from "../../assets/Images/carousel2.png"
import carImg3 from "../../assets/Images/carousel3.png"
const Header = () => {
  return (
    <>
      <div className="header-section mb-[80px]">
        <Navbar />

        <div id="home"></div>
        <Carousel autoPlay = {true} infiniteLoop = {true} showStatus = {false} showThumbs = {false} stopOnHover ={false} swipeable = {false} animationHandler="fade">
          <div>
            <img src={carImg1} className="h-screen object-cover"/>
            
          </div>
          <div>
            <img src={carImg2} className="h-screen object-cover"/>
            
          </div>
          <div>
            <img src={carImg3} className="h-screen object-cover"/>
            
          </div>
        </Carousel>
        <div className="header-text top-[15%] sm:top-[23%] absolute">
          <h1>
            Welcome to <span>Rentalog</span>
          </h1>
          <p className="header-desc">
            Experience the serenity of effortless rent management with Rentalog.<br />
            Say goodbye to the complexities of tracking tenant details and payment histories.<br/>
            Our intuitive platform streamlines the entire process, providing you with a centralized hub for all your rental needs.<br/>
            Enjoy peace of mind knowing your rental business is in safe and capable hands.<br/>
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
