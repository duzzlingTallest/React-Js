import React, { useState } from "react";
import { Button, Form, Modal, Table } from "react-bootstrap";
import "./Pop_up.scss"

export default function Pop_pop() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  let [data, setData] = useState({
    uName: "",
    uNum: "",
    uAdd: "",
    uMail: "",
    uPass: "",
  })

  let [arrData, setArrData] = useState([])

  let [isNew, setIsNew] = useState(true);
  let [ind, setInd] = useState(null); // we have to give null because 0 is already available in array as index





  // to get the data from the input and store it in the state

  function getData(eve) {
    console.log("----", eve?.target?.name);
    setData({ ...data, [eve?.target?.name]: eve?.target?.value })
    console.log("---->", data);
  }

  // to create input feild

  function sc(params) {
    setArrData([...arrData, data])
    console.log("<--->", arrData);
    setData({
      uName: "",
      uNum: "",
      uAdd: "",
      uMail: "",
      uPass: "",
    })
  }

  function updateData() {
    console.log("----", ind, name);
    arr.splice(ind, 1, name);
    setArr([...arr]);
    setName("");
    setIsNew(true);
  }

  // Delete the data from the input and store it in the state

  function deleteData(index) {
    const rows = arrData.filter((item, i) => i !== index)
    setArrData(rows)
  }

  // for update
  function handleUpdate(index, data) {
    console.log("====>", index, data);
    setData(data);
    setIsNew(false);
    setInd(index);
  }

  return (
    <>
      <Button className='mt-5 d-flex justify-content-center' variant="primary" onClick={handleShow}>
        Add User
      </Button>


      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>User Data</Modal.Title>
        </Modal.Header>
        <>
          <form action="" className="fm">

            <div >
              <label htmlFor="name"></label>
              <input type="text" placeholder='Enter User Name' name='uName' onChange={(eve) => getData(eve)} value={data.uName} />
            </div>

            <div >
              <label htmlFor="email"></label>
              <input type="text" name="uNum" placeholder='Number' onChange={(eve) => getData(eve)} value={data.uNum} />
            </div>

            <div >
              <label htmlFor="message"></label>
              <input type="text" name="uAdd" placeholder='Address' onChange={(eve) => getData(eve)} value={data.uAdd} />
            </div>

            <div >
              <label htmlFor="message"></label>
              <input type="text" name="uMail" placeholder='E-mail' onChange={(eve) => getData(eve)} value={data.uMail} />
            </div>

            <div >
              <label htmlFor="message"></label>
              <input type="text" name="uPass" placeholder='Password' onChange={(eve) => getData(eve)} value={data.uPass} />
            </div>

          </form>
        </>
        <Modal.Footer >
          {isNew ? (
            <Button variant="primary" onClick={() => sc(handleClose)}>
              Add Data{/* Save Changes */}
            </Button>
          ) : (
            <Button variant="primary" onClick={() => updateData(handleClose)}>
              Save Changes
            </Button>
          )}
        </Modal.Footer>
      </Modal>

      {arrData.length > 0 ? (<>
        <h1 className='mt-5 d-flex justify-content-center'>User DATA</h1>

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
                    <Button
                      onClick={() => handleUpdate(i, e)}
                      className="ms-4"
                      variant="primary"
                    >
                      Update
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>

      </>) : (
        <h1>Data Not Available....!</h1>
      )}



    </>
  );
}