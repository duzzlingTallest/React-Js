import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import "./uData.scss"

export default function UserDataLs() {

    let [data, setData] = useState({
        uName: "",
        uNum: "",
        uAdd: "",
        uMail: "",
        uPass: "",
    })

    let [arrData, setArrData] = useState([])

    // to get the data from the input and store it in the state

    function getData(eve) {
        console.log("----", eve?.target?.name);
        setData({ ...data, [eve?.target?.name]: eve.target?.value })
        console.log(data);
    }

    // to create input feild

    function sub(params) {
        setArrData([...arrData, data])
        console.log("----", arrData);
        setData({
            uName: "",
            uNum: "",
            uAdd: "",
            uMail: "",
            uPass: "",
        })
        localStorage.setItem("arrData",JSON.stringify([...arrData,data]))
    }

    // Delete the data from the input and store it in the state

    function deleteData(index) {
        const rows = arrData.filter((item, i) => i !== index)
        setArrData(rows)
    }

    // Update

    let [isNew, setIsNew] = useState(true)
    let [ind, setInd] = useState(null)  // we have to give null because 0 is already available in array as index

    function handleUpdate(index, data) {
        // console.log("====>", index, data);
        setData(data) // ?
        setIsNew(false); // ?
        setInd(index)
    }

    function updateData() {
        // console.log("----",ind,data);
        arrData.splice(ind, 1, data)
        setArrData([...arrData])
        setData("")
        setIsNew(true)
    }

    //Local Storage

    useEffect(()=>{
        console.log("---before---",arrData);
        let dataFromLocalStorage = localStorage.getItem("arrData");
        let normalData = JSON.parse(dataFromLocalStorage);
        setArrData(normalData) // state take some time to set
        console.log("---after---,arr");
    },[])

    return (
        <>
            <header>
                <h1>User Data</h1>
            </header>

            <div id="form">
                <div className="fish" id="fish"></div>
                <div className="fish" id="fish2"></div>

                <form id="waterform" method="post">

                    <div className="formgroup" id="name-form">
                        <label htmlFor="name"></label>
                        <input type="text" placeholder='Enter User Name' name='uName' onChange={(eve) => getData(eve)} value={data.uName} />
                    </div>

                    <div className="formgroup" id="email-form">
                        <label htmlFor="email"></label>
                        <input type="text" name="uNum" placeholder='Number' onChange={(eve) => getData(eve)} value={data.uNum} />
                    </div>

                    <div className="formgroup" id="message-form">
                        <label htmlFor="message"></label>
                        <input type="text" name="uAdd" placeholder='Address' onChange={(eve) => getData(eve)} value={data.uAdd} />
                    </div>

                    <div className="formgroup" id="message-form">
                        <label htmlFor="message"></label>
                        <input type="text" name="uMail" placeholder='E-mail' onChange={(eve) => getData(eve)} value={data.uMail} />
                    </div>

                    <div className="formgroup" id="message-form">
                        <label htmlFor="message"></label>
                        <input type="text" name="uPass" placeholder='Password' onChange={(eve) => getData(eve)} value={data.uPass} />
                    </div>

                    {/* Update Condoition */}

                    {isNew ? (
                        <Button className='btn' variant='#e58f0e' onClick={() => sub()}>Submit</Button>
                    ) : (
                        <Button className='btn' variant='#primary' onClick={() => updateData()}>Update</Button>
                    )}


                </form>
            </div>

            {arrData.length > 0 ? (

                <>
                    <h1 className='mt-5'>User DATA</h1>

                    <div className='TableDiv'>
                        <Table className='mt-4' striped bordered hover>
                            <thead>
                                <tr>
                                    <th>No.</th>
                                    <th>User Name</th>
                                    <th>Number</th>
                                    <th>Address</th>
                                    <th>E-mail</th>
                                    <th>Password</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {arrData.map((e, i) => (
                                    <tr key={e}>
                                        <td>{i + 1}</td>
                                        <td>{e.uName}</td>
                                        <td>{e.uNum}</td>
                                        <td>{e.uAdd}</td>
                                        <td>{e.uMail}</td>
                                        <td>{e.uPass}</td>
                                        <td>
                                            <Button className='btn' variant='danger' onClick={() => deleteData(i)}>Delete</Button>


                                            <Button className='btn' variant='primary' onClick={() => handleUpdate(i, e)}>Update</Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>

                </>
            ) : (
                <h1>Data Not Available....!</h1>
            )}
        </>
    )
}






