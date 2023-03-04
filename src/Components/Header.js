import React from 'react'
import Image from 'next/image'
import Hero from "../../public/Assets/Hero.png" 
import logo from "../../public/Assets/logo.png"
export default function Header() {
  return (
      <div>
       <div className='bg-[#F7F1E8] flex justify-between items-center pt-4 pb-4 px-5 border-black border-b-[1px]'>
          <div className=''>
          <svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 96 960 960" width="30"><path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"/></svg>
          </div>
          <div>
              <Image  height={60} width={70} src={logo} alt='div'/>
          </div>
             <p className='text-black cursor-pointer transition-[.65s] font-[400] text-[1rem]'>Cart</p>
       </div>
            <div className='flex justify-centre w-[100%] border-b-[1px] border-black'>
             <div className='w-[50%]'>
            <Image className=' ' height={100}  width={700} src={Hero} alt='div' /> 
             </div>
             <div className='bg-[#F5EEE3] w-[50%] flex flex-col justify-center items-center'>
                 <p className='text-black font-[400] text-[21px] h-[45px]'>Eden, the blissful one.</p>
                 <p className='text-black text-[17px] font-[400] h-14'>Our newest sell-out fragrance is back in stock baby!</p>
                  <button className='hover:bg-[#ff4] hover:text-black transition-[0.15s] ease-in text-[1.1rem]  pt-[8px] pb-[8px] px-[18px] rounded-[35px] text-white cursor-pointer border border-black bg-black'>Shop Eden</button>
             </div>
            </div>
      </div>
  );
}
