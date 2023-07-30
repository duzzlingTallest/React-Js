import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import "./uData.scss"

export default function UserData() {

    let [data, setData] = useState({
        uName: "",
        uNum: "",
        uAdd: "",
        uMail: "",
        uPass: "",
    })

    let [arrData, setArrData] = useState([])
    let [rows] = useState([])

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
    }

    // Delete the data from the input and store it in the state

    function deleteData(index) {
            rows = rows.filter((item, i) => i!== index)
            setArrData(rows)
        }



    return (
        <>
            <header>
                <h1>User Data</h1>
            </header>

            <div id="form">

                {/* <div className='uDiv'>
        <label htmlFor="">User Name : </label>
        <label htmlFor=""> Number : </label>
        <label htmlFor=""> Address : </label>
        <label htmlFor="">E-mail Id : </label>
        <label htmlFor=""> Password : </label>
        <label htmlFor="">User Name : </label>
    </div> */}



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

                    <Button className='btn' variant='#e58f0e' onClick={() => sub()}>Submit</Button>
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
                                {arrData.map((i, e) => (
                                    <tr key={e}>
                                        <td>{e + 1}</td>
                                        <td>{i.uName}</td>
                                        <td>{i.uNum}</td>
                                        <td>{i.uAdd}</td>
                                        <td>{i.uMail}</td>
                                        <td>{i.uPass}</td>
                                        <td>
                                            <Button className='btn' variant='danger' onClick={() => deleteData(e)}>Delete</Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>

                </>
            ) : null}
        </>
    )
}




