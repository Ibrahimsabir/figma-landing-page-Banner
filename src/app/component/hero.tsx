import React from 'react';
import { Libre_Bodoni } from '@next/font/google';

const libre = Libre_Bodoni({
  subsets: ['latin'],
  weight: '400',
});

const Hero = () => {
  return (
    <div className={`${libre.className} mt-12 md:mt-48 max-w-full`}>
      {/* Hero Section */}
      <div className="w-[90%] flex flex-col md:flex-row justify-between items-center mx-auto gap-12 md:gap-0">
        {/* Text Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start gap-7 px-4 md:px-12 text-center md:text-left">
          <h1 className="font-medium text-3xl md:text-5xl leading-[1.2]">
            IMPECCABLE CRAFTSMANSHIP AND FINESSE
          </h1>
          <p className="text-base md:text-lg text-gray-700">
            An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.
          </p>
          <button className="w-[200px] md:w-[274px] text-sm md:text-lg bg-[#A29875] font-medium py-2 px-4 text-white rounded-lg">
            Explore Now
          </button>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div
            className="w-[280px] h-[380px] md:w-[421px] md:h-[573px] flex justify-center items-center bg-cover bg-center box-border border-gray-300 rounded-tl-[3rem] md:rounded-tl-[6rem] border-2 rounded-br-[3rem] md:rounded-br-[6rem]"
            style={{ backgroundImage: `url('/images/hero.jfif')` }}
          >
            {/* Inner border for decoration */}
            <div className="w-[260px] h-[360px] md:w-[400px] md:h-[525px] border-[3px] border-gray-200 rounded-tl-[3rem] md:rounded-tl-[6rem] rounded-br-[3rem] md:rounded-br-[6rem] m-5"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
