import React from 'react'
import { IoArrowUp } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import images_src from '../../assets/a-Photoroom.png'
import Images from "./Image"

 function Body_Data() {
  return (
    <div>
      <div className='p-5 bg-white shadow-lg rounded-xl flex flex-col justify-between'>
        <div className='flex items-center gap-6 border-b pb-7'>
            <div className='h-32 w-32 bg-[#dbd1fb] rounded-full flex items-center justify-center'>
                <img src={images_src}  alt="" />
            </div>
            <div className='flex flex-col gap-3'>
                <div className='flex flex-col '>
                    <div className='font-medium text-[#7f808c] text-sm'>TOP USER</div>
                    <div className='font-bold text-black text-xl'>TOP USER</div>
                </div>
                <div className='flex flex-col '>
                    <div className='font-medium text-[#7f808c] text-sm'>DAILY PURCHASE</div>
                    <div className='font-bold text-black text-xl'>10 items</div>
                </div>
            </div>
        </div>
        <div className='pt-4 flex flex-col gap-7'>
            <div className='flex flex-col gap-2'>
                <div className='flex items-center justify-between'>
                 <div className='text-sm font-medium text-[#6f7074]'>TOTAL NEW USERS</div>
                 <div className='flex items-center gap-1'>
                    <div className='h-6 w-6 bg-[#c0fdd7] rounded-full flex items-center justify-center'>
                    <IoArrowUp className='text-[#4a8e66]'/>
                    </div>
                    <div className='font-medium text-[#458663]'>8,20%</div>
                 </div>
                </div>
                <div className='text-6xl font-bold text-black'>5,9k</div>
            </div>
            <div className='flex items-center justify-between'>
                <Images/>
                <div className='py-2 px-6 flex items-center gap-2 bg-[#f5f7f6] rounded-full'>
                    <div className='font-bold text-black '>View All</div>
                    <FaArrowRightLong  className='text-[#666575]'/>
                    </div> 
            </div>
        </div>
      </div>
      
    </div>
  )
}

export default Body_Data