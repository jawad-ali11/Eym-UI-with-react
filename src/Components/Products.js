import React from "react";
import Image from "next/image";
import Product1 from "/public/Assets/Product1.png";
import Product1Hover from "/public/Assets/Product1Hover.webp";
import Product2 from "../../public/Assets/Product2.png"
import Product2Hover from "/public/Assets/Product2Hover.webp";
import Product3 from "../../public/Assets/Product3.png"
import Product3Hover from "../../public/Assets/Product3Hover.webp"
export default function Products() {
  return (
    <div className="bg-[#f7f1e8]  lg:h-[825px] h-[4200px]  border-b-[1px] border-black">
      <p className=" pl-[1.6rem] lg:pb-[3rem] lg:pt-[1.6rem] sm:pt-[0.9rem] sm:pb-[1.6rem] text-[1.3rem]">
        Shop collection
      </p>
      <div className="grid lg:grid-cols-4 grid-cols-1  lg:gap-[27px] md:gap-[960px] sm:gap-[755px] w-[95%] h-[84%] justify-center m-auto ">
        <div className="cursor-pointer  relative  group  ">
          <div className="relative ">
            <div className="  absolute  inset-0  hover:hidden ">
              <Image className="w-[100%]" src={Product1} alt="div" />
            </div>
            <div className="bg-[#F7F1E8] font-[400] absolute    top-0 left-0  text-[11px] rounded-[5px]   border-[1px] py-[5px] px-2 mt-[15px] ml-[14.5px] group-hover:hidden">
              Top Rated: 5 / 5
            </div>
          </div>
          <div className="   hidden absolute inset-0   group-hover:block">
            <Image className=" hover:border-black hover:border-[1px]" src={Product1Hover} alt="div" />
          </div>
          <div className=" group-hover:hidden absolute  lg:top-[240px] md:top-[850px] top-[620px]">
            <p className="text-[18.55px] font-[400]">Eym + Lucy Williams</p>
             <p className="text-[17px] font-[400] opacity-40">
            Refillable candle (Rest) <br></br>
            £150.00
            </p>
          </div>
          <div className=" absolute hidden group-hover:block lg:top-[240px] md:top-[850px]">
          <p className=" text-[17px] font-[500]">
             Shop now
          </p>
        </div>

        </div>

        <div className="cursor-pointer  relative  group ">
          <div className="relative">
            <div className="  absolute  inset-0  hover:hidden ">
              <Image className="sm:w-[100%] lg:w-auto" src={Product2} alt="div" />
            </div>
            <div className="bg-[#F7F1E8] font-[400] absolute    top-0 left-0  text-[11px] rounded-[5px]   border-[1px] py-[5px] px-2 mt-[15px] ml-[14.5px] group-hover:hidden">
              Top Rated: 5 / 5
            </div>
          </div>
          <div className="  hidden absolute inset-0   group-hover:block">
            <Image className="hover:border-black hover:border-[1px]" src={Product2Hover} alt="div" />
          </div>
          <div className=" group-hover:hidden absolute  lg:top-[240px] md:top-[850px] top-[620px]">
            <p className="text-[18.55px] font-[400]">Eym + Lucy Williams</p>
             <p className="text-[17px] font-[400] opacity-40">
            Refillable candle (Eden) <br></br>
            £150.00
            </p>
          </div>
          <div className=" absolute hidden group-hover:block lg:top-[240px] md:top-[850px] top-[620px]">
          <p className=" text-[17px] font-[500]">
             Shop now
          </p>
        </div>

        </div>

        <div className="cursor-pointer  relative  group ">
          <div className="relative">
            <div className="  absolute  inset-0  hover:hidden ">
              <Image className="sm:w-[100%] lg:w-auto" src={Product3} alt="div" />
            </div>
            <div className="bg-[#F7F1E8] font-[400] absolute    top-0 left-0  text-[11px] rounded-[5px]   border-[1px] py-[5px] px-2 mt-[15px] ml-[14.5px] group-hover:hidden">
              Top Rated: 5 / 5
            </div>
          </div>
          <div className="   hidden absolute inset-0   group-hover:block">
            <Image  className="hover:border-black hover:border-[1px]" src={Product3Hover} alt="div" />
          </div>
          <div className=" group-hover:hidden absolute  lg:top-[240px] md:top-[850px] top-[620px]">
            <p className="text-[18.55px] font-[400]">Eden</p>
             <p className="text-[17px] font-[400] opacity-40">
             Candle refill<br></br>
             £45.00
            </p>
          </div>
          <div className=" absolute hidden group-hover:block lg:top-[240px] md:top-[850px] top-[620px]">
          <p className=" text-[17px] font-[500]">
             Shop now
          </p>
        </div>

        </div>

        <div className="cursor-pointer  relative  group ">
          <div className="relative">
            <div className=" absolute  inset-0  hover:hidden ">
              <Image className="sm:w-[100%] lg:w-auto" src={Product3} alt="div" />
            </div>
            <div className="bg-[#F7F1E8] font-[400] absolute    top-0 left-0  text-[11px] rounded-[5px]   border-[1px] py-[5px] px-2 mt-[15px] ml-[14.5px] group-hover:hidden">
              Top Rated: 5 / 5
            </div>
          </div>
          <div className="   hidden absolute inset-0   group-hover:block">
            <Image className="hover:border-black hover:border-[1px]" src={Product3Hover} alt="div" />
          </div>
          <div className=" group-hover:hidden absolute lg:top-[240px] md:top-[850px] top-[620px]">
            <p className="text-[18.55px] font-[400]">Rest</p>
             <p className="text-[17px] font-[400] opacity-40">
             Candle refill<br></br>
             £45.00
            </p>
          </div>
          <div className=" absolute hidden group-hover:block lg:top-[240px] md:top-[850px] top-[620px]">
          <p className=" text-[17px] font-[500]">
             Shop now
          </p>
        </div>

        </div>

        <div className="cursor-pointer  relative  group ">
          <div className="relative">
            <div className="  absolute  inset-0  hover:hidden ">
              <Image className="sm:w-[100%] lg:w-auto" src={Product3} alt="div" />
            </div>
            <div className="bg-[#F7F1E8] font-[400] absolute    top-0 left-0  text-[11px] rounded-[5px]   border-[1px] py-[5px] px-2 mt-[15px] ml-[14.5px] group-hover:hidden">
              Top Rated: 5 / 5
            </div>
          </div>
          <div className="   hidden absolute inset-0   group-hover:block">
            <Image className="hover:border-black hover:border-[1px]" src={Product3Hover} alt="div" />
          </div>
          <div className=" group-hover:hidden absolute  lg:top-[240px] md:top-[850px] top-[620px]">
            <p className="text-[18.55px] font-[400]">Home</p>
             <p className="text-[17px] font-[400] opacity-40">
             Candle refill<br></br>
             £45.00
            </p>
          </div>
          <div className=" absolute hidden group-hover:block lg:top-[240px] md:top-[850px] top-[620px]">
          <p className=" text-[17px] font-[500]">
             Shop now
          </p>
        </div>

        </div>

        <div className="cursor-pointer  relative  group ">
          <div className="relative">
            <div className="  absolute  inset-0  hover:hidden ">
              <Image className="sm:w-[100%] lg:w-auto" src={Product3} alt="div" />
            </div>
            <div className="bg-[#F7F1E8] font-[400] absolute    top-0 left-0  text-[11px] rounded-[5px]   border-[1px] py-[5px] px-2 mt-[15px] ml-[14.5px] group-hover:hidden">
              Top Rated: 5 / 5
            </div>
          </div>
          <div className="  hidden absolute inset-0   group-hover:block">
            <Image className="hover:border-black hover:border-[1px]" src={Product3Hover} alt="div" />
          </div>
          <div className=" group-hover:hidden absolute  lg:top-[240px] md:top-[850px]">
            <p className="text-[18.55px] font-[400]">Create</p>
             <p className="text-[17px] font-[400] opacity-40">
             Candle refill<br></br>
             £45.00
            </p>
          </div>
          <div className=" absolute hidden group-hover:block lg:top-[240px] md:top-[850px] top-[620px]">
          <p className=" text-[17px] font-[500]">
             Shop now
          </p>
        </div>

        </div>

        
        <div className="cursor-pointer  relative  group ">
          <div className="relative">
            <div className="  absolute  inset-0  hover:hidden ">
              <Image className="sm:w-[100%] lg:w-auto" src={Product3} alt="div" />
            </div>
            <div className="bg-[#F7F1E8] font-[400] absolute    top-0 left-0  text-[11px] rounded-[5px]   border-[1px] py-[5px] px-2 mt-[15px] ml-[14.5px] group-hover:hidden">
              Top Rated: 5 / 5
            </div>
          </div>
          <div className=" hidden absolute inset-0   group-hover:block">
            <Image className="hover:border-black hover:border-[1px]" src={Product3Hover} alt="div" />
          </div>
          <div className=" group-hover:hidden absolute  lg:top-[240px] top-[620px] md:top-[850px]">
            <p className="text-[18.55px] font-[400]">Soul</p>
             <p className="text-[17px] font-[400] opacity-40">
             Candle refill<br></br>
             £45.00
            </p>
          </div>
          <div className=" absolute hidden group-hover:block lg:top-[240px] top-[620px] md:top-[850px]">
          <p className=" text-[17px] font-[500]">
             Shop now
          </p>
        </div>

        </div>


      </div>
    </div>
  );
}
