import React from 'react'
import Image from "next/image";
export default function LoginToEym() {
  return (
    <div className='bg-[#FFFF44] flex flex-col items-center lg:pb-[27px] pb-[20px] border-black border-b-[1px]'>
        
      <p className='md:text-[32px] font-[400] text-[26px] w-[56%]  text-center md:leading-[38px] leading-[32px] lg:pt-[70px] pt-[44px] '>Join the family — sign up to our <br className='hidden sm:block' ></br>
       newsletter for updates on all things Eym.</p>
      
       <div className='lg:pt-[60px] pt-[44px]'>
       <button className='hover:bg-[#ff4] hover:text-black hover:font-[500] opacity-100 transition-[0.15s] ease-in pt-[12px] pb-[10px] px-[20px] bg-black rounded-[35px] text-[16px] font-[400] border-[1px] border-black text-white'>Sign up now</button>
       </div>
    </div>
  )
}
