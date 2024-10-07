const AboutCard = ({ image, heading, desc }) => {

    return (
      <div className='flex justify-center h-[45vh] gap-20 overflow-x-hidden'>
        <div className='w-[30%]'
        >
          <img src={image} className='h-full' />
        </div>
        <div className='w-[40%] flex flex-col justify-center gap-5'
        >
          <div className='text-2xl font-bold '>{heading}</div>
          <div className='text-lg'>{desc}</div>
        </div>
      </div>
    );
  }
  const AboutCard2 = ({ image, heading, desc }) => {
    return (
      <div className='flex justify-center h-[45vh] gap-20 overflow-x-hidden'>
  
        <div className='w-[40%] flex flex-col justify-center gap-5'
        >
          <div className='text-2xl font-bold '>{heading}</div>
          <div className='text-lg'>{desc}</div>
        </div>
        <div className='w-[30%]'
        >
          <img src={image} className='h-full' />
        </div>
      </div>
    );
  }

  export { AboutCard, AboutCard2 };