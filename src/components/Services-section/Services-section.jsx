import ServicesCard from "./ServicesCard";
import ourServices from "./services";
import ServicesAvailableIn from "./ServicesAvailableIn";
import placeName from "./placeName";
import { Link } from "react-router-dom"; 
import "./Services-section.css"; // Ensure your CSS file is imported
import none from "../../assets/Images/none.png";
import React, { useState } from 'react';

const Services = () => {
  const [bgImage, setBgImage] = useState('white');
  const [imageUrl, setImageUrl] = useState(null);
  const [currPlace, setCurrPlace] = useState("");
  const [hoveredCardId, setHoveredCardId] = useState(null); // State to track hovered card

  return (
    <>
      <div id="Service"></div>
      <h1 className="text-4xl md:text-5xl font-semibold text-[#312F2F] text-center pt-10">
        Our Services Include
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-10 md:mx-24 lg:mx-36 sm:mx-24 mx-8">
        {ourServices.map(({ id, bgColor, title, description, icon, alt, aos }, index) => {
          // Determine the background color based on hover state
          const isHovered = hoveredCardId === id;
          const cardBgColor = isHovered ? 'rgba(200, 200, 200, 0.5)' : bgColor;

          return (
            <div
              key={id}
              className={`service-card rounded-xl shadow-md border-2 border-gray-300 transition-all transform hover:scale-105 hover:shadow-lg`} 
              style={{ backgroundColor: cardBgColor }} // Set the background color based on hover state
              onMouseEnter={() => setHoveredCardId(id)} // Set hovered card id on mouse enter
              onMouseLeave={() => setHoveredCardId(isHovered ? id : null)} // Reset hovered card id on mouse leave
            >
              {index === 2 ? ( 
                // Rent Calculation Card
                <Link to="/dashboard/rentcalculation" className="flex flex-col justify-center h-full text-black no-underline p-6"> 
                  <h2 className="text-2xl font-bold mb-4 text-center">Rent Calculation</h2>
                  <p className="text-center">Calculate the total rent based on amount and number of tenants.</p>
                </Link>
              ) : (
                <ServicesCard
                  title={title}
                  bgColor={cardBgColor}
                  icon={icon}
                  alt={alt}
                  description={description}
                  aos={aos}
                />
              )}
            </div>
          );
        })}
      </div>
      <div className="my-20 mb-0 rounded-3xl shadow-lg transition-all ease-in-out duration-500 hover:shadow-2xl"
        style={{
          backgroundImage: bgImage === 'white' ? `url(${none})` : `url(${imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: 'background-image 0.5s ease-in-out',
        }}
        onMouseLeave={() => setBgImage('white')}
      >
        <h1 className="text-3xl md:text-4xl text-center py-10 font-[700]"
          style={{
            textShadow: bgImage === 'white' ? '0 0 0px #000000' : '0 0 5px #ffffff',
            color: bgImage === 'white' ? '#000000' : '#ffffff',
            transition: 'all 0.5s ease-in-out',
          }}
        >
          Our Services are available in
        </h1>
        <h2 className="text-textWhite font-semibold w-full text-center h-9 text-4xl"
          style={{
            opacity: bgImage === 'white' ? 0 : 1,
            textShadow: '0 0 5px #ffffff',
            transition: 'opacity 0.5s ease-in-out',
          }}
        >
          {currPlace}
        </h2>
        <div className="flex justify-center gap-9 items-center flex-col pb-14 px-10 md:flex-row">
          {placeName.map(({ id, name, image, mt }) => {
            return (
              <div
                key={id}
                className="transition-transform transform hover:scale-105 cursor-pointer"
                onMouseEnter={() => {
                  setBgImage('image');
                  setImageUrl(image);
                  setCurrPlace(name);
                }}
              >
                <ServicesAvailableIn
                  placeName={name}
                  placeImage={image}
                  mt={mt}
                  setBgImage={setBgImage}
                  setImageUrl={setImageUrl}
                  setCurrPlace={setCurrPlace}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Services;
