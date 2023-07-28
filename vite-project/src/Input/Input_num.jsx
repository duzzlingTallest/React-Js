import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import "./app.css"


export default function Input_num() {
    let [num, setNum] = useState("")
    let [arr, setArr] = useState([])

    function getNum(e) {
        setNum(e?.target?.value)
    }

    function addNum(params) {
        setArr([...arr, num])
        setNum("")
    }
    return (
        <main className="card">
            <h1>{num}</h1>
            <label htmlFor="num">Number : </label>
            <input type="text" id='num' onChange={(e) => getNum(e)} value={num} /><br /><br />
            <Button variant="info" onClick={() => addNum()}>Add Number</Button> <br /><br />
            <div style={{ color: "white", backgroundColor: "Violet" }}>
                {arr.map((e, i) => {
                    return <h1 key={i}>{e}</h1>
                })}
            </div>
        </main>
    )
}
