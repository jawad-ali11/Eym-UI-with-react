import React from 'react'
import Image from "next/image";
import Eym1 from "../../public/Assets/Eym1.png"
import Eym2 from "../../public/Assets/Eym2.png"
import Eym3 from "../../public/Assets/Eym3.png"
import Eym4 from "../../public/Assets/Eym4.png"
export default function EymInHands() {
  return (
    <div className='bg-[#f7f1e8] pt-[30px] border-black border-b-[1px] pb-[30px]'>
          <p className='font-[500] text-[16px] h-[140px] pl-[1.6rem]'>Share your journey #eymnaturals</p>
          <p className='font-[400] text-[20px] lg:h-[60px] h-[45px] cursor-pointer hover:opacity-40 transition-[0.65s] ease-in-out pl-[1.6rem]'>Follow us @eymnaturals</p>
        
            <div className='cursor-pointer  grid lg:grid-cols-4 grid-cols-2 lg:gap-[28px] gap-[20px] w-[98%]  pl-[1.6rem]'>
                 <Image className='w-[100%]' src={Eym1} alt="div" />
                 <Image className='w-[100%]' src={Eym2} alt="div" />
                 <Image className='w-[100%]' src={Eym3} alt="div" />
                 <Image className='w-[100%]' src={Eym4} alt="div" />
            </div>     
          
    </div>
  )
}
