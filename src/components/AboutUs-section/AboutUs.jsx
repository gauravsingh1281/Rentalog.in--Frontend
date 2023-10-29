import rentBoardImg from "../.././assets/Images/rent-board.png";
import "./AboutUs-section.css";
import Lottie from "lottie-react";
import rent from "./rent.json";

const AboutUs = () => {
  return (
    <div className="aboutUs-section">
      <div id="AboutUs"></div>
      <span className="text-3xl md:text-4xl font-semibold text-[#312F2F] text-center pt-10 dark:text-darkMode-textColor">About Us</span>
      <div className=" row flex flex-col justify-center items-center lg:flex-row m-[5%] bg-gradient-to-b lg:bg-gradient-to-r from-primaryGreen to-customRed dark:from-darkMode-green dark:to-darkMode-red rounded-3xl">
        <Lottie className="rent-board-img text-primaryGreen w-[80%] lg:w-[50%]" animationData={rent} loop={true} />
        <div className=" w-full lg:w-[50%] p-[5%] ">
          <p className="paragraph text-justify text-textWhite leading-6 md:leading-8">
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
