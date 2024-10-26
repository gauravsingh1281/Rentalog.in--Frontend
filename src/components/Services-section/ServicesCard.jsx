import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import AOS from "aos";
import "aos/dist/aos.css";

const ServicesCard = (props) => {
  const [gradientStyle, setGradientStyle] = useState({});
  const [customStyle, setCustomStyle] = useState({
    border: `.2px solid #5c5c5c`,
  });

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

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
    setCustomStyle({
      border: `.2px solid #5c5c5c`,
    });
  };

  const handleMouseOver = () => {
    setCustomStyle({
      border: `.2px solid transparent`,
    });
  };

  return (
    <div data-aos={props.aos}>
      <div
        className={
          "bg-cover bg-bottom hover:bg-[right_top]  hover:shadow-[19px_29px_68px_rgba(49,13,2,0.38),_inset_-6px_-10px_12px_#262626,_inset_6px_10px_12px_#f5f2f2] transform-gpu perspective-1000 hover:rotate-x-6 hover:rotate-y-6 hover:scale-105 relative rounded-xl cursor-pointer"
        }
        style={{
          // ...gradientStyle,
          ...customStyle,
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          backgroundImage: `url(${props.bgImg})`,
          transition: "all 0.2s ease-in-out",
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseOver={handleMouseOver}
      >
        <div className="flex gap-4 p-8">
          <img className="w-10 h-10 mt-1.5" src={props.icon} alt={props.alt} />
          <h1
            className="text-black font-bold md:text-2xl text-xl"
            style={{ textShadow: "1px 1px 2.5px white" }}
          >
            {props.title}
          </h1>
        </div>
        <p
          className="px-8 pb-20 text-black font-semibold"
          style={{ textShadow: "1px 1px 2.5px white" }}
        >
          {props.description}
        </p>
      </div>
    </div>
  );
};

ServicesCard.propTypes = {
  bgColor: PropTypes.string.isRequired,
  bgImg: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ServicesCard;
