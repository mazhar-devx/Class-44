import React from 'react'
import Page_Body_3 from "./Page_Body_3"
import Page_Body_4 from './Page_Body_4'

function Page_Body_2(props) {
  return (
    <>
        {
            (props.number == 2) ? <Page_Body_3/> : <Page_Body_4/>
        }
    </>
  )
}

export default Page_Body_2
