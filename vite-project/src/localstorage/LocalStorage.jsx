import { Button } from 'antd'
import React, { useEffect, useState } from 'react'
import { Input, Label } from 'reactstrap'
import "./N.css"

export default function LocalStorage() {

    let [name, setName] = useState("")
    let [arr, setArr] = useState([])

    function getName(e) {
        setName(e?.target?.value)
    }

    function addName(params) {
        setArr([...arr, name])
        setName("")
        localStorage.setItem("arrData", JSON.stringify([...arr,name]))
    }

    useEffect(()=>{
        // console.log("---Before---",arr);
        let dataFromLocalStorage = localStorage.getItem("arrData")
        let normalData = JSON.parse(dataFromLocalStorage)
        setArr(normalData)
        // console.log("--after--", arr);
    },[])

    return (
            <div className='box '>
                <h1>
                    {name}
                </h1>
                <Label htmlFor="name">Name : </Label>
                <Input type="text" id="name" onChange={(e) => getName(e)} />
                <div className='mt-3'>
                    <button type="button" className="btn btn-success" onClick={() => addName()}>Add Name</button>
                </div>
                <div>
                    {arr.map((e, i) => {
                        return <h1 key={i}>{e}</h1>
                    })}
                </div>
            </div>
    )
}
