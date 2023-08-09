import React, { useState } from 'react'
import ProCOm1 from './ProCOm1'
import ProCOm2 from './ProCOm2'

export default function Main() {

    const [name, setName] = useState("Kaushal")
    const [age, setAge] = useState(0)

    return (
        <>
            <h1>{age}</h1>
            <ProCOm1 data={name}/>   {/* This is a KEY ----> data={name} */}
            <ProCOm2 setAge={setAge}/>
        </>
    )
}
