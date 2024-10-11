import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const AboutCard = ({ image, heading, desc }) => {
  useEffect(()=>{

    AOS.init({duration:1000});
    
  },[]);

    return (
      <div className='flex justify-center h-[45vh] gap-20 overflow-x-hidden'>
        <div className='w-[30%]' data-aos = "fade-right"
        >
          <img src={image} className='h-full' />
        </div>
        <div className='w-[40%] flex flex-col justify-center gap-5' data-aos = "fade-left"
        >
          <div className='text-2xl font-bold '>{heading}</div>
          <div className='text-lg'>{desc}</div>
        </div>
      </div>
    );
  }
  const AboutCard2 = ({ image, heading, desc }) => {
    useEffect(()=>{

      AOS.init({duration:1000});
      
    },[]);
    return (
      <div className='flex justify-center h-[45vh] gap-20 overflow-x-hidden'>
  
        <div className='w-[40%] flex flex-col justify-center gap-5' data-aos = "fade-right"
        >
          <div className='text-2xl font-bold '>{heading}</div>
          <div className='text-lg'>{desc}</div>
        </div>
        <div className='w-[30%]' data-aos = "fade-left"
        >
          <img src={image} className='h-full' />
        </div>
      </div>
    );
  }

  export { AboutCard, AboutCard2 };