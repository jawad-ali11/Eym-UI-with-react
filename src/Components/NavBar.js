import React from 'react'
import Image from "next/Image";
import logo from "../../public/Assets/logo.png"
export default function NavBar() {
  return (
    <div>
      
      <div className='  bg-[#F7F1E8] flex justify-between items-center pt-4 pb-4 px-5 border-black border-b-[1px]'>
          <div className=''>
          <svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 96 960 960" width="30"><path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"/></svg>
          </div>
          <div>
              <Image  height={60} width={70} src={logo} alt='div'/>
          </div>
             <p className='text-black cursor-pointer transition-[.65s] font-[400] text-[1rem]'>Cart</p>
       </div>
    </div>
  )
}
