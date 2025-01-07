import React from 'react'

function Submit_Button(props) {
  return (
    <input type="submit" value={props.value} onClick={props.onBtnClick} className="w-full a2  p-3 bg-black rounded-lg text-white font-medium cursor-pointer" />
  )
}

export default Submit_Button