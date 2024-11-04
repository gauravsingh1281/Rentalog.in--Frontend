import React from "react";
import Slider from "react-slick";
import ServicesAvailableIn from "./ServicesAvailableIn"; 
import placeName from "./placeName"; 

const ServicesCarousel = ({ setBgImage, setImageUrl, setCurrPlace }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <Slider {...settings}>
      {placeName.map((place) => (
        <div key={place.id}>
          <ServicesAvailableIn
            placeName={place.name}
            placeImage={place.image}
            placeBlurImage={place.blurImage}
            mt={place.mt}
            setBgImage={setBgImage}
            setImageUrl={setImageUrl}
            setCurrPlace={setCurrPlace}
          />
        </div>
      ))}
    </Slider>
  );
};

export default ServicesCarousel;
