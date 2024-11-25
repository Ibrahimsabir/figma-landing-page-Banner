import React from 'react';
import Image from 'next/image';
import { Libre_Bodoni } from '@next/font/google';

const libre = Libre_Bodoni({
  subsets: ['latin'],
  weight: '400',
});

const Hero = () => {
  return (
    <div className={`${libre.className} mt-48`}>
      {/* Hero Section */}
      <div className=" w-[90%] flex justify-between items-center m-32 ">
        <div className=" w-1/2 flex flex-col justify-center items-start gap-7 px-12 m-auto">
          <h1 className="font-bold text-[40px] mt-16 mr-16 leading-[164.5%] tracking-[0.025em] text-black text-start">
            IMPECCABLE CRAFTSMANSHIP AND FINESSE
          </h1>
          <p className="text-[25px] w-[571px] text-start text-gray-700">
            An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.
          </p>
          <button className="text-[30px] bg-[#A29875] w-[237px] h-[66px] p-1 text-white rounded-lg">
            Explore Now
          </button>
        </div>

        {/* Image Section */}
        <div className='w-1/2 ml-32'>
        <div className="w-[80%] "> 
        <Image
            src={"/images/hero.jfif"}
            alt="hero image"
            width={502}
            height={465}
            className='flex justify-center items-center w-[90%] h-90vh box-border border-gray-300 rounded-tl-[6rem] border-2 rounded-br-[6rem]'
          />
          {/* Uncomment the Image component when the asset is available */}
          {/* <div className="h-[647px] w-[462px] t-[196px] border-4 border-gray-200 rounded-tl-[6rem] rounded-br-[6rem] m-20"> */}
          
       
          
          </div>
        </div>
      </div>
      </div>
  
  );
};

export default Hero;
