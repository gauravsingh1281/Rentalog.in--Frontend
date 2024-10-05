import { useState } from "react";
import rentBoardImg from "../.././assets/Images/rent-board.png";
import "./AboutUs-section.css";
import Lottie from "lottie-react";
import rent from "./rent.json";

const AboutUs = () => {
  const [gradientStyle, setGradientStyle] = useState({});

  // Function to handle mouse movement and update gradient
  const handleMouseMove = (e) => {
    const { offsetX, offsetY, target } = e.nativeEvent;
    const { clientWidth, clientHeight } = target;

    // Calculate percentage position of the mouse within the card
    const xPercent = (offsetX / clientWidth) * 100;
    const yPercent = (offsetY / clientHeight) * 100;

    // Set radial gradient color based on mouse position
    setGradientStyle({
      background: `radial-gradient(circle at ${xPercent}% ${yPercent}%, #FFB74D, #FFAB91, #FFF9C4)`,
    });
  };

  // Reset gradient when mouse leaves the section
  const handleMouseLeave = () => {
    setGradientStyle({
      background: "#EBB4B6", // Default background color (soft mint)
    });
  };

  return (
    <div className="aboutUs-section">
      <div id="AboutUs"></div>
      <span className="text-3xl md:text-4xl font-semibold text-[#312F2F] text-center pt-10">
        About Us
      </span>
      <div
        className="row flex flex-col justify-center items-center lg:flex-row m-[5%] rounded-3xl transition-all duration-500 ease-in-out transform hover:scale-105"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          ...gradientStyle,
          background: gradientStyle.background
            ? gradientStyle.background
            : "#D1F2EB", // Default background color
        }}
      >
        <Lottie
          className="rent-board-img text-primaryGreen w-[80%] lg:w-[50%]"
          animationData={rent}
          loop={true}
        />
        <div className="w-full lg:w-[50%] p-[5%]">
          <p className="paragraph text-justify text-[#312F2F] leading-6 md:leading-8 ">
          Rentalog is a web application that makes it easy for landlords to
            manage their rental properties. With Rentalog, landlords can keep
            track of important information about their renters, including their
            names, addresses, and rental payment history. This information is
            stored in a secure and organized manner, so landlords can access it
            whenever they need to. In addition to keeping track of renters&apos;
            information, Rentalog also makes it easy for landlords to collect and
            track monthly rent payments. This way, landlords always know exactly
            how much money they&apos;re earning from their properties and can make
            informed decisions about their business. Using Rentalog is simple and
            straightforward. All of the information is organized in a
            user-friendly interface, so landlords can access what they need
            quickly and easily. And, if they ever have questions or need help,
            they can reach out to Rentalog&apos;s dedicated support team for
            assistance. Overall, Rentalog is a convenient and efficient tool for
            landlords who want to keep their rental business organized and running
            smoothly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
