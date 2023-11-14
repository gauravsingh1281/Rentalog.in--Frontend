/* eslint-disable no-unused-vars */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import "./Testimonial.css";
import person01 from "../../assets/Images/person01.png";
import person02 from "../../assets/Images/person02.png";
import person03 from "../../assets/Images/person03.png";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const slides = [
  {
    url: person01,
    name: "Deman",
    paragraph:
      "some dummy testimonials can be written here.some dummy testimonials can be written here.some dummy testimonials can be written here.some dummy testimonials can be written here.",
  },
  {
    url: person02,
    name: "Darla",
    paragraph:
      "some dummy testimonials can be written here.some dummy testimonials can be written here.some dummy testimonials can be written here.some dummy testimonials can be written here.",
  },
  {
    url: person03,
    name: "Hedrik",
    paragraph:
      "some dummy testimonials can be written here.some dummy testimonials can be written here.some dummy testimonials can be written here.some dummy testimonials can be written here.",
  },
];

const Testimonial = () => {

  return (
    <>
    <h1 className="text-5xl font-bold tracking-wider text-text-black font-monsterrat text-center">
      Testimonials
        </h1>
    <Swiper
      className='swiper'
      modules={[Autoplay, Pagination, Navigation]}
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      speed={1000}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true
      }}
      navigation={true}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {slides.map((item, index) => (
        <SwiperSlide key={index} className="swiper-slide">
          <div className="swiper-slide">
            <img src={item.url} alt="image" />
          </div>
          <div className="swiper-slide">
            <h4>{item.name}</h4>
            <p>{item.paragraph}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    </>
  );
}

export default Testimonial;
