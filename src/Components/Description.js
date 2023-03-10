import React from 'react'
import Image from "next/image";
import IconLeaf from "../../public/Assets/IconLeaf.png"
import IconTube from "../../public/Assets/IconTube.png"
import IconHeart from "../../public/Assets/IconHeart.png"
export default function Description() {
  return (
    <div className='bg-[#f7f1e8] border-black border-b-[1px] pb-7'>
      <p className="lg:h-[140px] h-0 lg:pl-[1.8rem] pl-[1.4rem] lg:pb-[3rem] pb-[95px] lg:pt-[1.6rem] pt-[1rem] text-[1.3rem]">Our philosophy</p>
       
       <div className='flex lg:flex-row  flex-col lg:justify-center lg:gap-[70px] gap-[0px] lg:w-[94%] w-[100%]'>
           
           <div className=' pl-[1.3rem]  border-black border-b-[1px] lg:border-0'>
            <Image src={IconLeaf} alt="div" />
            <p className='text-[1.1rem]  pt-[23px] lg:pt-[36px] lg:h-[73px] h-[55px]'>1.&nbsp; Only 100% natural fragrance <br></br></p>
            <p className='text-[1.1rem] mb-[20px] lg:mb-0 sm:w-[100%] w-[94%]'>No chemicals, no scent boosters <br className='hidden lg:block'></br> 
             and  binders. Just pure essential <br className='hidden lg:block'></br> oils.</p>
           </div>
           <div className=' pl-[1.3rem] border-black border-b-[1px] lg:border-0'>
            <Image className='mt-[51px] lg:mt-0' src={IconTube} alt="div" />
            <p className='text-[1.1rem]  lg:pt-[36px] pt-[23px] lg:h-[73px] h-[55px]'>2.&nbsp;The power of natural perfume<br></br></p>
            <p className='text-[1.1rem]  mb-[20px] lg:mb-0'>Botanical based perfumes <br className='hidden lg:block'></br>
                 perfected to bring both  emotional <br className='hidden lg:block'></br> 
                 and physical healing properties.</p>
           </div>
           <div className=' pl-[1.3rem] border-black border-b-[1px] lg:border-0'>
            <Image className='mt-[18px] lg:mt-0' src={IconHeart} alt="div" />
            <p className='text-[1.1rem] pt-[23px] lg:pt-[36px] lg:h-[73px] h-[55px]'>3.&nbsp; Created consciously<br></br></p>
            <p className='text-[1.1rem]  mb-[20px] lg:mb-0'>Sustainably sourced ingredients, <br className='hidden lg:block'></br>
             fragrance and packaging, always. <br className='hidden lg:block'></br>
              Proudly British made.</p>
           </div>

       </div>

    </div>
  )
}
