import React from "react";

 function Up_Down_counter_box(props) {
    let Icon1 = props.icon1;
    let Icon2 = props.icon2;
  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="font-bold text-sm text-[#717076]">DIGITAL PRODUCT</div>
        <div className="flex gap-2 items-center">
          <div className={`h-6 w-6 flex items-center justify-center rounded-full ${props.Bg1}`}>
            <Icon1 className={props.color1} />
          </div>
          <div className="font-bold text-3xl">{props.text1}</div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="font-bold text-sm text-[#717076]">DIGITAL PRODUCT</div>
        <div className="flex gap-2 items-center">
          <div className={`h-6 w-6 rounded-full ${props.Bg2} flex items-center justify-center`}>
            <Icon2 className={props.color2} />
          </div>
          <div className="font-bold text-3xl">{props.text2}</div>
        </div>
      </div>
    </>
  );
}
export default Up_Down_counter_box;