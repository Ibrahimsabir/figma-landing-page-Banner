import React from 'react';
import Link from 'next/link';
import { Rye } from '@next/font/google';

const rye = Rye({
  subsets: ['latin'],
  weight: ['400'],
});

const Header = () => {
  return (
    <div className={`${rye.className}`}>
      <div className="w-full h-[80px] md:h-[134px] bg-[#A29875] text-white flex items-center px-4 md:px-8">
        <h1 className="text-[36px] md:text-[75px] leading-tight font-normal">
          <Link href="/">
            <span>MANZARRI</span>
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default Header;
