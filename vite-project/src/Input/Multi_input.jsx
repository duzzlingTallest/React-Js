import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';

export default function Multi_input() {

    let [data, setData] = useState({ cName: "", cNumber: "", pDate: "" })
    let [arrData, setArrData] = useState([])
    console.log("🚀 ~ file: Multi_input.jsx:8 ~ Multi_input ~ arrData:", arrData)

    // to get data from input and store them in data state

    function getData(e) {
        console.log("---", e.target.cName);
        setData({ ...data, [e.target.name]: e?.target?.value })
        console.log("data : ",data);
    }

    //to Create Input feild

    function handlerSubmit(params) {
        setArrData([...arrData,data])
        console.log("🚀 ~ arrData:", arrData)
        setData({ cName: "", cNumber: "", pDate: "" })
    }

    return (
        <>
            <div className='inpDiv'>
                <label htmlFor="name">Car Name</label>
                <input type="text" name="cName" value={name.cName}
                    onChange={(e) => getData(e)} />

                <label htmlFor="name">Car Number</label>
                <input type="text" name="cNumber" value={name.cNumber} onChange={(e) => getData(e)} />

                <label htmlFor="name">Purches Date</label>
                <input type="text" name="pDate" value={name.pDate} onChange={(e) => getData(e)} />

                <Button
                    onClick={() => handlerSubmit()}
                    className="mt-3 p-2"
                    variant="dark">
                    Submit
                </Button>
            </div>
        </>
    )
}
