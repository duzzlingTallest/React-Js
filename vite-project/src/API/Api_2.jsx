import React, { useState } from 'react'
import "./Api.css"
import { Button } from 'react-bootstrap'

import axios from "axios";


export default function Api_2() {

    let [data, setData] = useState([])

    function callApi(params) {
        axios({
            method: "get",
            url: "http://universities.hipolabs.com/search?country=United+States"
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
                                <th>country</th>
                                <th>web_pages</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((e, i) => (
                                <tr key={e.id}>
                                    <td>{i + 1}</td>
                                    <td>{e.name}</td>
                                    <td>{e.country}</td>
                                    <td>{e.web_pages}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    ) : null}
            </div>

        </>
    )
}
