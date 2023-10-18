import { useState } from "react"

import { BsChevronLeft, BsChevronRight, } from "react-icons/bs"
import { RxDotFilled } from "react-icons/rx"

import person01 from "../../assets/Images/person01.png"
import person02 from "../../assets/Images/person02.png"
import person03 from "../../assets/Images/person03.png"
import testimonialbg from '../../assets/Images/testimonialbg.png'
const slides = [
    {
        url: person01,
        name: "Deman",
        paragraph: "some dummy testimonials can be writteen here.some dummy testimonials can be writteen here.some dummy testimonials can be writteen here.some dummy testimonials can be writteen here."
    },
    {
        url: person02,
        name: "Darla",
        paragraph: "some dummy testimonials can be writteen here.some dummy testimonials can be writteen here.some dummy testimonials can be writteen here.some dummy testimonials can be writteen here."

    },
    {
        url: person03,
        name: "Hedrik",
        paragraph: "some dummy testimonials can be writteen here.some dummy testimonials can be writteen here.some dummy testimonials can be writteen here.some dummy testimonials can be writteen here."

    }
]

const Testimonial = () => {
    const [slide, setSlide] = useState(0)

    function handleRightSlide() {
        const isLastSlide = slide === slides.length - 1;
        const nextSlide = isLastSlide ? 0 : slide + 1;
        setSlide(nextSlide)
    }
    function handleLeftSlide() {
        const isFirstSlide = slide === 0;
        const newSlide = isFirstSlide ? slides.length - 1 : slide - 1;
        setSlide(newSlide)
    }

    function goToSlide(slideIndex) {
        
        setSlide(slideIndex)
        
    }
    return (

        <div className=" testimonial max-w-[1440px] h-[780px] m-auto py-16 px-4 relative group" style={{ backgroundImage: `url(${testimonialbg})` }}>
            <h2 className="text-4xl font-bold tracking-wider text-textWhite mb-[2rem] text-center font-monsterrat">
                Testimonials
            </h2>
            <div className="flex justify-center items-center gap-4 sm:gap-20">
            <div className="flex justify-center items-center w-40 h-40 sm:w-40 sm:h-40 rounded-full overflow-hidden py-3 bg-center bg-cover duration-500">
                <img src={slides[(slide-1<0)?slides.length-1:slide-1].url} alt="image" />

            </div>
            <div className="flex justify-center items-center w-72 h-72 sm:w-96 sm:h-96 rounded-full overflow-hidden py-3 bg-center bg-cover duration-500">
                <img src={slides[slide].url} alt="image" />

            </div>
            <div className="flex justify-center items-center w-40 h-40 sm:w-40 sm:h-40 rounded-full overflow-hidden py-3 bg-center bg-cover duration-500">
                <img src={slides[(slide+1>slides.length-1)?0:slide+1].url} alt="image" />

            </div>
            </div>
            <div className="flex flex-col mx-auto w-[70%] justify-center text-center text-textWhite font-medium">
                <small>{slides[slide].name}</small>
                <p className="py-4">{slides[slide].paragraph}</p>
            </div>

            <div onClick={handleLeftSlide} className="lg:hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-textWhite cursor-pointer">
                <BsChevronLeft size={30} />
            </div>
            <div onClick={handleRightSlide} className="md:block lg:hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-textWhite cursor-pointer">
                <BsChevronRight size={30} />
            </div >
            <div className='flex top-4 justify-center py-2'>
                {slides.map((singleSlide, slideIndex) => (
                    <div
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                        className='text-2xl cursor-pointer'
                    >
                        <RxDotFilled className={`${slideIndex === slide ? 'text-textWhite border-dashed border-[2px] rounded-full text-4xl animate-[spin_3s_linear_infinite] delay-100' : 'text-black'}`} />
                    </div>
                ))}
            </div>
        </div>

    )
}

export default Testimonial