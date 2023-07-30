import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import "./city.scss"

export default function City_data() {

    let [data, setData] = useState({
        cName: "",
        sName: "",
        pop: ""
    })
    let [arrData, setArrData] = useState([])

    // to get the data from the input and store it in the state

    function getData(eve) {
        console.log("-----", eve?.target?.name);
        setData({ ...data, [eve?.target?.name]: eve?.target?.value })
        console.log("data:", data);
    }
    // to create input feild
    function sub(params) {
        setArrData([...arrData, data])
        console.log("-----", arrData);
        setData({
            cName: "",
            sName: "",
            pop: ""
        })
    }

    return (
        <>
            <div className='div'>
                <label htmlFor="name">City Name</label>
                <input type="text" placeholder='Enter City Name' name='cName' onChange={(eve) => getData(eve)} value={data.cName} />

                <label htmlFor="name">State Name</label>
                <input type="text" placeholder='Enter State Name' name='sName' onChange={(eve) => getData(eve)} value={data.sName} />

                <label htmlFor="name">City Population</label>
                <input type="text" placeholder='Enter City Population' name='pop' onChange={(eve) => getData(eve)} value={data.pop} />

                <Button className='mt-3 p-2' variant='dark' onClick={() => sub()}>Submit</Button>
            </div>
            <br />

            {arrData.length>0?(


            <>
            <h1>City Details</h1>
            <div className='TableDiv'>
                <Table className='mt-4' striped bordered hover>
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>City Name</th>
                            <th>State Name</th>
                            <th>City Population</th>
                        </tr>
                    </thead>
                    <tbody>
                        {arrData.map((item, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.cName}</td>
                                <td>{item.sName}</td>
                                <td>{item.pop}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
            </>
             ):null}
        </>
    )
}
