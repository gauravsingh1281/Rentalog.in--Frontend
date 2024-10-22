import { useEffect, useState } from "react";

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

import person01 from "../../assets/Images/person01.png";
import person02 from "../../assets/Images/person02.png";
import person03 from "../../assets/Images/person03.png";
import testimonialbg from "../../assets/Images/testimonialbg.png";

const slides = [
  {
    url: person01,
    name: "Deman",
    paragraph:
      "The platform is user-friendly with a clean design, but the loading times could be faster. Adding personalized content recommendations would enhance the overall experience. Great work so far!",
  },
  {
    url: person02,
    name: "Darla",
    paragraph:
      "I love the simplicity and ease of use on the site. However, it would be great to see quicker page load times and more interactive features, like real-time notifications. Keep up the good work!",
  },
  {
    url: person03,
    name: "Hedrik",
    paragraph:
      "The interface is intuitive and visually appealing. One suggestion would be to add a dark mode option for better accessibility during nighttime use. Overall, it's a solid platform with great potential!",
  },
];

const Testimonial = () => {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleRightSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [slide]);

  function handleRightSlide() {
    const isLastSlide = slide === slides.length - 1;
    const nextSlide = isLastSlide ? 0 : slide + 1;
    setSlide(nextSlide);
  }
  function handleLeftSlide() {
    const isFirstSlide = slide === 0;
    const newSlide = isFirstSlide ? slides.length - 1 : slide - 1;
    setSlide(newSlide);
  }

  function goToSlide(slideIndex) {
    setSlide(slideIndex);
  }
  return (
    <div
      className=" testimonial max-w-[1440px] h-[780px] m-auto py-16 px-4 relative group"
      style={{ backgroundImage: `url(${testimonialbg})` }}
    >
      <h2 className="text-4xl font-bold tracking-wider text-textWhite mb-[2rem] text-center font-monsterrat">
        Testimonials
      </h2>
      <div className="flex justify-center items-center gap-4 sm:gap-20">
        <div className="flex justify-center items-center w-40 h-40 sm:w-40 sm:h-40 rounded-full overflow-hidden py-3 bg-center bg-cover duration-500">
          <img
            src={slides[slide - 1 < 0 ? slides.length - 1 : slide - 1].url}
            alt="image"
            style={{ marginBottom: '0' }}   
             /* 
            Warning: A 60px margin is applied to all images in home.css, 
            causing layout issues. Remove if unnecessary, 
            or use overrides for specific components.
            That's what I did overrided specific components becouse I don't know it that home.css code is needed or not.
          */
          
          />
        </div>
        <div className="flex justify-center items-center w-56 h-56 sm:w-96 sm:h-96 rounded-full overflow-hidden py-3 bg-center bg-cover duration-500 hover:scale-110 cursor-pointer">
          <img src={slides[slide].url} alt="image" />
        </div>
        <div className="flex justify-center items-center w-40 h-40 sm:w-40 sm:h-40 rounded-full overflow-hidden py-3 bg-center bg-cover duration-500">
           <img src={slides[slide + 1 > slides.length - 1 ? 0 : slide + 1].url} alt="image" 
            style={{ marginBottom: '0' }} 
           />
        </div>

      </div>
      <div className="flex flex-col mx-auto w-[70%] justify-center text-center text-textWhite font-medium">
        <h2>{slides[slide].name}</h2>
        <p className="py-4">{slides[slide].paragraph}</p>
      </div>

      <div
        onClick={handleLeftSlide}
        className="lg:hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-textWhite cursor-pointer"
      >
        <BsChevronLeft size={30} />
      </div>
      <div
        onClick={handleRightSlide}
        className="md:block lg:hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-textWhite cursor-pointer"
      >
        <BsChevronRight size={30} />
      </div>
      <div className="flex justify-center items-center py-2">
        {slides.map((singleSlide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer flex justify-center items-center w-[1.5em]"
          >
            <RxDotFilled
              className={`${
                slideIndex === slide
                  ? "text-textWhite border-dashed border-[2px] rounded-full text-4xl animate-[spin_3s_linear_infinite] delay-100"
                  : "text-black"
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
