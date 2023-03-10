import React from 'react'
import Image from "next/image";
import { Input } from 'postcss';
import visa from "../../public/Assets/visa.png"
import Master from "../../public/Assets/Master.png"
export default function LandingpageBottom() {
  return (
    <div className='bg-[#f7f1e8] lg:pt-[30px] pt-[15px] pb-5'>
        <div className='flex lg:flex-row flex-col   gap-[30px]'>
                
                <div className=' w-[50%]'>
                    <p className='font-[400] text-[19px] pl-[1.5rem]'>Elevate your mood</p>
                </div>

                <div className='flex lg:w-[50%] w-[100%] pt-[24px] lg:pt-0 lg:gap-[70px] gap-[60px] lg:flex-row flex-col pl-[1.5rem]'>

                     <div>
                        <p className='text-[16px] font-[500] opacity-90' >Newsletter</p>
                        <p className='w-[96%] sm:w-[100%]'>Join our newsletter to <br className='hidden lg:block'></br> 
                        receive 15% off your first <br className='hidden lg:block'></br>
                         order and only the good <br className='hidden lg:block'></br>
                          news.</p>
                        <form className='lg:pt-[17px] pt-[10px]'>
                            <input className='lg:w-auto w-[97%] border-t-[1px] border-l-[1px] border-r-[1px]   text-[14px] hover:bg-white border-black py-[8px] px-3 pl-3 bg-[#f7f1e8] placeholder-black' type="text" placeholder="First name"></input><br></br>
                            <input className=' lg:w-auto w-[97%] border-t-[1px] border-l-[1px] border-r-[1px] text-[14px] hover:bg-white border-black py-[8px] px-3 pl-3 bg-[#f7f1e8] placeholder-black' type="text" placeholder="Last name"></input><br></br>
                            <input className='lg:w-auto w-[97%] border-[1px]  text-[14px] hover:bg-white border-black py-[8px] px-3 pl-3 bg-[#f7f1e8] placeholder-black' type="email" placeholder="Email"></input><br></br>
                            <button className='lg:w-auto w-[97%] text-[14px] cursor-pointer transition-[0.15s] ease-in hover:bg-gray-900  bg-black px-[62px] py-5 text-white'>Subscribe</button>
                        </form>
                     </div>
              
                  <div className='lg:flex lg:gap-[70px] grid grid-cols-2 gap-[15px]'>
                     <div>
                        <p  className='text-[16px] font-[500]'>Help</p>
                        <ul className='cursor-pointer '>
                            <li className='hover:opacity-50 transition-[.35s] ease-in'>Account</li>
                            <li className='hover:opacity-50 transition-[.35s] ease-in'>Shipping</li>
                            <li className='hover:opacity-50 transition-[.35s] ease-in'>Returns</li>
                            <li className='hover:opacity-50 transition-[.35s] ease-in'>Contact</li>
                            <li className='hover:opacity-50 transition-[.35s] ease-in'>Stockists   </li>
                            <li className='hover:opacity-50 transition-[.35s] ease-in'>Covid-19</li>
                            <li className='hover:opacity-50 transition-[.35s] ease-in'>Sign Up</li>
                        </ul>
                     </div>

                     <div>
                        <p  className='text-[16px] font-[500]'>Follow us</p>
                        <ul className='cursor-pointer '>
                            <li className='hover:opacity-50 transition-[.35s] ease-in'>Instagram</li>
                            <li className='hover:opacity-50 transition-[.35s] ease-in'>Facebook</li>
                       </ul>
                    </div>  
                   </div>
                </div>
        </div>

        <div className='grid lg:grid-cols-3 grid-cols-2 items-center  pt-[90px]'>

            <div className='sm:w-[50%] w-[100%] lg:pt-4 sm:pt-0 pt-[24px] pb-[20px] lg:pb-0'>
                <p className='opacity-50 pl-[1.5rem]'>© Eym Naturals</p>
            </div>

            
                <div className='lg:ml-[215px] ml-[23px] sm:gap-[22px] gap-0 lg:gap-0  flex lg:flex-col flex-col sm:flex-row pb-[20px] lg:pb-0'>
                    <p className='opacity-50 cursor-pointer hover:opacity-10 transition-[.35s] ease-in'>Privacy Policy</p>
                    <p className='opacity-50 cursor-pointer hover:opacity-10     transition-[.35s] ease-in'>Terms & Conditions</p>
                </div>
                
                <div className='flex gap-4 items-center  lg:ml-[109px] ml-[24px]  pt-4 lg:w-auto w-[190%] border-black border-t-[1px] lg:border-0 border-opacity-40'>
                    <p className='opacity-50'>We accept</p>
                    <Image className='w-[50px] h-[16px] opacity-30' src={visa} alt="div" />
                    <Image className='opacity-30'  src={Master} alt="div" /> 
                </div>
            </div>
        
    </div>
  )
}
