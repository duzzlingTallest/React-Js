import React from 'react'

export default function MapFun_key() {

    let names = ["jalpa", "kaushal", "urvish"]

    return (
        <>
            {names.map((e, i) => {
                return <h1 key={i} >{e}</h1>
            })}
        </>
    )
}
