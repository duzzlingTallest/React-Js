import React, { useState } from 'react'

import "../app.scss"

export default function Use_State_fun() {
    let [count, setCount] = useState(0)


    let x = 0;

    function inc(params) {
        x++
        console.log("🚀 ~ file: Use_State_fun.jsx:7 ~ inc ~ x:", x)
    }

    function intCount(params) {
        console.log("---------", count);
        // count = count++
        setCount(count + 1); // count = count + 1
    }

    return (
        <div className='btn'>
            {/* <h1>{x}</h1>
            <button onClick={() => inc()}>increment</button> */}

            <h1 className='count'>{count}</h1>
            <button onClick={() => intCount()}>increment</button>
        </div>
    )
}





































