import React from 'react'
import Image from 'next/image'
import Hero from "../../public/Assets/Hero.png" 

export default function Header() {
  return (
      <div className=''>
      
       
            <div className='flex lg:flex-row flex-col-reverse justify-centre w-[100%] border-b-[1px] border-black'>
             <div className='lg:w-[50%] w-[100%]'>
            <Image className=' lg:h-[500px] sm:h-[250px]  h-[170px]' src={Hero} alt='div' /> 
             </div>
             <div className='bg-[#F5EEE3] border-black border-b-[1px] lg:border-none lg:w-[50%] w[100%] pb-[20px] lg:pb-0 flex flex-col justify-center items-center'>
                 <p className='text-black font-[400] text-[21px] lg:h-[45px] h-[50px] pt-[13px] lg:pt-0'>Eden, the blissful one.</p>
                 <p className='text-center sm:text-start text-black text-[17px] font-[400] lg:h-14 sm:h-[45px]'>Our newest sell-out fragrance is back in stock baby!</p>
                  <button className='hover:bg-[#ff4] mt-[20px] sm:mt-0 hover:text-black transition-[0.15s] ease-in text-[1.1rem]  pt-[8px] pb-[8px] px-[18px] rounded-[35px] text-white cursor-pointer border border-black bg-black'>Shop Eden</button>
             </div>
            </div>
      </div>
  );
}
