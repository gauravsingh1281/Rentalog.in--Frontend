import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const AboutCard = ({ image, heading, desc }) => {
  useEffect(()=>{

    AOS.init({duration:1000});
    
  },[]);

    return (
      <div className='flex justify-evenly md:justify-center h-[45vh]  gap-3 md:gap-20 overflow-x-hidden'>
        <div className='w-[40%] md:w-[30%] flex items-center h-full' data-aos = "fade-right"
        >
          <img src={image} className='h-auto md:h-full' />
        </div>
        <div className='w-[40%] flex flex-col justify-center gap-5' data-aos = "fade-left"
        >
          <div className='text-lg md:text-2xl font-bold '>{heading}</div>
          <div className='text-sm md:text-lg'>{desc}</div>
        </div>
      </div>
    );
  }
  const AboutCard2 = ({ image, heading, desc }) => {
    useEffect(()=>{

      AOS.init({duration:1000});
      
    },[]);
    return (
      <div className='flex justify-evenly md:justify-center h-[45vh]  gap-3 md:gap-20 overflow-x-hidden'>
        <div className='w-[40%] flex flex-col justify-center gap-2 md:gap-5' data-aos = "fade-right"
        >
          <div className='text-lg md:text-2xl font-bold '>{heading}</div>
          <div className='text-sm md:text-lg'>{desc}</div>
        </div>
        <div className='w-[40%] md:w-[30%] flex items-center h-full' data-aos = "fade-left"
        >
          <img src={image} className='h-auto md:h-full' />
        </div>
      </div>
    );
  }

  export { AboutCard, AboutCard2 };