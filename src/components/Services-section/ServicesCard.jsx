import { useState } from "react";
import PropTypes from "prop-types";

const ServicesCard = (props) => {
  const [gradientStyle, setGradientStyle] = useState({});

  // Function to calculate the gradient based on mouse position
  const handleMouseMove = (e) => {
    const { offsetX, offsetY, target } = e.nativeEvent;
    const { clientWidth, clientHeight } = target;

    // Calculate percentage position of the mouse within the card
    const xPercent = (offsetX / clientWidth) * 100;
    const yPercent = (offsetY / clientHeight) * 100;

    // Set the background gradient based on mouse position
    setGradientStyle({
      background: `radial-gradient(circle at ${xPercent}% ${yPercent}%, #ff7e5f, #feb47b)`,
    });
  };

  // Reset the gradient when the mouse leaves the card
  const handleMouseLeave = () => {
    setGradientStyle({});
  };

  return (
    <div
      className={
        props.bgColor +
        " rounded-xl cursor-pointer hover:scale-105 hover:shadow-lg transition duration-300 relative"
      }
      style={gradientStyle}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex gap-4 p-8 ">
        <img className="w-10 h-10 mt-1.5" src={props.icon} alt={props.alt} />
        <h1 className="text-[#312F2F] font-bold md:text-2xl text-xl">
          {props.title}
        </h1>
      </div>
      <p className="px-8 pb-20">{props.description}</p>
    </div>
  );
};

ServicesCard.propTypes = {
  bgColor: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ServicesCard;
