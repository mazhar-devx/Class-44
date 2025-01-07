import React from 'react'

function Dashboard(props) {
  return (
    <>
    <h1>Welcome user</h1>
    <div>you are login as <span>{props.Email}</span></div>
    </>
  )
}

export default Dashboard