import React from "react";
import Image from "next/image";
import Women from "../../public/Assets/Women.png";
export default function Portion1() {
  return (
    <div>
      <div className="bg-[#F5EEE3]  md:pl-[1.6rem] pl-[22px] lg:pb-[4rem]  h-[130px] lg:h-[185px] lg:pt-[1.7rem] pt-[1.4rem] text-[1.3rem]  w-[100%]">
        <p className="font-[400] leading-[23px]">
          Our 100% natural fragrance has been perfected over <br className="hidden lg:block"></br> years to
          bring both emotional and physical healing <br className="hidden lg:block"></br> properties.
          Powered by aromatherapy.
        </p>
      </div>
<div className="flex  lg:flex-row flex-col     border-black border-t-[1px] border-b-[1px]">

<div className="bg-[#C5A9B3] lg:w-[50%] w-[100%] pb-[20px]  lg:pb-0 pt-[17px] lg:pt-0 lg:border-r-[1px] border-b-[1px] lg:border-b-0 border-black flex flex-col items-center text-center justify-center">
   <h2 className="md:text-[32px] text-[30px] font-[400]   h-24 leading-[36px] ">
   Eym +  <br></br>
Lucy Williams
   </h2>
   <p className="text-[17px] font[400] leading-[23px] lg:h-[102px] sm:h-[90px]">
    Murano-glass, refillable candles. <br></br>
Designed with Lucy Willliams to be burnt,<br></br>
refilled and kept forever.
   </p>
   <button className='hover:bg-[#ff4] mt-[20px] sm:mt-0 hover:text-black transition-[0.15s] ease-in text-[1.1rem]  pt-[8px] pb-[8px] px-[18px] rounded-[35px] text-white cursor-pointer border border-black bg-black'>Shop the collection</button>

</div>

<div className="hidden sm:block lg:w-[50%] w-[100%] border-black border-b-[1px] lg:border-b-0">
<Image  className=' lg:h-[500px] sm:h-[250px]' src={Women} alt='div' /> 
</div>
</div>
    </div>
  );
}
