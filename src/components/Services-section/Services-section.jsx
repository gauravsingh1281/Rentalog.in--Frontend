import ServicesCard from "./ServicesCard";
import ourServices from "./services";
import ServicesAvailableIn from "./ServicesAvailableIn";
import placeName from "./placeName";
import "./Services-section.css";
import none from "../../assets/Images/none.png"
import React, { useState } from 'react';

const Services = () => {

  const [bgImage, setBgImage] = useState('white');
  const [imageUrl, setImageUrl] = useState(null);
  const [currPlace, setCurrPlace] = useState("")

  return (
    <>
      <div id="Service"></div>
      <h1 className=" text-4xl md:text-5xl font-semibold text-[#312F2F] text-center pt-10">
        Our Services Include
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-10 md:mx-24 lg:mx-36 sm:mx-24 mx-8">
        {ourServices.map(({ id, bgColor, title, description, icon, alt }) => {
          return (
            <ServicesCard
              title={title}
              key={id}
              bgColor={bgColor}
              icon={icon}
              alt={alt}
              description={description}
            />
          );
        })}
      </div>
      <div className=" my-20 mb-0 rounded-3xl"
        style={{
          backgroundImage: bgImage === 'white' ? `url(${none})` : `url(${imageUrl})`, // handle background image
          backgroundSize: 'cover', // ensures the image covers the whole div
          backgroundPosition: 'center',
          transition: 'background-image 0.2s ease-in-out',
        }}
        onMouseLeave={() => setBgImage('white')}
      >
        <h1 className="text-3xl md:text-4xl text-center py-10 font-[700]"
          style={{
            textShadow: bgImage === 'white' ? '0 0 0px #000000' : '0 0 5px #ffffff',
            color: bgImage === 'white' ? '#000000' : '#ffffff',
            transition: 'all 0.2s ease-in-out'

          }}>
          Our Services are available in
        </h1>
        <h2 className="text-textWhite font-semibold w-full text-center h-9 text-4xl" style={{ opacity: bgImage === 'white' ? 0 : 1, textShadow : '0 0 5px #ffffff'}}>
          {currPlace}
        </h2>
        <div className="flex justify-center gap-9 items-start flex-col pb-14 px-10 md:flex-row">
          {placeName.map(({ id, name, image, mt }) => {
            return (
              <ServicesAvailableIn
                placeName={name}
                key={id}
                placeImage={image}
                mt={mt}
                setBgImage={setBgImage}
                setImageUrl={setImageUrl}
                setCurrPlace={setCurrPlace}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Services;
