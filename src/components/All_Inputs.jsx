import React from 'react'

function All_Inputs(props) {
  return (
    <input type={props.type} required  onChange={props.onChange} placeholder={props.placeholder} className={props.className} />
  )
}

export default All_Inputs