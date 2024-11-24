import React from 'react'
import Link from 'next/link';
import {Rye} from '@next/font/google';

const rye=Rye({
    subsets:["latin"],
    weight:["400"]
})
const Header = () => {
  return (
    <div className={`${rye.className}`}>
        <div className="absolute w-[1920px] h-[134px] left-0 top-0 bg-[#A29875] text-white">
        <h1
          className="absolute w-[439px] h-[94px] left-[calc(50%-439px/2-704.5px)] top-[20px] 
         text-[75px] leading-[94px] font-normal"
        >
          <Link href="/">
            <span>MANZARRI</span>
          </Link>
        </h1>
      </div>
    </div>
  )
}

export default Header