import React from "react";
import Image from "next/image";
import Sleeping from "../../public/Assets/Sleeping.png";
import Hero2 from "../../public/Assets/Hero2.png";
import Logo1 from "../../public/Assets/Logo1.png";
import Logo2 from "../../public/Assets/Logo2.png";
import Logo3 from "../../public/Assets/Logo3.png";
import Logo4 from "../../public/Assets/Logo4.svg";

export default function Attributes() {
  return (
    <div>
      <div className="bg-[#f7f1e8]  flex lg:flex-row sm:flex-col  justify-center m-auto    border-black border-b-[1px] ">
        <div className="lg:w-[50%] sm:w-[100%] lg:border-black lg:border-r-[1px] border-0 pt-[30px] pb-[20px] lg:pb-0">
          <p className="font-[400] text-[17px] lg:h-[85px] h-[60px] pl-[1.6rem]">
            Find the right scent for your mood ↓
          </p>
          <div className="font-[400] text-[33px] leading-[40px] pl-[1.6rem]  cursor-pointer transition-all ease-in duration-300 hover:text-[grey]  ">
            <p className="hover:text-black">Feel Sleepy</p>
            <p className="hover:text-black">Feel Joyful</p>
            <p className="hover:text-black">Feel Relaxed</p>
            <p className="hover:text-black">Feel Uplifted</p>
            <p className="hover:text-black">Feel Grounded</p>
            <p className="hover:text-black">Feel Zen</p>
            <p className="hover:text-black">Feel Blissful</p>
          </div>
        </div>

        <div className="lg:w-[50%] hidden lg:block  justify-center lg:flex items-center ">
          <Image className="w-[88%] h-[88%]" src={Sleeping} alt="div" />
        </div>
      </div>

      <div className="bg-[#f7f1e8]  flex flex-col lg:flex-row  justify-center m-auto    border-black border-b-[1px] lg:h-[422px] ">
        <div className="lg:w-[50%] w-[100%] border-black lg:border-r-[1px] border-b-[1px] lg:border-b-0 lg:pb-0 pb-[20px] border-r-0 lg:pt-[30px] pt-[18px]">
          <p className="font-[400] text-[17px] lg:h-[85px] h-[65px] pl-[1.6rem]">
            What theyve said
          </p>
          <div className="font-[400] text-[21px] leading-[25px] pl-[1.6rem] ">
            <p className="h-[257px]">
              Totally natural and non-toxic, this Eym candle{" "}
              <br className="hidden lg:block"></br>
              offers a mellowing scent{" "}
              <br className="hidden md:block lg:hidden"></br> – think
              frankincense and <br className="hidden lg:block"></br>
              patchouli – without the compromising your{" "}
              <br className="hidden  md:block"></br>
              immediate environment.
            </p>
            <div className="flex gap-8 ml-1">
              <Image className="w-[80px] h-[22px]" src={Logo1} alt="div" />
              <Image
                className="w-[80px] h-[20px] opacity-40 "
                src={Logo2}
                alt="div"
              />
              <Image
                className="w-[80px] h-[20px] opacity-40"
                src={Logo3}
                alt="div"
              />
              <Image
                className="w-[80px] h-[20px] opacity-40"
                src={Logo4}
                alt="div"
              />
            </div>
          </div>
        </div>
        <div className="lg:w-[50%] flex justify-center items-center">
          <Image
            className="h-[180px] lg:w-[88%] lg:h-[88%] w-[100%]"
            src={Hero2}
            alt="div"
          />
        </div>
      </div>
    </div>
  );
}
