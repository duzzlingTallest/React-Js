import React, { useState } from 'react'
import "./Api.css"
import { Button } from 'react-bootstrap'

import axios from "axios";


export default function Api() {

    let [data, setData] = useState([])

    function callApi(params) {
        axios({
            method: "get",
            // url: "http://universities.hipolabs.com/search?country=United+States"
            url: "https://jsonplaceholder.typicode.com/users"
        })
            .then((response) => {
                setData(response.data);
            })
            .catch((e) => {
                alert(e)
                console.log(e.message);
            })
    }

    return (
        <>

            <Button  variant="primary" onClick={() => callApi()}>
                Call Api
            </Button>
            <div className="table-wrapper">
                {data.length > 0 ? (
                    <table className="fl-table">
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Name</th>
                                <th>User Name</th>
                                <th>Email</th>
                                <th>City</th>
                                <th>City Zipcode</th>
                                <th>let</th>
                                <th>lng</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((e, i) => (
                                <tr key={e.id}>
                                    <td>{i + 1}</td>
                                    <td>{e.name}</td>
                                    <td>{e.username}</td>
                                    <td>{e.email}</td>
                                    <td>{e.address.city}</td>
                                    <td>{e.address.zipcode}</td>
                                    <td>{e.address.geo.lat}</td>
                                    <td>{e.address.geo.lng}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    ) : null}
            </div>

        </>
    )
}
