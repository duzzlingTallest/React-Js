import React, { useState } from 'react'

export default function ConditionalRen() {
  
  let [flag,setFlag]=useState(true)

  function changeName(params) {
    setFlag(!flag)
  }
  
    return (
    <div>
        {flag ? <h1>Kaushal</h1> : <h1>Damani</h1>}
        <button onClick={()=>changeName()}>Change Name</button>
    </div>
  )
}
