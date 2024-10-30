import ServicesCard from "./ServicesCard";
import ourServices from "./services";
import ServicesAvailableIn from "./ServicesAvailableIn";
import placeName from "./placeName";
import "./Services-section.css";
import none from "../../assets/Images/none.png";
import React, { useState } from 'react';

const Services = () => {
  const [bgImage, setBgImage] = useState('white');
  const [imageUrl, setImageUrl] = useState(null);
  const [currPlace, setCurrPlace] = useState("");

  return (
    <>
      <div id="Service"></div>
      <h1 className="text-4xl md:text-5xl font-semibold text-[#312F2F] text-center pt-10">
        Our Services Include
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-10 md:mx-24 lg:mx-36 sm:mx-24 mx-8">
        {ourServices.map(({ id, bgColor,bgImg, title, description, icon, alt , aos }) => {
          return (
            <div
              key={id}
              className={`rounded-xl p-6 shadow-md transition-all transform hover:scale-105 hover:shadow-lg`}
              style={{ backgroundColor: bgColor }}
            >
              <ServicesCard
                title={title}
                bgColor={bgColor}
                bgImg={bgImg}
                icon={icon}
                alt={alt}
                description={description}
                aos={aos}
              />
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
            // textShadow: bgImage === 'white' ? '0 0 0px #000000' : '0 0 5px #ffffff',
            color: bgImage === 'white' ? '#000000' : '#ffffff',
            transition: 'all 0.5s ease-in-out',
          }}
        >
          Our Services are available in
        </h1>
        <h2 className="text-textWhite font-semibold w-full text-center h-9 text-4xl"
          style={{
            opacity: bgImage === 'white' ? 0 : 1,
            // textShadow: '0 0 5px #ffffff',
            transition: 'opacity 0.5s ease-in-out',
          }}
        >
          {currPlace}
        </h2>
        <div className="flex justify-center gap-9 items-start flex-col pb-14 px-10 md:flex-row">
          {placeName.map(({ id, name, image, blurImage, mt }) => {
            return (
              <div
                key={id}
                className="transition-transform transform hover:scale-105 cursor-pointer"
                onMouseEnter={() => {
                  setBgImage('blurImage'); //passes blurred image
                  setImageUrl(blurImage);  //passes url of blurred image
                  setCurrPlace(name);
                }}
              >
                <ServicesAvailableIn
                  placeName={name}
                  placeImage={image}
                  placeBlurImage={blurImage} //new prop for passing blur image
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
