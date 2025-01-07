import React from "react";
// src1={images_src} bg="bg-[#e2d5f0]"
import images_src1 from "../../assets/a-Photoroom.png";
import images_src2 from "../../assets/aa2.png";
import images_src3 from "../../assets/aa3-removebg-preview.png";
import images_src4 from "../../assets/aa4-removebg-preview.png";
let src_Images = [
  {
    src:images_src1,
    position: "bg-[#d6cdef] left-0"
  },
  {
    src:images_src2,
    position: "bg-[#f1d49f] left-8"
  },
  {
    src:images_src3,
    position: "bg-[#f8bfb5] left-16"
  },
  {
    src:images_src4,
    position: "bg-[#cae9fb] left-24"
  },
   ];
 function Image() {
  return (
    <div className="flex relative w-40 h-12">
      {
      
      src_Images.map(src => {
          <>
          <img src={src.src} alt="image" className={` ${src.position} absolute h-12 w-12 rounded-full border-2 border-white `} />
          </>
      
      })
      
      }
    </div>
  );
}
export default Image;