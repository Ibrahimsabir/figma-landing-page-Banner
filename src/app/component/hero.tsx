import React from 'react'
import { Libre_Bodoni } from '@next/font/google';

const libre = Libre_Bodoni({
  subsets: ['latin'],
  weight: '400',
});

const Hero = () => {
  return (
    <div className={`${libre.className} mt-48 max-w-[1486px]`}>
      {/* Hero Section */}
      <div className=" w-[90%] flex md:justify-between items-center m-32 ">
        <div className=" w-1/2 flex flex-col justify-center items-start gap-7 px-12 m-auto">
          <h1 className="font-medium text-[40px] mb-2 leading-loose text-3xl md:text-5xl w-full md:h-40 md:w-[472px]">
            IMPECCABLE CRAFTSMANSHIP AND FINESSE
          </h1>
          <p className="text-[25px] w-[571px] text-start text-gray-700">
            An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.
          </p>
          <button className="md:w-[274px] text-[30px] bg-[#A29875] font-medium p-1 text-white rounded-lg">
            Explore Now
          </button>
        </div>

        {/* Image Section */}
        <div className='w-1/2 ml-32'>
        <div className='hidden w-[421px] h-[573px] md:flex justify-center items-center bg-cover bg-center box-border border-gray-300 rounded-tl-[6rem] border-2 rounded-br-[6rem]'
        style={{backgroundImage:`url('/images/hero.jfif')`}}> 
        {/* <Image
            src={"/images/hero.jfif"}
            alt="hero image"
            width={502}
            height={465}
            
          /> */}
          {/* Uncomment the Image component when the asset is available */}
          <div className="w-[400px] h-[525px] border-[3px] border-gray-200 rounded-tl-[6rem] rounded-br-[6rem] m-5">
          
       
          
          </div>
        </div>
      </div>
      </div>
      </div>
  
  );
};

export default Hero;
