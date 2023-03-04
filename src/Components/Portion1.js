import React from "react";
import Image from "next/image";
import Women from "../../public/Assets/Women.png";
export default function Portion1() {
  return (
    <div>
      <div className="bg-[#F5EEE3] pl-[1.6rem] pb-[4rem] pt-[1.6rem] text-[1.3rem] w-[100%]">
        <p className="font-[400] leading-[23px]">
          Our 100% natural fragrance has been perfected over <br></br> years to
          bring both emotional and physical healing <br></br> properties.
          Powered by aromatherapy.
        </p>
      </div>
      <div className="flex justify-centre w-[100%] border-black border-t-[1px] border-b-[1px]">
        {/* Text div */}
        <div className="bg-[#C5A9B3] border-r border-black w-[50%] flex flex-col justify-center items-center">
          <h2 className="text-black  text-[2rem] leading-[40px] text-center h-24">
            {" "}
            Eym + <br></br>
            Lucy Williams
          </h2>
          <p className="text-black text-[17px] text-center  leading-[23px]    font-[400] h-auto">
            Murano-glass, refillable candles.<br></br>
            Designed with Lucy Willliams to be burnt,<br></br>
            refilled and kept forever.
          </p>
          <button className="hover:bg-[#ff4] hover:text-black transition-[0.15s] ease-in  text-[1.1rem]  pt-[8px] pb-[8px] px-[18px] rounded-[35px] text-white cursor-pointer border border-black bg-black">
            Shop the collection
          </button>
        </div>

        {/* Image div */}
        <div className="w-[50%] h-[205px]">
          <Image className=" " height={100} width={700} src={Women} alt="div" />
        </div>
      </div>
    </div>
  );
}
