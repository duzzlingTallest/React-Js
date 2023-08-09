import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

export default function ProCOm2(props) {

    const [age, setAge] = useState(20)

    function pass(params) {
        props.setAge(age)
    }

    return (
        <>
            <h1> Hii I am HERE......!</h1>
            <Button onClick={() => pass()}>Data</Button>
        </>
    )
}
