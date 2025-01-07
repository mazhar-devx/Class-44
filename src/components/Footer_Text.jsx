import React from 'react'

 function Footer_Text(props) {
  return (
    <div>
      <div className='pt-3 text-lg text-center font-medium text-[#72747d] w-full'>
        <span className='text-black'>{props.text1}  </span>{props.text2} 
      </div>
    </div>
  )
}
export default Footer_Text