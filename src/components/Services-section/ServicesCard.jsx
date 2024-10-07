import { useState } from "react";
import PropTypes from "prop-types";

const ServicesCard = (props) => {
  const [gradientStyle, setGradientStyle] = useState({});

  const handleMouseMove = (e) => {
    const { offsetX, offsetY, target } = e.nativeEvent;
    const { clientWidth, clientHeight } = target;

    const xPercent = (offsetX / clientWidth) * 100;
    const yPercent = (offsetY / clientHeight) * 100;

    let tintColor;
    if (props.bgColor.includes("bg-[#EBB4B6]")) {
      tintColor = "rgba(255, 105, 180, 0.3)";
    } else if (props.bgColor.includes("bg-[#D1F2EB]")) {
      tintColor = "rgba(70, 130, 180, 0.3)";
    } else {
      tintColor = "rgba(255, 126, 95, 0.3)";
    }

    setGradientStyle({
      background: `radial-gradient(circle at ${xPercent}% ${yPercent}%, ${tintColor}, rgba(255, 180, 123, 0.1))`,
    });
  };

  const handleMouseLeave = () => {
    setGradientStyle({});
  };

  return (
    <div
      className={
        props.bgColor +
        " rounded-xl cursor-pointer hover:scale-105 transition-all duration-500 relative border border-transparent hover:border-opacity-70"
      }
      style={{
        ...gradientStyle,
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        backgroundColor: "rgba(255, 255, 255, 0.15)",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
        transition: "background 0.2s ease-in-out",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex gap-4 p-8">
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
