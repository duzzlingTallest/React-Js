import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import "./app.css"

export default function Input_Name() {
  let [name, setName] = useState("");
  let [arr, setArr] = useState([]);
  function getName(e) {
    // console.log("---", e?.target?.value);
    setName(e?.target?.value);
  }

  function addName(params) {
    setArr([...arr, name]); // add name in array and also copy old array
    setName(""); // for do input empty on click of add btn
    // console.log("arr:", arr);
  }
  return (
    <main className="card">
      <h1>{name}</h1>
      <label htmlFor="name">Name : </label>
      <input type="text" id="name" onChange={(e) => getName(e)} value={name} /><br /><br />
      <Button variant="warning" onClick={() => addName()}>Add Name</Button> <br /><br />
      <div style={{ color: "white", backgroundColor: "Violet" }}>
        {arr.map((e, i) => {
          return <h1 key={i}>{e}</h1>;
        })}
      </div>
    </main>
  )
}

// let arr =[1,2,3]

// let narr = [...arr,4]


