import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import "./app.css"


export default function Input_Add() {
  let [add, setAdd] = useState("")
  let [arr, setArr] = useState([])

  function getAdd(e) {
    setAdd(e?.target?.value)
  }

  function addAdd(params) {
    setArr([...arr, add])
    setAdd("")
  }
  return (
    <main className="card">
      <h1>{add}</h1>
      <label htmlFor="add">Address : </label>
      <input type="text" id='add' onChange={(e) => getAdd(e)} value={add} /> <br /><br />
      <Button variant="dark" onClick={() => addAdd()}>Add Address</Button> <br /><br />
      <div style={{ color: "white", backgroundColor: "Violet" }}>
        {arr.map((e, i) => {
          return <h1 key={i}>{e}</h1>
        })}
      </div>
    </main>
  )
}
