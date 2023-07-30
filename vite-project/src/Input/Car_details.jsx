import React from "react";
import "./input.scss";
import { Button, Table } from "react-bootstrap";
import { useState } from "react";

export default function Car_details() {
  let [data, setData] = useState({ Cname: "", Cnumber: "", Pdate: "" });
  let [arrData, setArrData] = useState([]);

  // to get data from input and store them in data state
  function getData(e) {
    console.log("----", e.target.name);
    setData({ ...data, [e.target.name]: e?.target?.value });
    console.log("data:", data);
  }

  // to create input feild
  function handlerSubmit() {
    setArrData([...arrData, data]);
    console.log("🚀 ~ rrData:", arrData);
    setData({ Cname: "", Cnumber: "", Pdate: "" });
  }
  return (
    <>
      <div className="inputDiv">
        <label htmlFor="name">Car Name : </label>
        <input
          value={data.Cname}
          onChange={(e) => getData(e)}
          type="text"
          name="Cname"
          placeholder="Enter Car Name"
        />
        <label htmlFor="name">Car Number : </label>
        <input
          value={data.Cnumber}
          type="text"
          name="Cnumber"
          onChange={(e) => getData(e)}
          placeholder="Enter Car Number"
        />
        <label htmlFor="name">Purches Date : </label>
        <input
          value={data.Pdate}
          type="text"
          name="Pdate"
          onChange={(e) => getData(e)}
          placeholder="Enter Purches Date"
        />
        <Button
          onClick={() => handlerSubmit()}
          className="mt-3 p-2"
          variant="dark"
        >
          Submit
        </Button>
      </div>
      <br />
      {arrData.length > 0 ? (
        <>
          <h1>Data Table</h1>
          <div className="tableDiv">
            <Table className="  mt-4" striped bordered hover>
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Car Name</th>
                  <th>Car Number</th>
                  <th>Purches Date</th>
                </tr>
              </thead>
              <tbody>
                {arrData.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.Cname}</td>
                    <td>{item.Cnumber}</td>
                    <td>{item.Pdate}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </>
      ) : null}
    </>
  );
}

// let obj = { name: 100, test: 90 };
// let keyName = "test";
// obj[keyName]; // => obj.test
